import { useEffect, useState, useRef } from "react";
import context from "./Context";

function ContextProvider({ children }) {
  const [weatherState, setWeatherState] = useState("C");
  const [searchQuery, setSearchQuery] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const initialLoad = useRef(true);
  const [timeAndDate, setTimeAndDate] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const [error, setError] = useState("");
  function formatCurrentDateTime() {
    const now = new Date();

    return (
      now.toLocaleDateString("en-US", {
        weekday: "short",
        day: "numeric",
        month: "short",
      }) +
      " " +
      now
        .toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
        .replace(" ", "")
    );
  }
  function handleClick() {
    setError("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (err) => {
        setError(err.message);
      },
    );
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      () => {
        setSearchQuery("Bengaluru");
      },
    );
  }, []);

  useEffect(() => {
    if (latitude === null || longitude === null) return;

    async function geoCoding() {
      try {
        const res = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`,
        );

        if (!res.ok) {
          throw new Error("Failed to fetch location");
        }

        const data = await res.json();

        console.log(data);

        setCity(data.city || data.locality || "");
        setState(data.principalSubdivision || "");
        setCountry(data.countryName || "");
      } catch (err) {
        setError(err.message);
      }
    }

    geoCoding();
  }, [latitude, longitude]);

  useEffect(() => {
    if (!searchQuery.trim()) return;
    if (searchQuery.length < 2) return;

    async function getCityCoord() {
      try {
        setError("");

        const res = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${searchQuery.toLowerCase()}&count=1`,
        );

        if (!res.ok) {
          throw new Error("Failed to fetch city");
        }

        const data = await res.json();

        if (!data.results || data.results.length === 0) {
          throw new Error("City not found");
        }

        const result = data.results[0];

        setLatitude(result.latitude);
        setLongitude(result.longitude);

        setCountry(result.country);
        setState(result.admin1);
        setCity(result.name);
      } catch (err) {
        setError(err.message);
      }
    }

    getCityCoord();
  }, [searchQuery]);

  useEffect(() => {
    if (latitude === null || longitude === null) return;

    async function fetchWeatherData() {
      try {
        setError("");
        setTimeAndDate(formatCurrentDateTime());

        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,is_day,visibility&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=5&timezone=auto`,
        );

        if (!res.ok) {
          throw new Error("Failed to fetch weather");
        }

        const data = await res.json();

        setWeatherData(data);

        if (initialLoad.current) {
          setIsloading(false);
          initialLoad.current = false;
        }

        setWeatherData(data);
      } catch (err) {
        setError(err.message);

        if (initialLoad.current) {
          setIsloading(false);
          initialLoad.current = false;
        }
      }
    }

    fetchWeatherData();
  }, [latitude, longitude]);

  return (
    <context.Provider
      value={{
        error,
        isLoading,

        weatherState,
        setWeatherState,

        searchQuery,
        setSearchQuery,

        handleClick,
        timeAndDate,
        weatherData,

        city,
        country,
        state,
      }}
    >
      {children}
    </context.Provider>
  );
}

export default ContextProvider;
