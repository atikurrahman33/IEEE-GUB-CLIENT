import { useEffect, useState } from "react";
import EVECA from "./EVECA";
import { Link, useLocation } from "react-router-dom";

const AllEvent = () => {
  const location = useLocation();
  const isFullPage = location.pathname === "/events"; // check if in full event page

  const [events, setEvents] = useState([]);
  const [now, setNow] = useState(new Date());
  const [searchText, setSearchText] = useState("");
  const [filterType, setFilterType] = useState("all");

  useEffect(() => {
    fetch("../../src/Events/event.json")
      .then((response) => response.json())
      .then((data) => {
        const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setEvents(sorted);
      });

    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.eventName
      .toLowerCase()
      .includes(searchText.toLowerCase());

    if (filterType === "upcoming") {
      return new Date(event.date) > now && matchesSearch;
    } else if (filterType === "past") {
      return new Date(event.date) < now && matchesSearch;
    }

    return matchesSearch; // for 'all'
  });

  const displayedEvents = isFullPage ? filteredEvents : filteredEvents.slice(0, 6);

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <p className="text-4xl md:text-6xl font-bold text-golden py-6">
          Recent and Upcoming Events
        </p>

        {/* Search and Filters only on /events */}
        {isFullPage && (
          <>
            <input
              type="text"
              placeholder="Search by event name..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <div className="mt-6 flex justify-center flex-wrap gap-4">
              {["all", "upcoming", "past"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-5 py-2 rounded-full border text-sm font-medium transition ${
                    filterType === type
                      ? "bg-blue-600 text-white shadow"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayedEvents.map((event) => (
          <EVECA key={event.id} event={event} now={now} />
        ))}
      </div>

      {/* See More Button only on non-/events pages */}
      {!isFullPage && filteredEvents.length > 6 && (
        <div className="flex justify-center mt-10">
          <Link to="/events">
            <button className="px-6 py-2 font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              See More
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AllEvent;
