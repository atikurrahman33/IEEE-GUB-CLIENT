import { motion } from "framer-motion";

const About = () => {
    return (
        <section className="text-gray-700 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center py-6  ">
                <h2 className="text-4xl font-bold text-blue-900 ">Get to Know IEEE</h2>
                <p className="max-w-2xl mx-auto text-gray-500 leading-relaxed text-lg">
                    IEEE Student Branch is more than a club—it's a vibrant hub where future engineers learn, grow, and lead together.
                </p>
            </div>

            {/* Who We Are Section */}
            <div className="flex flex-col md:flex-row items-center  py-12 gap-12">
                <motion.img
                    src="https://i.ibb.co/MFbH663/Screenshot-2025-06-22-122249.png"
                    alt="IEEE Team"
                    className="w-full md:w-1/2 rounded-xl shadow-md"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                />

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="md:w-1/2"
                >
                    <h3 className="text-3xl font-semibold text-blue-900 mb-4">Who We Are</h3>
                    <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                        IEEE Student Branch is a non-profit organization operating under the ECE department, focused on innovation and professional growth. With over 3000+ passionate members, we’re driving technical change through unity and mentorship.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        We conduct workshops, tech talks, coding sessions, and real-world project activities that build leadership, teamwork, and hands-on engineering skills.
                    </p>
                </motion.div>
            </div>

            {/* Our Values Section */}
            <div className=" mx-auto max-w-7xl  py-16 ">
                <div className="text-center mb-10">
                    <h3 className="text-3xl font-bold text-blue-900">What Drives Us</h3>
                    <p className="text-gray-500 max-w-xl mx-auto text-lg">
                        Our core values push us to be better every day—together.
                    </p>
                </div>

                <div className="md:flex w-full mx-auto justify-between gap-6 py-4 no-scrollbar ">
                    {[
                        { icon: "🤝", title: "Collaboration", desc: "Working together for greater impact." },
                        { icon: "🚀", title: "Innovation", desc: "Encouraging creative solutions and ideas." },
                        { icon: "📖", title: "Knowledge", desc: "Promoting continuous learning." },
                        { icon: "🌍", title: "Global Vision", desc: "Connecting with a worldwide network." },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            className=" bg-gray-200 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="text-4xl mb-3">{item.icon}</div>
                            <h4 className="text-xl font-semibold text-blue-800">{item.title}</h4>
                            <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
