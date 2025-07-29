import React, { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const Commete = () => {
  const [executiveData, setExecutiveData] = useState({});
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedGroup, setSelectedGroup] = useState("SB");

  // Fetch data from JSON file
  useEffect(() => {
    fetch("../../src/Commete/Member.json") // assuming the JSON is in the public folder
      .then((response) => response.json())
      .then((data) => setExecutiveData(data));
  }, []);

  const data = executiveData[selectedYear]?.[selectedGroup] || { faculty: [], students: [] };
  const years = Object.keys(executiveData).sort((a, b) => b - a); // Sort descending

  return (
    <div className="px-4 max-w-7xl mx-auto py-10 min-h-screen">
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-gray-600">IEEE Executives</h1>
        <p className="text-gray-600">
          Meet the dedicated executives who have led the IEEE STUDENT BRANCH GUB
        </p>
      </div>

      {/* Year Buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => {
              setSelectedYear(year);
              setSelectedGroup("SB"); // reset to SB on year change
            }}
            className={`px-4 py-1 rounded border ${
              selectedYear === year
                ? "bg-blue-600 text-white font-semibold"
                : "bg-white text-gray-700 hover:bg-gray-100"
            } transition`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Group Buttons */}
      <div className="flex gap-3 mb-10">
        {["SB", "CS", "MAIN"].map((group) => (
          <button
            key={group}
            onClick={() => setSelectedGroup(group)}
            className={`px-4 py-1 rounded border ${
              selectedGroup === group
                ? "bg-green-600 text-white font-semibold"
                : "bg-white text-gray-700 hover:bg-gray-100"
            } transition`}
          >
            {group}
          </button>
        ))}
      </div>

      {/* Faculty Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">🎓 Faculty Advisors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.faculty.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="mx-auto h-24 w-24 object-cover rounded-full ring-4 ring-blue-100 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-blue-600 font-medium mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Student Section */}
      <div>
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">🧑‍💻 Student Executives</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.students.map((member, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 text-center border border-gray-100"
            >
              {/* Profile Image */}
              <div className="relative w-24 h-24 mx-auto mb-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full shadow-md border-4 border-blue-200"
                />
              </div>

              {/* Name & Role */}
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>

              {/* Social Icons in Bottom-Right */}
              <div className="absolute bottom-4 right-4 flex gap-3 text-blue-600 text-lg">
                {member.facebook && (
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-800"
                  >
                    <FaFacebookF />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-800"
                  >
                    <FaLinkedinIn />
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="hover:text-blue-800"
                  >
                    <IoMailOutline />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Commete;
