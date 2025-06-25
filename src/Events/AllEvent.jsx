import { useEffect, useState } from "react";
import EVECA from "./EVECA";
import { Link } from "react-router-dom";

const AllEvent = () => {
  const [events, setEvents] = useState([]);
  const [showAll, setShowAll] = useState(false); // toggle to control how many to show

  useEffect(() => {
    fetch('../../src/Events/event.json') // Ensure this file is in the "public/Events" folder
      .then(response => response.json())
      .then(data => {
        const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date)); // sort by latest
        setEvents(sorted);
      });
  }, []);

  const displayedEvents = showAll ? events : events.slice(0, 6);

  return (
    <div className="py-8">
        <div>
            <p className="text-center text-6xl font-bold text-golden py-8">Recent and Upcoming Events</p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 pl-16">
        {displayedEvents.map(event => (
          <EVECA key={event.id} event={event} />
        ))}
      </div>
       <Link to="/events">

      {!showAll && (
        <div className="flex justify-center mt-8">
            
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2 font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            See More
          </button>
          
        </div>
      )}
      </Link>
    </div>
  );
};

export default AllEvent;
