import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { toast } from "react-toastify";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Message Sent!");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="px-4">
      <div className="max-w-xl mx-auto mt-10 mb-20 p-6 rounded-lg shadow-lg bg-white">
        <h1 className="sm:text-3xl text-2xl font-bold mb-6 text-center text-green-700">
          Contact GreenNest
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <TextField
            label="Your Name"
            name="name"
            fullWidth
            value={form.name}
            onChange={handleChange}
            required
          />

          <TextField
            label="Your Email"
            name="email"
            type="email"
            fullWidth
            value={form.email}
            onChange={handleChange}
            required
          />

          <TextField
            label="Your Message"
            name="message"
            fullWidth
            multiline
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ backgroundColor: "#2f855a" }}
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
