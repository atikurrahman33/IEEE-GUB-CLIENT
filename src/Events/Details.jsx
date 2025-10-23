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

      <section className="relative bg-gradient-to-r from-green-500 to-emerald-600 py-14 md:py-16">
  {/* Back button - top left */}
  <div className="absolute top-6 left-6 z-10">
    <Link 
      to="/events" 
      className="inline-flex items-center gap-2 bg-white/90 hover:bg-white transition-all duration-300 px-4 py-2 rounded-full shadow-md"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-gray-700"
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
      <span className="text-sm font-medium text-gray-700">Back to events</span>
    </Link>
  </div>

  {/* Past Event indicator - top right */}
  <div className="absolute top-6 right-6 z-10">
    <div className="inline-flex items-center gap-2  bg-white/90 hover:bg-white transition-all duration-300 px-4 py-2 rounded-full shadow-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-gray-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span className="text-sm font-medium text-gray-700">Past Event</span>
    </div>
  </div>

  <div className="max-w-7xl mx-auto px-4 text-center relative z-0">
    <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-1 rounded-full mb-6">
      <span className="text-white text-sm font-medium tracking-wider">
        Featured Event
      </span>
    </div>
    
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
      {eventName}
    </h1>
    
    <div className="flex justify-center gap-4">
      <div className="flex items-center gap-2 text-white/90">
        <Calendar className="w-5 h-5" />
        <span className="font-medium">{date}</span>
      </div>
      <div className="flex items-center gap-2 text-white/90">
        <MapPin className="w-5 h-5" />
        <span className="font-medium">{eventArea}</span>
      </div>
    </div>
  </div>

  {/* Decorative elements */}
  <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/10 backdrop-blur-[1px]"></div>
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white/50 rounded-full"></div>
</section>
     

      <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 pb-10">
        <div className="max-w-7xl mx-auto flex flex-col">
          {/* Event Image - Moved to top */}
          <div className="w-full mb-8 md:mb-12 rounded-xl overflow-hidden shadow-lg">
            <img
              src={image}
              alt="Event"
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Main Content */}
            <div className="md:w-2/3 space-y-8">
              <div className="space-y-6">
               

                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-teal-600 text-xl">
                    Description:
                  </span>{" "}
                  {description}
                </p>
              </div>

              {/* Event Information */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="font-semibold text-teal-600 text-xl mb-4">
                  Event Information:
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Date & Time */}
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Calendar className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-900 font-medium">Date & Time</p>
                      <p className="text-gray-600">
                        {date}, {time}
                      </p>
                    </div>
                  </div>

                  

                  {/* Participants */}
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Users className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-900 font-medium">Participants</p>
                      <p className="text-gray-600">{participant} attendees</p>
                    </div>
                  </div>

                  {/* Organizer */}
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <User className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-900 font-medium">Organizer</p>
                      <p className="text-gray-600">{organizer}</p>
                    </div>
                  </div>

                  {/* Event Type */}
                  {eventType && (
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <IoMdTimer className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-900 font-medium">Event Type</p>
                        <p className="text-gray-600">{eventType}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Featured Speakers */}
              <div className="space-y-8">
                <h2 className="font-semibold text-teal-600 text-xl">
                  Featured Speakers:
                </h2>
                
                {/* Speaker 1 - Centered on mobile */}
                <div className="flex flex-col items-center sm:items-start sm:flex-row gap-6 bg-white rounded-xl p-6 shadow-lg">
                  <img
                    src={image}
                    alt={guest}
                    className="w-24 h-24 rounded-full border-4 border-green-100 object-cover"
                  />

                  <div className="text-center sm:text-left">
                    <h2 className="text-xl font-bold text-gray-900">{guest}</h2>
                    <p className="text-green-600 font-medium mt-1">Main Speaker</p>
                    <p className="text-gray-700 mt-3 max-w-2xl">{guestBio}</p>

                    <button
                      className="mt-4 inline-flex items-center text-green-600 bg-green-50 hover:bg-green-100 px-4 py-2 rounded-lg transition-all"
                      disabled
                    >
                      ↓ Read More
                    </button>
                  </div>
                </div>

                {/* Speaker 2 - Centered on mobile */}
                <div className="flex flex-col items-center sm:items-start sm:flex-row gap-6 bg-white rounded-xl p-6 shadow-sm">
                  <img
                    src={image}
                    alt={guest}
                    className="w-24 h-24 rounded-full border-4 border-green-100 object-cover"
                  />

                  <div className="text-center sm:text-left">
                    <h2 className="text-xl font-bold text-gray-900">{guest}</h2>
                    <p className="text-green-600 font-medium mt-1">Main Speaker</p>
                    <p className="text-gray-700 mt-3 max-w-2xl">{guestBio}</p>

                    <button
                      className="mt-4 inline-flex items-center text-green-600 bg-green-50 hover:bg-green-100 px-4 py-2 rounded-lg transition-all"
                      disabled
                    >
                      ↓ Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:w-1/3 space-y-6">
              {/* Event Highlights */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="font-semibold text-teal-600 text-xl mb-4">
                  Event Highlights:
                </h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Expert Speaker",
                    "Q&A Session",
                    "Networking",
                    "Interactive Content",
                    "Free Resources",
                    "Live Demos"
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="bg-green-100 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share Button */}
              <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center">
                <button className="flex items-center justify-center gap-2 w-full max-w-xs text-green-600 hover:text-green-700 bg-green-50 hover:bg-green-100 px-4 py-3 rounded-lg transition-all">
                  <Share2 className="w-5 h-5" /> Share Event
                </button>
              </div>

              {/* Event Gallery */}
<div className="bg-white rounded-xl p-6 shadow-sm">
  <div className="flex justify-between items-center mb-4">
    <h2 className="font-semibold text-teal-600 text-xl">
      Event Gallery
    </h2>
   
  </div>
  
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
    {[1, 2, 3, 4].map((item) => (
      <div 
        key={item} 
        className="relative aspect-square overflow-hidden rounded-lg group"
      >
        <img 
          src="../../src/Images/12.jpg" 
          alt={`Gallery ${item}`} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
      </div>
    ))}
  </div>

   <button className="text-green-600 hover:underline font-medium flex items-center mt-3">
      View in Gallery →
    </button>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;