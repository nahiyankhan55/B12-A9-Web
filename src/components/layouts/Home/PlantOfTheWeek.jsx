import { FaStar } from "react-icons/fa";
import usePlantsFetch from "../../../hooks/usePlantsFetch";
import { Link, useNavigate } from "react-router";

const PlantOfTheWeek = () => {
  const { dataLoader, data, errorMessage } = usePlantsFetch();
  const navigate = useNavigate();

  // Pick a random plant for creative value
  const plant =
    data.length > 0 ? data[Math.floor(Math.random() * data.length)] : null;

  if (dataLoader) {
    return (
      <div className="text-center py-10 text-green-600 font-semibold">
        <div className="w-10 h-10 rounded-full border-2 animate-spin border-green-500 border-b-transparent mx-auto"></div>
        <p className="mt-3">Loading Plant of the Week...</p>
      </div>
    );
  }

  if (errorMessage || !plant) {
    return (
      <div className="text-center text-red-500 py-10">
        {errorMessage
          ? `Error: ${errorMessage}`
          : "No plant available for this week."}
      </div>
    );
  }

  return (
    <section className="bg-green-50 py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src={plant.image}
          alt={plant.plantName}
          className="w-full h-96 object-cover rounded-2xl shadow-md"
        />
        <div>
          <h2 className="text-3xl font-bold text-green-700 mb-3">
            🌟 Plant of the Week
          </h2>
          <h3 className="text-2xl font-semibold text-green-800 mb-2">
            {plant.plantName}
          </h3>
          <p className="text-gray-600 mb-4">
            This week, we celebrate {plant.plantName}!{" "}
            {plant.description.slice(0, 70)}...
          </p>
          <p className="text-sm text-green-600 mb-4">
            Quick Care Tip: {plant.careLevel} level plant — perfect for your
            home!
          </p>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl font-semibold text-green-700">
              ${plant.price}
            </span>
            <span className="flex items-center gap-1 text-yellow-500 font-medium">
              <FaStar></FaStar> {plant.rating}
            </span>
          </div>
          <div className="flex gap-4">
            <Link to={`/plant/${plant.plantId}`}>
              <p className="bg-green-600 text-white py-2 px-6 rounded-md font-medium hover:bg-green-700 transition w-fit">
                View Details
              </p>
            </Link>
            <button
              onClick={() => navigate(`/plant/${plant.plantId}`)}
              className="bg-yellow-500 text-white py-2 px-6 rounded-md font-medium hover:bg-yellow-600 transition"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantOfTheWeek;
