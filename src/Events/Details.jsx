import { IoMdTimer } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";
import { Calendar, MapPin, Users, User, Share2 } from "lucide-react";

const Details = () => {
  const event = useLoaderData();
  const {
    image,
    eventName,
    description,
    date,
    guest,
    time,
    organizer,
    participant,
    eventType,
    eventArea,
    guestBio,
  } = event;

  return (
    <div className="max-w-9xl mx-auto p-4 md:p-6 space-y-6">
      {/* Back Link */}
      <Link to="/events" className="inline-block">
        <p className="text-sm text-green-600 hover:underline flex items-center gap-1 transition-colors duration-200 pl-6 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to events
        </p>
      </Link>

      <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-10">
          {/* Right Image */}
          <div className="md:w-1/2 order-first md:order-last md:mt-0 mb-20">
            <img
              src={image}
              alt="Event"
              className="rounded-xl shadow-lg w-full"
            />
          </div>

          {/* Left Content */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">{eventName}</h1>

            <p>
              <span className="font-semibold text-teal-600 text-xl pb-2">
                Description:
              </span>{" "}
              {description}
            </p>

            <div>
              <h2 className="font-semibold text-teal-600 mb-4 text-xl pb-2">
                Event Information:
              </h2>

              <div className="flex flex-wrap gap-6">
                {/* Date & Time */}
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-900 font-medium">Date & Time</p>
                    <p className="text-sm text-gray-600">
                      {date}, {time}
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-900 font-medium">Location</p>
                    <p className="text-sm text-gray-600">{eventArea}</p>
                  </div>
                </div>

                {/* Participants */}
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-900 font-medium">Participants</p>
                    <p className="text-sm text-gray-600">{participant} attendees</p>
                  </div>
                </div>

                {/* Organizer */}
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-900 font-medium">Organizer</p>
                    <p className="text-sm text-gray-600">{organizer}</p>
                  </div>
                </div>

                {/* Event Type */}
                {eventType && (
                  <div className="flex items-center gap-2">
                    <IoMdTimer className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-900 font-medium">Event Type</p>
                      <p className="text-sm text-gray-600">{eventType}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Featured Speakers */}
            <div>
              <h2 className="font-semibold text-teal-600 text-xl pb-2">
                Featured Speakers:
              </h2>
              <div className="flex flex-col sm:flex-row items-start gap-5 border-b pb-6 mb-6">
                {/* Speaker Image */}
                <img
                  src={image}
                  alt={guest}
                  className="w-20 h-20 rounded-full border-2 border-green-500 object-cover"
                />

                {/* Speaker Info */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{guest}</h2>
                  <p className="text-green-600 font-medium">Main Speaker</p>
                  <p className="text-gray-700 mt-2">{guestBio}</p>

                  {/* Read More Button (disabled) */}
                  <button
                    className="mt-3 inline-flex items-center text-green-600 bg-green-100 hover:bg-green-200 px-3 py-1.5 rounded-md transition-all"
                    disabled
                  >
                    ↓ Read More
                  </button>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start gap-5 border-b pb-6 mb-6">
                {/* Speaker Image */}
                <img
                  src={image}
                  alt={guest}
                  className="w-20 h-20 rounded-full border-2 border-green-500 object-cover"
                />

                {/* Speaker Info */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{guest}</h2>
                  <p className="text-green-600 font-medium">Main Speaker</p>
                  <p className="text-gray-700 mt-2">{guestBio}</p>

                  {/* Read More Button (disabled) */}
                  <button
                    className="mt-3 inline-flex items-center text-green-600 bg-green-100 hover:bg-green-200 px-3 py-1.5 rounded-md transition-all"
                    disabled
                  >
                    ↓ Read More
                  </button>
                </div>
              </div>
            </div>

            {/* Event Highlights */}
            <div>
              <h2 className="font-semibold text-teal-600 text-xl pb-2 ">
                Event Highlights:
              </h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "Expert Speaker",
                  "Q&A Session",
                  "Networking",
                  "Interactive Content",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-green-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share Button */}
            <button className="flex items-center gap-2 text-sm text-green-600 hover:underline mt-4">
              <Share2 className="w-4 h-4" /> Share Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
