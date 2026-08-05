# 🌦️ Weather Check

A modern, fast, and responsive weather application built with **React**, **Vite**, and **Material UI**. Search for any city and instantly view its current temperature range, humidity, and weather-specific visuals using live data from the **OpenWeatherMap API**.

<p align="center">
  <a href="https://weather-check-website-gvmyg4w7z-team-kuldeep.vercel.app/">
    <strong>View Live Demo »</strong>
  </a>
</p>

---

## 🚀 Live Demo

🌐 **Website:**
https://weather-check-website-gvmyg4w7z-team-kuldeep.vercel.app/

---

## 📸 Preview

Add your project screenshot inside the `src/assets` or `public/assets` folder and update the path below:

```md
![Weather Check Application](./src/assets/weather-app-preview.png)
```

<!-- Replace this comment with the screenshot after adding it:

<p align="center">
  <img src="./src/assets/weather-app-preview.png" alt="Weather Check Application Preview" width="850" />
</p>

-->

---

## ✨ Features

* 🌍 Search for current weather by city name
* 🌡️ View minimum and maximum temperatures
* 💧 Check the current humidity level
* 🖼️ Display dynamic images based on weather conditions
* 📱 Fully responsive design for desktop, tablet, and mobile
* ⚡ Fast development and optimized builds with Vite
* ☁️ Real-time weather data from OpenWeatherMap
* ❌ User-friendly error handling for invalid city names
* 🎨 Clean and modern interface using Material UI

---

## 🛠️ Tech Stack

| Category        | Technologies           |
| --------------- | ---------------------- |
| Frontend        | React, JavaScript ES6+ |
| Build Tool      | Vite                   |
| UI Library      | Material UI            |
| Weather API     | OpenWeatherMap API     |
| Deployment      | Vercel                 |
| Version Control | Git and GitHub         |

---

## 📂 Project Structure

```text
weather_check_website/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── Card.jsx
│   ├── WeatherApp.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Getting Started

Follow the steps below to run the project locally.

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* npm
* Git
* An OpenWeatherMap API key

### 1. Clone the repository

```bash
git clone https://github.com/kuldeepjhorar40/weather_check_website.git
```

### 2. Open the project directory

```bash
cd weather_check_website
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure the environment variable

Create a `.env` file in the root directory:

```env
VITE_WEATHER_API=YOUR_OPENWEATHERMAP_API_KEY
```

You can generate a free API key from:

[OpenWeatherMap API](https://openweathermap.org/api)

> **Important:** Never commit your real `.env` file or API key to GitHub. Make sure `.env` is included in `.gitignore`.

### 5. Start the development server

```bash
npm run dev
```

Open the following address in your browser:

```text
http://localhost:5173
```

---

## 📜 Available Scripts

### Start the development server

```bash
npm run dev
```

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Run ESLint

```bash
npm run lint
```

---

## 📖 API Integration

This project uses the **OpenWeatherMap Current Weather API**.

### Example API request

```text
https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=YOUR_API_KEY&units=metric
```

### Request parameters

| Parameter      | Description                        |
| -------------- | ---------------------------------- |
| `q`            | Name of the city                   |
| `appid`        | OpenWeatherMap API key             |
| `units=metric` | Returns the temperature in Celsius |

### Example response data used

```json
{
  "main": {
    "temp_min": 27.5,
    "temp_max": 31.2,
    "humidity": 72
  },
  "weather": [
    {
      "main": "Clouds",
      "description": "scattered clouds"
    }
  ]
}
```

---

## 🚀 Deployment on Vercel

The application is currently deployed using **Vercel**.

To deploy your own version:

1. Fork or clone this repository.
2. Push the project to your GitHub account.
3. Sign in to Vercel.
4. Import the GitHub repository.
5. Open the project’s environment-variable settings.
6. Add the following variable:

```env
VITE_WEATHER_API=YOUR_OPENWEATHERMAP_API_KEY
```

7. Deploy the application.

Vercel will automatically detect the Vite configuration and build the project.

---

## 🔐 Environment Variables

| Variable           | Purpose                           |
| ------------------ | --------------------------------- |
| `VITE_WEATHER_API` | Stores the OpenWeatherMap API key |

Variables used in Vite must start with the `VITE_` prefix to be accessible inside the application.

Example usage:

```javascript
const API_KEY = import.meta.env.VITE_WEATHER_API;
```

> Vite frontend environment variables are included in the browser bundle. Avoid placing private or highly sensitive credentials in frontend applications.

---

## 🗺️ Future Improvements

* 🌤️ Display detailed weather descriptions
* 🌬️ Add wind speed and direction
* 🌅 Show sunrise and sunset times
* 📍 Detect the user’s current location
* 🌧️ Add a five-day weather forecast
* 🕐 Display hourly forecasts
* 🌙 Add dark and light themes
* ⭐ Allow users to save favorite cities
* ⏳ Add loading skeletons or spinners
* 🔍 Add city search suggestions
* 🗺️ Integrate an interactive weather map
* 📊 Display temperature and humidity charts
* 🧪 Add unit and integration tests

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

### Contribution steps

1. Fork the repository.

2. Create a new feature branch:

```bash
git checkout -b feature/your-feature-name
```

3. Make and test your changes.

4. Commit your changes:

```bash
git commit -m "Add your feature description"
```

5. Push the branch to GitHub:

```bash
git push origin feature/your-feature-name
```

6. Open a Pull Request.

---

## 🐛 Reporting Issues

Found a bug or have a feature suggestion?

Open an issue in the GitHub repository and include:

* A clear description of the issue
* Steps to reproduce it
* Expected behaviour
* Screenshots, when applicable
* Browser and device information

---

## 📄 License

This project is licensed under the **MIT License**.

You are free to use, modify, and distribute the project according to the terms of the license.

---

## 👨‍💻 Author

### Kuldeep

* **GitHub:** [kuldeepjhorar40](https://github.com/kuldeepjhorar40)
* **Repository:** [weather_check_website](https://github.com/kuldeepjhorar40/weather_check_website)

---

<p align="center">
  Built with ❤️ using React, Vite, Material UI, and OpenWeatherMap
</p>

<p align="center">
  ⭐ If you found this project useful, consider giving the repository a star!
</p>
