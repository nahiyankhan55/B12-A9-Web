import { FaStar } from "react-icons/fa";
import usePlantsFetch from "../../../hooks/usePlantsFetch";
import { Link } from "react-router";

const TopPlants = () => {
  const { dataLoader, data, errorMessage } = usePlantsFetch();

  // Show only top 6 rated plants (sorted by rating)
  const topPlants = data.sort((a, b) => b.rating - a.rating).slice(0, 6);

  if (dataLoader) {
    return (
      <div className="text-center py-10 text-green-600 font-semibold">
        <div className="w-10 h-10 rounded-full border-2 animate-spin border-green-500 border-b-transparent mx-auto"></div>
        <p className="mt-3">Loading plants...</p>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="text-center text-red-500">Error: {errorMessage}</div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:py-14 py-10 w-full">
      <h2 className="sm:text-3xl text-2xl font-bold text-center text-green-700">
        Top Rated Indoor Plants
      </h2>
      <p className="text-gray-500 text-center mt-2 max-w-2xl mx-auto">
        Discover our handpicked collection of top-rated indoor plants that bring
        fresh air, natural beauty, and calm vibes to your home.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8 w-full">
        {topPlants.map((plant) => (
          <div
            key={plant.plantId}
            data-aos="zoom-in"
            className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition-all duration-300 border border-green-100"
          >
            <img
              src={plant.image}
              alt={plant.plantName}
              className="w-full h-52 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-green-800">
              {plant.plantName}
            </h3>
            <p className="text-gray-500 mb-2">{plant.category}</p>
            <div className="flex justify-between items-center text-sm mb-3">
              <span className="font-medium text-green-700">${plant.price}</span>
              <span className="text-yellow-500 flex items-center gap-1">
                <FaStar className="text-lg"></FaStar> {plant.rating}
              </span>
            </div>
            <div>
              <Link to={`/plant/${plant.plantId}`}>
                <p className="w-full bg-green-600 text-white py-2 rounded-md font-medium hover:bg-green-700 transition text-center">
                  View Details
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link to={`/plants`}>
        <p className="bg-green-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700 transition text-center w-fit mt-5 mx-auto">
          View All Plants
        </p>
      </Link>
    </div>
  );
};

export default TopPlants;
