import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { FaArrowDown } from "react-icons/fa";

const SupportPage = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10 mb-20 p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
        GreenNest Support Center
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Need help? Find answers to common questions about plant care, orders,
        and account features. We're here to support your green journey.
      </p>

      <Accordion>
        <AccordionSummary expandIcon={<FaArrowDown />}>
          How do I care for my indoor plants?
        </AccordionSummary>
        <AccordionDetails>
          Each plant requires different care. Visit the Plant Details page to
          learn about watering, sunlight, soil, and humidity levels for each
          plant type.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<FaArrowDown />}>
          My plant is not growing well. What should I do?
        </AccordionSummary>
        <AccordionDetails>
          Make sure your plant has proper light, water balance, and clean soil.
          You can also book a consultation with our Green Experts for
          personalized advice.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<FaArrowDown />}>
          How do I book a plant consultation?
        </AccordionSummary>
        <AccordionDetails>
          Login to your account → Open a Plant Details page → Click “Book
          Consultation” and submit the form to schedule a session.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<FaArrowDown />}>
          I forgot my password. How do I reset it?
        </AccordionSummary>
        <AccordionDetails>
          On the Login page, click “Forgot Password” and enter your email. A
          reset link will be sent through Firebase Authentication.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<FaArrowDown />}>
          Can I update my profile information?
        </AccordionSummary>
        <AccordionDetails>
          Yes. Go to your Profile page and update your display name or profile
          photo. Changes are synced instantly with Firebase.
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SupportPage;
