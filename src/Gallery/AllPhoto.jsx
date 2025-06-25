import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PhotoCard from "./PhotoCard"; // import the photo card component


const AllPhoto = () => {
  const [photos, setPhotos] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch('../../src/Gallery/photos.json')
      .then(response => response.json())
      .then(data => {
        const sorted = data.sort((a, b) => new Date(a.id) - new Date(b.id));
        setPhotos(sorted);
      });
  }, []);

  const previewPhotos = showAll ? photos : photos.slice(0, 8);

  return (
    <div className="relative py-8">
     
  {/* Button positioned top right */}
  {!showAll && (
    <div className="absolute top-0 right-0 pt-14 ">
      <Link to="/gal">
        <button
          className="px-6 py-2 font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          onClick={() => setShowAll(true)}
        >
          Explore More
        </button>
      </Link>
    </div>
  )}

  <p className="text-4xl font-bold text-golden my-6 pb-6">Gallery</p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
    {previewPhotos.map(photo => (
      <PhotoCard key={photo.id} photo={photo} />
    ))}
  </div>
</div>

  
);
}

export default AllPhoto;
