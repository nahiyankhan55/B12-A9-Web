const AboutUs = () => {
  return (
    <div className="px-5 py-10">
      <div className="max-w-6xl mx-auto space-y-5">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
          About GreenNest
        </h1>

        <p className="text-lg leading-relaxed">
          GreenNest is a calm, nature-inspired single-page web application
          designed for indoor plant lovers. The platform helps users explore
          plant care guides, purchase indoor plants, and book expert
          consultations — all in one clean and user-friendly environment.
        </p>

        <h2 className="text-2xl font-semibold">🌱 What GreenNest Offers</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>A curated selection of indoor plants with full care details</li>
          <li>Secure Firebase Authentication with Email & Google login</li>
          <li>Protected routes for plant details and user profiles</li>
          <li>Multiple interactive home sections for better user engagement</li>
          <li>Simple and peaceful UI/UX inspired by nature</li>
        </ul>

        <h2 className="text-2xl font-semibold">📌 Home Page Sections</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>Hero Slider with smooth nature-inspired transitions</li>
          <li>Top Rated Plants with images, price, rating, and details</li>
          <li>
            Plant Care Tips featuring watering, sunlight, pruning, and more
          </li>
          <li>Green Experts introducing three specialist plant advisors</li>
          <li>Eco Decor Ideas in accordion format to inspire users</li>
          <li>Plant of the Week with compelling visuals and CTA buttons</li>
        </ul>

        <h2 className="text-2xl font-semibold">
          🔒 Protected Plant Details Page
        </h2>
        <p className="text-lg leading-relaxed">
          The plant details page is only accessible for logged-in users. Users
          can view complete plant information and submit a “Book Consultation”
          form that shows a success toast on submission.
        </p>

        <h2 className="text-2xl font-semibold">👤 Profile Management</h2>
        <p className="text-lg leading-relaxed">
          Users can update their display name and profile picture in real time.
          All profile updates reflect instantly, ensuring a smooth and modern
          user experience.
        </p>

        <h2 className="text-2xl font-semibold">🛠 Tech Stack</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>React.js, Tailwind CSS, DaisyUI, React Router</li>
          <li>Animations with AOS</li>
          <li>Firebase Authentication (Email + Google)</li>
          <li>Static JSON data for plant lists</li>
          <li>React Icons for UI elements</li>
          <li>Toast notifications using react-toastify</li>
        </ul>

        <h2 className="text-2xl font-semibold">🔗 Useful Links</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>
            <a
              href="https://greennest-a9b12-nahiyan.netlify.app/"
              className="text-green-600 underline"
            >
              Live Website
            </a>
          </li>
          <li>
            <a
              href="https://github.com/nahiyankhan55/B12-A9-Web"
              className="text-green-600 underline"
            >
              GitHub Repository
            </a>
          </li>
        </ul>

        <p className="text-center text-lg mt-10 font-medium">
          GreenNest — Bringing nature closer to your home 🌿✨
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
