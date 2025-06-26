import { useEffect, useState } from "react";
import Particles from "../Shares/Particles";

const Banner = () => {
  const images = [
    "/src/Images/s3.jpg",
    "/src/Images/s1.jpg",
    "/src/Images/s4.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes fadeInLeft {
        0% {
          opacity: 0;
          transform: translateX(-30px);
        }
        100% {
          opacity: 1;
          transform: translateX(0);
        }
      }
    `;
    document.head.appendChild(style);

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Particle background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Background image */}
      <div
        className="relative w-full h-full bg-cover bg-center z-10 transition-all duration-1000"
        style={{
          backgroundImage: `url('${images[currentImageIndex]}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-20"></div>

        {/* Content */}
        <div
          className="relative z-30 max-w-7xl h-full mx-auto px-6 flex flex-col justify-center text-white"
          style={{ animation: "fadeInLeft 1.5s ease-out forwards" }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            IEEE Student Branch GUB
          </h1>
          <p className="text-lg md:text-xl font-medium drop-shadow-md">
            Empowering students to excel in the world of technology
          </p>
        </div>

        {/* Dot Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentImageIndex === index ? "bg-white" : "bg-gray-400"
              } transition-all duration-300`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
