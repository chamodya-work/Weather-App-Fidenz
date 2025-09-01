# Weather App

This is a full-stack weather application that displays weather information for a predefined list of major cities. It features a React frontend and a Node.js/Express backend, with user authentication handled by Auth0.

## Features

- **Secure Authentication:** Users must log in via Auth0 to view weather data.
- **Dashboard View:** Displays a grid of weather cards for multiple cities upon login.
- **Detailed View:** Click on any city card to see a more detailed weather page for that specific city.
- **Real-time Data:** Fetches current weather information from the OpenWeatherMap API.
- **Backend Caching:** Caches weather data on the server for 5 minutes to reduce API calls and improve performance.
- **Responsive Design:** The UI is designed to be usable on both desktop and mobile devices.
- **Modern Tech Stack:** Built with React, Vite, Node.js, and Express.

## Architecture

The application is split into two main parts: a frontend and a backend.

### Backend

The backend is a Node.js application using the Express framework. Its primary responsibilities are:

- Acting as a secure proxy to the OpenWeatherMap API.
- Validating JSON Web Tokens (JWTs) from the frontend using `express-jwt` and `jwks-rsa` to protect the API endpoint.
- Caching responses from the OpenWeatherMap API using `node-cache` to minimize redundant requests.

### Frontend

The frontend is a single-page application built with React and Vite. It handles:

- The user interface and component rendering.
- The user authentication flow using the Auth0 React SDK.
- Making authenticated API calls to its own backend to fetch weather data.
- Client-side routing with `react-router-dom` to manage the dashboard and detailed city views.

## Technology Stack

- **Frontend:** React, Vite, React Router, Axios, Auth0 React SDK, moment.js, react-icons
- **Backend:** Node.js, Express.js, Axios, express-jwt, jwks-rsa, node-cache, dotenv
- **Authentication:** Auth0

## Getting Started

To run this project locally, you will need to set up both the backend and frontend services.

### Prerequisites

- Node.js (v16 or later)
- npm (or yarn)
- An [Auth0](https://auth0.com/) account
- An [OpenWeatherMap](https://openweathermap.org/api) API key

### Auth0 Setup

1.  **Create an API (Audience):** In your Auth0 dashboard, go to "Applications" -> "APIs" and create a new API. Note the **Identifier**; this will be your `AUTH0_AUDIENCE`.
2.  **Create an Application:** In your Auth0 dashboard, go to "Applications" -> "Applications" and create a new "Single Page Application".
3.  **Configure Application Settings:**
    - Note the **Domain** and **Client ID**.
    - In the "Allowed Callback URLs" field, add `http://localhost:5173`.
    - In the "Allowed Logout URLs" field, add `http://localhost:5173`.
    - In the "Allowed Web Origins" field, add `http://localhost:5173`.

### Backend Setup

1.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file from the example:
    ```bash
    cp ".env .example" .env
    ```
4.  Edit the `.env` file and add your credentials:

    - `OPENWEATHER_API_KEY`: Your API key from OpenWeatherMap.
    - `AUTH0_DOMAIN`: Your Auth0 domain (e.g., `your-tenant.us.auth0.com`).
    - `AUTH0_AUDIENCE`: The API Identifier you created in Auth0.

5.  Start the backend server:
    ```bash
    npm run dev
    ```
    The server will be running on `http://localhost:5000`.

### Frontend Setup

1.  In a new terminal, navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file from the example:
    ```bash
    cp ".env .example" .env
    ```
4.  Edit the `.env` file with your Auth0 application details:
    - `VITE_AUTH0_DOMAIN`: Your Auth0 domain.
    - `VITE_AUTH0_CLIENT_ID`: The Client ID of your Auth0 SPA.
    - `VITE_AUTH0_AUDIENCE`: The API Identifier (must match the backend).
5.  Start the frontend development server:
    ```bash
    npm run dev
    ```
    The application will be accessible at `http://localhost:5173`.

The application will prompt you to log in. After successful authentication, you will be redirected to the weather dashboard.
