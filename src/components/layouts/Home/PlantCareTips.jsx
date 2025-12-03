import {
  FaLeaf,
  FaRecycle,
  FaSeedling,
  FaSun,
  FaTemperatureHigh,
  FaTint,
} from "react-icons/fa";

const PlantCareTips = () => {
  const tips = [
    {
      id: 1,
      icon: <FaTint className="text-green-600 text-3xl mb-3" />,
      title: "Watering Tips",
      description:
        "Water your indoor plants when the top inch of soil feels dry. Avoid over watering to prevent root rot.",
    },
    {
      id: 2,
      icon: <FaSun className="text-yellow-500 text-3xl mb-3" />,
      title: "Sunlight Guide",
      description:
        "Most indoor plants prefer bright, indirect sunlight. Avoid harsh direct rays to keep leaves healthy.",
    },
    {
      id: 3,
      icon: <FaLeaf className="text-green-500 text-3xl mb-3" />,
      title: "Fertilizing Routine",
      description:
        "Feed your plants once a month during spring and summer with a balanced liquid fertilizer.",
    },
    {
      id: 4,
      icon: <FaTemperatureHigh className="text-orange-400 text-3xl mb-3" />,
      title: "Temperature & Humidity",
      description:
        "Keep plants in a room between 18-26°C with moderate humidity. Avoid placing them near AC or heaters.",
    },
    {
      id: 5,
      icon: <FaSeedling className="text-green-700 text-3xl mb-3" />,
      title: "Re-potting Advice",
      description:
        "Re-pot your plants every 1-2 years to refresh soil and allow root growth. Use fresh, well-draining mix.",
    },
    {
      id: 6,
      icon: <FaRecycle className="text-lime-600 text-3xl mb-3" />,
      title: "Pruning & Cleaning",
      description:
        "Regularly trim dead leaves and wipe dust off to help plants breathe and photosynthesize efficiently.",
    },
  ];

  return (
    <section className="bg-green-50 py-14 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="sm:text-3xl text-2xl font-bold text-green-700 mb-3">
          Plant Care Tips
        </h2>
        <p className="text-gray-500 mb-10 max-w-2xl mx-auto">
          Keep your plants healthy and thriving with these simple indoor plant
          care tips — from watering to pruning.
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {tip.icon}
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-600 text-sm">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantCareTips;
