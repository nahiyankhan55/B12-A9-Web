import { toast } from "react-toastify";
import usePlantsFetch from "../../../hooks/usePlantsFetch";
import { useState } from "react";
import { useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import { Button, TextField } from "@mui/material";

const PlantDetailsPage = () => {
  const { id } = useParams();
  const { dataLoader, data, errorMessage } = usePlantsFetch();
  const [formData, setFormData] = useState({ name: "", email: "" });

  // Find specific plant by ID
  const plant = data.find((p) => p.plantId == id);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Consultation booked successfully!");
    setFormData({ name: "", email: "" });
  };

  if (dataLoader) {
    return (
      <div className="text-center py-10 text-green-600 font-semibold">
        <div className="w-10 h-10 rounded-full border-2 animate-spin border-green-500 border-b-transparent mx-auto"></div>
        <p className="mt-3">Loading plant details...</p>
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

  if (!plant) {
    return (
      <div className="text-center text-gray-500 py-10">Plant not found.</div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 md:py-16 py-10">
      {/* Plant Details */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src={plant.image}
          alt={plant.plantName}
          className="w-full sm:h-96 h-60 object-cover rounded-2xl shadow-md"
        />

        <div>
          <h2 className="text-3xl font-bold text-green-700 mb-3">
            {plant.plantName}
          </h2>
          <p className="text-gray-700 mb-4">{plant.description}</p>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl font-semibold text-green-700">
              ${plant.price}
            </span>
            <span className="flex items-center gap-1 text-yellow-500 font-medium">
              <FaStar /> {plant.rating}
            </span>
          </div>

          <p className="text-gray-600 mb-1">
            <strong>Category:</strong> {plant.category}
          </p>
          <p className="text-gray-600 mb-1">
            <strong>Care Level:</strong> {plant.careLevel}
          </p>
          <p className="text-gray-600 mb-1">
            <strong>Available Stock:</strong> {plant.availableStock}
          </p>
          <p className="text-gray-600 mb-1">
            <strong>Provider:</strong> {plant.providerName}
          </p>
        </div>
      </div>

      {/* Booking Form */}
      <div className="mt-12 bg-green-50 p-8 rounded-2xl shadow-md flex flex-col items-center">
        <h3 className="md:text-2xl text-xl font-semibold text-green-700 mb-4">
          🌱 Book a Consultation
        </h3>
        <form
          onSubmit={handleSubmit}
          className="grid sm:grid-cols-2 gap-4 max-w-xl"
        >
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div className="sm:col-span-2 mt-2">
            <Button
              type="submit"
              variant="contained"
              color="success"
              fullWidth
              sx={{ py: 1.2, borderRadius: 2, fontWeight: 700 }}
            >
              Book Now
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlantDetailsPage;
