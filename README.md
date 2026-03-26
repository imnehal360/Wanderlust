<<<<<<< HEAD

Project Description: A high-level overview of the travel and accommodation booking platform.
Features: Key functionalities like hosting, checking locations via Mapbox, handling reviews, uploading images to Cloudinary, etc.
Tech Stack: Details on the backend Node.js, Express, MongoDB setup, and the EJS frontend templating.
Prerequisites: What needs to be installed (Node.js, MongoDB) and the correct API keys.
Environment Variables configuration check-list: All the necessary 

.env
 variables mapped out for new developers to safely deploy/start the project (MongoDB connection string, Cloudinary keys, Session secret, and Mapbox tokens).
Setup Instructions: A step-by-step guide explaining how to install packages (npm install) and spin up the server with npm run dev.
=======
# Wanderlust 🌍✈️

Wanderlust is a modern, full-stack travel and accommodation booking platform inspired by Airbnb. It allows hosts to list their properties and travelers to explore, review, and book unique stays around the world.

## Features 🚀
- **User Authentication & Authorization**: Secure signup, login, and logout functionality with Passport.js.
- **Listing Management**: Hosts can create, edit, and delete their own property listings.
- **Image Uploads**: Seamless image uploading and cloud storage via Cloudinary and Multer.
- **Interactive Maps**: View listing locations on an interactive map using Mapbox integration.
- **Reviews & Ratings**: Logged-in users can leave reviews and ratings for stays.
- **Responsive Design**: A user-friendly interface powered by EJS and styled for responsiveness.
- **Session Management**: Persistent user sessions stored securely in MongoDB using `connect-mongo`.

## Tech Stack 💻
- **Frontend**: HTML, CSS, JavaScript, EJS (Embedded JavaScript templates), EJS-Mate
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ORM)
- **Authentication**: Passport.js, passport-local, passport-local-mongoose
- **Cloud Storage**: Cloudinary, Multer
- **Maps**: @mapbox/mapbox-sdk

## Prerequisites 📋
Before you begin, ensure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/) (v22 or higher recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (Local instance or MongoDB Atlas cluster)
- Cloudinary Account (for image uploads)
- Mapbox Account (for interactive maps)

## Environment Variables 🔐
Create a `.env` file in the root directory of the project and add the following variables:

```env
# MongoDB Atlas URL (or Local MongoDB URL)
ATLASDB_URL="your_mongodb_connection_string"

# Session Secret (Can be any strong random string)
SECRET="your_session_secret_string"

# Cloudinary Configuration
CLOUD_NAME="your_cloudinary_cloud_name"
CLOUD_API_KEY="your_cloudinary_api_key"
CLOUD_API_SECRET="your_cloudinary_api_secret"

# Mapbox Token
MAP_TOKEN="your_mapbox_public_token"
```

## Installation & Setup 🛠️

1. **Clone the repository** (if applicable) or download the source code:
   ```bash
   git clone <repository_url>
   cd WanderLust
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the application**:
   - For development mode (using nodemon):
     ```bash
     npm run dev
     ```
   - For production mode:
     ```bash
     npm start
     ```

4. **Access the Application**:
   Open your browser and navigate to: [http://localhost:8080](http://localhost:8080)

## Folder Structure 📁
- `controllers/` - Contains the logic for routes (Listings, Reviews, Users).
- `models/` - Mongoose database schemas (User, Listing, Review).
- `routes/` - Express router definitions.
- `views/` - EJS templates for the frontend UI.
- `public/` - Static assets (CSS, JS, images).
- `utils/` - Utility functions and error handling classes.
- `app.js` - Main application entry point.

## License 📄
This project is licensed under the ISC License.
>>>>>>> 64907b9 (feat: update package.json and add new scripts; upgrade cloudinary dependency)
