# GreenNest - A9B12_Nahiyan

🌱 **GreenNest** is a single-page web application designed for indoor plant lovers. Users can explore plant care guides, buy plants, and book expert consultations — helping them create a fresh and green living environment all year.

---

## Installation & Setup

Follow these steps to run the project locally:

### 1. Clone the Repository

```
git clone https://github.com/nahiyankhan55/B12-A9-Web.git
```

### 2. Navigate into the Project

```
cd B12-A9-Web
```

### 3. Install Dependencies

```
npm install
```

### 4. Create a `.env` File

Add your Firebase config:

```
VITE_API_KEY=your_key
VITE_AUTH_DOMAIN=your_domain
VITE_PROJECT_ID=your_id
VITE_STORAGE_BUCKET=your_bucket
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id
```

### 5. Run the Project

```
npm run dev
```

Your project will start at:

```
http://localhost:5173/
```

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

## Dev Dependencies

```json
"dependencies": {
"@emotion/react": "^11.14.0",
"@emotion/styled": "^11.14.1",
"@mui/material": "^7.3.4",
"@tailwindcss/vite": "^4.1.15",
"animate.css": "^4.1.1",
"aos": "^2.3.4",
"dotenv": "^17.2.3",
"firebase": "^12.4.0",
"prop-types": "^15.8.1",
"react": "^19.1.1",
"react-dom": "^19.1.1",
"react-icons": "^5.5.0",
"react-router": "^7.9.4",
"react-toastify": "^11.0.5",
"swiper": "^12.0.3",
"tailwindcss": "^4.1.15"
},
"devDependencies": {
"@eslint/js": "^9.36.0",
"@types/react": "^19.1.16",
"@types/react-dom": "^19.1.9",
"@vitejs/plugin-react": "^5.0.4",
"daisyui": "^5.5.5",
"eslint": "^9.36.0",
"eslint-plugin-react-hooks": "^5.2.0",
"eslint-plugin-react-refresh": "^0.4.22",
"globals": "^16.4.0",
"vite": "^7.1.7"
}
```

---

## Live Site Link

- [https://greennest-a9b12-nahiyan.netlify.app/](https://greennest-a9b12-nahiyan.netlify.app/)

## GitHub Repository

- [https://github.com/nahiyankhan55/B12-A9-Web](https://github.com/nahiyankhan55/B12-A9-Web)
