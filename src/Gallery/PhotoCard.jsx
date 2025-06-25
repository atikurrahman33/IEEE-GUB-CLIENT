import { useState } from "react";

const PhotoCard = ({ photo }) => {
  const { image, name } = photo;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="relative w-72 h-56 cursor-pointer group"
        onClick={() => setShowModal(true)}
      >
        {/* Animated Gradient Border */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-700 via-pink-700 to-purple-700 
          bg-[length:200%_200%] animate-[gradientMove_3s_linear_infinite] p-[2px] group-hover:opacity-100 opacity-0 transition-opacity duration-500">
          <div className="w-full h-full rounded-xl bg-white overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Non-animated fallback for when not hovered */}
        <div className="w-full h-full rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition duration-300">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Modal for enlarged image */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative p-4">
            <button
              className="absolute top-2 right-2 text-white text-xl font-bold"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            <img
              src={image}
              alt={name}
              className="max-w-[90vw] max-h-[90vh] rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoCard;
