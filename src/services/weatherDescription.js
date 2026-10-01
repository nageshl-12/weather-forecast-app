export function getWeatherDescription(code) {
  const weather = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",

    45: "Fog",
    48: "Depositing rime fog",

    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",

    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",

    71: "Slight snow",
    73: "Moderate snow",
    75: "Heavy snow",

    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",

    95: "Thunderstorm",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail",
  };

  return weather[code] || "Unknown weather";
}

export function getWeatherImage(code) {
  if (code === 0) return "./SunnyClear.png";

  if (code === 1 || code === 2) return "./PartlyCloudy.png";

  if (code === 3) return "./Cloudy Overcast.png";

  if (code === 45 || code === 48) return "./FoggyMist.png";

  if (code >= 51 && code <= 67) return "./Rainy.png";

  if (code >= 71 && code <= 77) return "./Snowy.png";

  if (code >= 80 && code <= 82) return "./Rainy.png";

  if (code >= 95 && code <= 99) return "./Thunderstorm.png";

  return "./SunnyClear.png";
}

export function getWeatherEmoji(code) {
  const weatherEmojis = {
    0: "☀️",

    1: "🌤️",
    2: "⛅",
    3: "☁️",

    45: "🌫️",
    48: "🌫️",

    51: "🌦️",
    53: "🌦️",
    55: "🌧️",

    56: "🌧️",
    57: "🌧️",

    61: "🌧️",
    63: "🌧️",
    65: "🌧️",

    66: "🌧️",
    67: "🌧️",

    71: "🌨️",
    73: "🌨️",
    75: "❄️",

    77: "❄️",

    80: "🌦️",
    81: "🌧️",
    82: "🌧️",

    85: "🌨️",
    86: "🌨️",

    95: "⛈️",

    96: "⛈️",
    99: "⛈️",
  };

  return weatherEmojis[code] || "🌡️";
}

export function celsiusToFahrenheit(celsius) {
  return ((celsius * 9) / 5 + 32).toFixed(2);
}
