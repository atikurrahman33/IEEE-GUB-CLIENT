import { IoMdTimer } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import {  useLoaderData } from "react-router-dom";


const Details = () => {
        
    const event = useLoaderData();
    const { image, eventName, date, guest ,time, organizer, participant, eventType,eventArea,specialGuest } = event;
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      {/* Back Link */}
      <Link to="/events">
      <p className="text-sm text-blue-600 hover:underline">&larr; Back to event page</p>
      </Link>

      {/* Event Header */}
      <div className="space-y-2">
        <span className="badge badge-primary text-white">{eventType}</span>

        <h1 className="text-3xl font-bold">{eventName}</h1>
        <p className="text-gray-500 text-sm">🏛️ {organizer}</p>
      </div>

      {/* Banner Image */}
      <img
        src={image}
        alt={eventName}
        className="rounded-xl w-full h-auto object-cover"
      />

      {/* Grid Content */}
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {/* Left Column */}
        <div className="md:col-span-2 space-y-4">
          <div className="bg-base-100 shadow-md rounded-xl p-4">
            <h2 className="text-xl font-semibold mb-3">About the Event</h2>

            {guest && (

            <div className="space-y-4">
              <div>
                <p className="font-semibold text-blue-600">👤 Chief Guest</p>
                <p className="bg-gray-100 p-3 rounded-lg dark:bg-base-200">
                  {guest}
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-700 dark:text-gray-300">Other Guests</p>
                <p className="bg-gray-100 p-3 rounded-lg dark:bg-base-200">
                  <span className="font-medium">Special Guest:</span> {specialGuest} <br />
                  
                </p>
              </div>
            </div>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div className="bg-base-100 shadow-md rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-2">
              <CiCalendar className="text-lg" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <IoMdTimer className="text-lg" />
              <span>{time}</span>
            </div>
            <div className="flex items-center gap-2">
              <IoLocationOutline className="text-lg" />
              <span>{eventArea}</span>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-600">Participants</p>
              <progress className="progress progress-success w-full" value="80" max="130"></progress>
              <p className="text-xs text-right text-gray-500">{participant} / 130</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
