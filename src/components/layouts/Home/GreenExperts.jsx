import { FaLeaf, FaTree, FaWater } from "react-icons/fa";

const GreenExperts = () => {
  const experts = [
    {
      id: 1,
      name: "Lena Summers",
      role: "Indoor Plant Specialist",
      image: "https://i.ibb.co.com/ZzhQGWWN/e1.jpg",
      description:
        "Lena brings over 8 years of experience helping people create lush, low-maintenance indoor gardens.",
      icon: <FaLeaf className="text-green-600 text-2xl" />,
    },
    {
      id: 2,
      name: "Daniel Rivera",
      role: "Botanical Care Consultant",
      image: "https://i.ibb.co.com/HDRPsfZF/e2.jpg",
      description:
        "Daniel specializes in diagnosing plant issues and creating personalized care plans for urban homes.",
      icon: <FaWater className="text-blue-500 text-2xl" />,
    },
    {
      id: 3,
      name: "Maya Patel",
      role: "Sustainable Gardening Expert",
      image: "https://i.ibb.co.com/dsWvkxGh/e3.jpg",
      description:
        "Maya focuses on eco-friendly growing techniques, composting, and sustainable garden styling ideas.",
      icon: <FaTree className="text-green-700 text-2xl" />,
    },
  ];

  return (
    <section className="bg-white py-14 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="sm:text-3xl text-2xl font-bold text-green-700 mb-3">
          Meet Our Green Experts
        </h2>
        <p className="text-gray-500 mb-10 max-w-2xl mx-auto">
          Our dedicated plant specialists are here to help you nurture your
          greens with expert advice and care insights.
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {experts.map((expert) => (
            <div
              key={expert.id}
              data-aos="fade-up"
              className="bg-green-50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-green-100"
            >
              <img
                src={expert.image}
                alt={expert.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <div className="flex justify-center mb-3">{expert.icon}</div>
                <h3 className="text-xl font-bold text-green-700 mb-1">
                  {expert.name}
                </h3>
                <p className="text-green-600 font-semibold mb-2">
                  {expert.role}
                </p>
                <p className="text-gray-600 text-sm">{expert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GreenExperts;
