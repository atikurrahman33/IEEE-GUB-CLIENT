import React from "react";

const Design = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">Hospital Management Dashboard Home</h1>
          
          <p>
            <span className="font-semibold text-teal-600">Description:</span> This is a hospital management dashboard. In this project just implement the frontend using ReactJs.
          </p>

          <div>
            <h2 className="font-semibold text-teal-600">Technologies Used:</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {["ReactJs", "TailwindCss", "DaisyUI", "html"].map((tech) => (
                <span
                  key={tech}
                  className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-teal-600">Links:</h2>
            <p className="mt-2">
              Client <a href="#" className="text-blue-600 underline">GitHub</a> &nbsp;|&nbsp;
              Live <a href="#" className="text-blue-600 underline">Preview</a>
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-teal-600">Tags:</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {["#html", "#css", "#reactjs", "#javascript", "#medical"].map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src="/345a2745-ddcc-44d8-a76d-d229d02d82a4.png"
            alt="Hospital Dashboard"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Design;
