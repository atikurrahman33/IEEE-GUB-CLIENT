import React, { useState } from "react";


// Fake executive data
const executiveData = {
  2025: {
    faculty: [
      { name: "Dr.Aminur Rahman ", role: "BRANCH COUNSRLOR", img: "../../src/Images/AMN.jpg" },
      { name: "Dr.Ahmed Al Mansur", role: "MENTOR", img: "../../src/Images/AHMED.jpg" },
      { name: "MD.Rajibul Palas", role: "MENTOR", img: "../../src/Images/RJBUL.jpg" },
    ],
    students : [
  { name: "Faysal Hossain Tomal", role: "Chair", img: "../../src/Images/Faysal Hossain Tomal No BG.png" },
  { name: "S. M Shakib Mahmud Shefat", role: "Vice-chair (Activity)", img: "../../src/Images/Sakib Mahmud.jpeg" },
  { name: "Fahim Mahmud", role: "Vice-chair (Technical)", img: "../../src/Images/Fahim Mahmud.jpg" },
  { name: "Shahadat Hosen Nishan", role: "General Secretary", img: "../../src/Images/Shahadat Hosen Nishan.jpg" },
  { name: "Esrat Ahmed Eva", role: "Joint Secretary", img: "../../src/Images/Eva.JPG" },
  { name: "Md. Abu Rayhan Imran", role: "Treasurer", img: "../../src/Images/Md. Abu Rayhan Imran No BG.png" },
  { name: "Pritam Saha Turja", role: "Organizing Secretary", img: "../../src/Images/Pritam Saha Turja.jpg" },
  { name: "Antu Marma", role: "Joint Organizing Secretary", img: "../../src/Images/antumarma.jpg" },
  { name: "Nasibul Hasan Naem", role: "Publication Secretary", img: "../../src/Images/Nasibul Hasan Naem.jpeg" },
  { name: "Dip Barman", role: "Programme Co-Ordinator", img: "../../src/Images/Dip Barman.png" },
  { name: "Md. Rifat Bin Hasan", role: "Programme Co-Ordinator", img: "../../src/Images/Screenshot 2025-06-22 235847.png" },
  { name: "Promod Chandra Das", role: "Membership Development Co-Ordinator", img: "../../src/Images/Promod Chandra Das .jpg" },
  { name: "Afsa Akter Shawla", role: "Student Activity Co-Ordinator", img: "../../src/Images/Afsa Akter Shawla.jpeg" },
  { name: "Md.Mainul Islam Nerob", role: "Publicity Co-Ordinator", img: "../../src/Images/Md.Mainul Islam Nerob.jpg" },
  { name: "Atikur Rahman", role: "Information Secretary", img: "../../src/Images/Atikur_Rahman (1).jpg" },
  { name: "S M Naymuzzaman Nahid", role: "Graphics Designer", img: "../../src/Images/S M Naymuzzaman Nahid .jpg" },
  { name: "Md Miadul Islam Nizzan", role: "Asst Graphics Designer", img: "../../src/Images/Miadul Islam Nizzan.jpg" },
  { name: "Maheer Jabin Priya", role: "Web master & Newsletter editor", img: "../../src/Images/Maheer Jabin Priya.jpg" },
  { name: "Tonmoy Kanti Das", role: "Executive Member", img: "../../src/Images/Tonmoy Das.jpeg" },
  { name: "Shakib Hasan", role: "Executive Member", img: "../../src/Images/IMG_20250519_223416.jpg" },
],

  },
  2024: {
    faculty: [
      { name: "Dr. Rifat Jahan", role: "Moderator", img: "https://i.imgur.com/Wm4FSlO.png" },
    ],
    students: [
      { name: "Zahid Khan", role: "President", img: "https://i.imgur.com/qCN5WwL.png" },
      { name: "Fatema Ruma", role: "General Secretary", img: "https://i.imgur.com/2GwCzFy.png" },
    ],
  },


  2023: {
    faculty: [
      { name: "DR.MUHAMMAD AMINUR RAHMAN", role: "BRANCH COUNSRLOR", img: "../../src/Images/Dr_Aminur_Sir.png" },
      { name: "DR.AHMED AL MANSUR", role: "MENTOR", img: "../../src/Images/Ahmed-al-mosur.jpg" },
      { name: "MD.RAJIBUL PALAS", role: "MENTOR", img: "../../src/Images/Razibul.png" },
    ],
    students : [
  { name: "Faysal Hossain Tomal", role: "Chair", img: "../../src/Images/Tomal.jpg" },
  { name: "S. M Shakib Mahmud Shefat", role: "Vice-chair (Activity)", img: "https://i.pravatar.cc/150?img=2" },
  { name: "Fahim Mahmud", role: "Vice-chair (Technical)", img: "../../src/Images/Fahim.jpg" },
  { name: "Shahadat Hosen Nishan", role: "General Secretary", img: "../../src/Images/Nisan.jpg" },
  { name: "Esrat Ahmed Eva", role: "Joint Secretary", img: "../../src/Images/Eva.jpg" },
  { name: "Md. Abu Rayhan Imran", role: "Treasurer", img: "https://i.pravatar.cc/150?img=6" },
  { name: "Pritam Saha Turja", role: "Organizing Secretary", img: "../../src/Images/Pritam.jpg" },
  { name: "Antu Marma", role: "Joint Organizing Secretary", img: "../../src/Images/Antu.jpg" },
  { name: "Nasibul Hasan Naem", role: "Publication Secretary", img: "../../src/Images/Nasibul.jpg" },
  { name: "Dip Barman", role: "Programme Co-Ordinator", img: "https://i.pravatar.cc/150?img=10" },
  { name: "Md. Rifat Bin Hasan", role: "Programme Co-Ordinator", img: "https://i.pravatar.cc/150?img=11" },
  { name: "Promod Chandra Das", role: "Membership Development Co-Ordinator", img: "https://i.pravatar.cc/150?img=12" },
  { name: "Afsa Akter Shawla", role: "Student Activity Co-Ordinator", img: "https://i.pravatar.cc/150?img=13" },
  { name: "Md.Mainul Islam Nerob", role: "Publicity Co-Ordinator", img: "../../src/Images/Nerob.jpg" },
  { name: "Atikur Rahman", role: "Information Secretary", img: "../../src/Images/Atikur_Rahman.jpg" },
  { name: "S M Naymuzzaman Nahid", role: "Graphics Designer", img: "https://i.pravatar.cc/150?img=16" },
  { name: "Md Miadul Islam Nizzan", role: "Asst Graphics Designer", img: "https://i.pravatar.cc/150?img=17" },
  { name: "Maheer Jabin Priya", role: "Web master & Newsletter editor", img: "https://i.pravatar.cc/150?img=18" },
  { name: "Tonmoy Kanti Das", role: "Executive Member", img: "https://i.pravatar.cc/150?img=19" },
  { name: "Shakib Hasan", role: "Executive Member", img: "../../src/Images/sakib Hasan.jpg" },
],

  },
  2022: {
    faculty: [
      { name: "DR.MUHAMMAD AMINUR RAHMAN", role: "BRANCH COUNSRLOR", img: "../../src/Images/Dr_Aminur_Sir.png" },
      
      { name: "MD.RAJIBUL PALAS", role: "MENTOR", img: "../../src/Images/Razibul.png" },
    ],
    students : [
  { name: "Faysal Hossain Tomal", role: "Chair", img: "../../src/Images/Tomal.jpg" },
  { name: "S. M Shakib Mahmud Shefat", role: "Vice-chair (Activity)", img: "https://i.pravatar.cc/150?img=2" },
  { name: "Fahim Mahmud", role: "Vice-chair (Technical)", img: "../../src/Images/Fahim.jpg" },
  { name: "Shahadat Hosen Nishan", role: "General Secretary", img: "../../src/Images/Nisan.jpg" },
  { name: "Esrat Ahmed Eva", role: "Joint Secretary", img: "../../src/Images/Eva.jpg" },
  { name: "Md. Abu Rayhan Imran", role: "Treasurer", img: "https://i.pravatar.cc/150?img=6" },
  { name: "Pritam Saha Turja", role: "Organizing Secretary", img: "../../src/Images/Pritam.jpg" },
  { name: "Antu Marma", role: "Joint Organizing Secretary", img: "../../src/Images/Antu.jpg" },
  
  { name: "Atikur Rahman", role: "Information Secretary", img: "../../src/Images/Atikur_Rahman.jpg" },
  { name: "S M Naymuzzaman Nahid", role: "Graphics Designer", img: "https://i.pravatar.cc/150?img=16" },
  { name: "Md Miadul Islam Nizzan", role: "Asst Graphics Designer", img: "https://i.pravatar.cc/150?img=17" },
  { name: "Maheer Jabin Priya", role: "Web master & Newsletter editor", img: "https://i.pravatar.cc/150?img=18" },
  { name: "Tonmoy Kanti Das", role: "Executive Member", img: "https://i.pravatar.cc/150?img=19" },
  { name: "Shakib Hasan", role: "Executive Member", img: "../../src/Images/sakib Hasan.jpg" },
],

  },
};

const ExecutiveList = () => {
  const [selectedYear, setSelectedYear] = useState("2025");
  const years = ["2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2016"];
  const data = executiveData[selectedYear] || { faculty: [], students: [] };

  

   return (
    <div className="px-4 md:px-10 py-10 min-h-screen">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-gray-600">IEEE Executives</h1>
        <p className="text-gray-600">
          Meet the dedicated executives who have led the IEEE STUDENT BRANCH GUB
        </p>
      </div>

      {/* Year Selector */}
      <div className="flex flex-wrap gap-2 mb-10">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
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

      {/* Faculty Advisors */}
<div className="mb-8">
  <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
    <span>🎓</span> Faculty Advisors
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {data.faculty.map((member, i) => (
      <div
        key={i}
        className="bg-white rounded-2xl shadow-lg p-6 text-center transition hover:shadow-xl"
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

{/* Student Executives */}
<div>
  <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
    <span>🧑‍💻</span> Student Executives
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {data.students.map((member, i) => (
      <div
        key={i}
        className="bg-white rounded-2xl shadow-lg p-6 text-center transition hover:shadow-xl"
      >
        <img
          src={member.img}
          alt={member.name}
          className="mx-auto h-20 w-20 object-cover rounded-full ring-4 ring-blue-100 mb-3"
        />
        <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
        <p className="text-sm text-gray-500">{member.role}</p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default ExecutiveList;
