import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Counter = ({ start, target, label, trigger }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!trigger) return;

    let current = start;
    const end = parseInt(target);
    if (current === end) return;

    const duration = 800;
    const steps = end - current;
    const stepTime = Math.max(Math.floor(duration / steps), 10);

    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [trigger, start, target]);

  return (
    <div className="text-blue-500 text-center">
      <span className="text-6xl font-bold">{count}+</span>
      <p className="text-xl font-medium">{label}</p>
    </div>
  );
};

const IEEEnum = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // only trigger once
    threshold: 0.3, // 30% of the section visible
  });

  return (
    <div ref={ref} className="pt-20">
      <p className="text-center text-6xl font-bold text-golden">IEEE in Numbers</p>
      <p className="text-center text-xl font-bold pt-1 text-blue-800">Our impact in the university and beyond</p>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className=" mx-auto"
      >
        <div className="text-blue-400 font-bold px-8 pt-16 h-56 grid grid-cols-1 md:grid-cols-4 gap-6">
          <Counter start={2900} target={3000} label="Members" trigger={inView} />
          <Counter start={15} target={25} label="Events Per Year" trigger={inView} />
          <Counter start={8} target={15} label="Workshops" trigger={inView} />
          <Counter start={5} target={10} label="Years of Excellence" trigger={inView} />
        </div>
      </motion.div>
    </div>
  );
};

export default IEEEnum;
