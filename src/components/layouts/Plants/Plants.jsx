import { FaStar } from "react-icons/fa";
import usePlantsFetch from "../../../hooks/usePlantsFetch";
import { Link } from "react-router";

const Plants = () => {
  const { dataLoader, data, errorMessage } = usePlantsFetch();

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
      <div className="text-center text-red-500 py-10">
        Error: {errorMessage}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:py-14 py-10">
      <h2 className="text-3xl font-bold text-center text-green-700">
        Our Indoor Plants
      </h2>
      <p className="text-gray-500 text-center mt-2 max-w-2xl mx-auto">
        Explore our vibrant selection of indoor plants, carefully chosen to
        enhance your living space with freshness, beauty, and easy maintenance
        for every plant lover.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {data.map((plant) => (
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
            <p className="text-gray-500 mb-2 font-medium">{plant.category}</p>
            <p className="text-gray-700 mt-1 text-sm line-clamp-2">
              {plant.description}
            </p>
            {/* <div className="flex justify-between items-center text-sm mb-3 mt-3">
              <span className="font-medium text-green-700">${plant.price}</span>
              <span className="text-yellow-500 flex items-center gap-1">
                <FaStar className="text-lg"></FaStar> {plant.rating}
              </span>
            </div> */}
            <div className="mt-3">
              <Link to={`/plant/${plant.plantId}`}>
                <p className="w-full bg-green-600 text-white py-2 rounded-md font-medium hover:bg-green-700 transition text-center">
                  View Details
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plants;
