import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ColabCard from "./ColabCard";

const Feature = () => {
  const [events, setEvents] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch('../../src/Feature/Colab.json') // Make sure this is in public/Feature/
      .then(response => response.json())
      .then(data => {
        const sorted = data.sort((a, b) => new Date(a.id) - new Date(b.id));
        setEvents(sorted);
      });
  }, []); 

  const displayedEvents = showAll ? events : events.slice(0, 4);

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
      {/* Header and button in one row */}
      <div className="flex items-center justify-between pb-6">
        <div>
        <p className="text-3xl md:text-4xl font-bold text-golden">Featured Collaborations</p>
        <p className="text-blue-400 pt-2 text-base">Working together with leading tech clubs</p>
        </div>
        <Link to="/colab">
        {!showAll && (
          
            <button
              onClick={() => setShowAll(true)}
              className="px-5 py-2 font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              View all collaborations
            </button>
          
        )}
        </Link>

      </div>

      {/* Grid with 4 columns on md+ screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {displayedEvents.map(event => (
          <ColabCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Feature;
