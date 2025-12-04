# GreenNest - A9B12_Nahiyan

🌱 **GreenNest** is an elegant single-page web application designed for indoor plant lovers. Users can explore plant care guides, buy plants, and book expert consultations — ensuring a greener and healthier living space year-round.

---

## Project Overview

GreenNest is a **responsive and visually appealing SPA** that provides:

- A curated list of indoor plants with detailed care information.
- User authentication (Email/Password + Google Sign-In).
- Protected routes for plant details and user profile.
- Interactive sections like Top Rated Plants, Plant Care Tips, Green Experts, Eco Decor Ideas, and Plant of the Week.

The platform emphasizes **simplicity, calm design, and user-friendly interaction**.

---

## Features

### Authentication

- Firebase authentication (Signup, Login, Google Sign-In, Forgot Password).
- Password validation and show/hide toggle.
- Real-time profile updates (`updateProfile()`).

### Home Page Sections

1. **Hero Section:** Smooth nature-inspired slider using Swiper.js or Framer Motion.
2. **Top Rated Indoor Plants:** Cards fetched from JSON with image, price, rating, and details.
3. **Plant Care Tips Section:** 6 tip cards with watering, sunlight, fertilizing, and pruning advice.
4. **Meet Our Green Experts:** Profiles of 3 plant specialists with bio and role.
5. **Eco Decor Ideas:** Accordion-style tips for styling your home with plants.
6. **Plant of the Week:** Featured plant with image, description, price, rating, and CTA buttons.

### Plant Details Page

- Protected route: only accessible when logged in.
- Shows full plant details.
- Includes a “Book Consultation” form with toast feedback on submission.

### Profile Management

- Update display name and profile photo in real-time.
- View user info and manage account settings.

---

## Tech Stack

- **Frontend:** React.js, Tailwind CSS, DaisyUI, React Route, AOS
- **Authentication:** Firebase Auth (Email & Google)
- **Data:** Static JSON (`plants.json`) for plant listings
- **Icons:** react-icons
- **Notifications:** react-toastify

---

## Live Site Link

- [https://greennest-a9b12-nahiyan.netlify.app/](https://greennest-a9b12-nahiyan.netlify.app/)

## GitHub Repository

- [https://github.com/nahiyankhan55/B12-A9-Web](https://github.com/nahiyankhan55/B12-A9-Web)
