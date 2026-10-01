import { useValues } from "../Context";
import {
  celsiusToFahrenheit,
  getWeatherEmoji,
} from "../services/weatherDescription";

function DailyForecast() {
  const { weatherData, weatherState } = useValues();
  const dailyData = weatherData?.daily;

  console.log(dailyData);

  function getDayName(date, index) {
    if (index === 0) return "Today";

    return new Date(date).toLocaleDateString("en-US", {
      weekday: "short",
    });
  }

  return (
    <div className="flex w-full divide-x divide-black/20 md:w-200 h-31.25 shrink-0 gap-2 sm:gap-5 justify-between hover:-translate-y-0.5 transition-all duration-300 bg-white/70 backdrop-blur-md rounded-lg px-4 py-5 items-center">
      {dailyData?.time.map((date, i) => (
        <span key={date} className="text-center flex-1 whitespace-nowrap">
          {getDayName(date, i)}
          <br />

          {getWeatherEmoji(dailyData.weather_code[i])}
          <br />

          <div className="flex flex-col items-center justify-center leading-tight">
            <b className="font-semibold">
              {weatherState === "F"
                ? `${Math.ceil(
                    celsiusToFahrenheit(
                      Math.round(dailyData.temperature_2m_max[i]),
                    ),
                  )}°`
                : `${Math.round(dailyData.temperature_2m_max[i])}°`}
            </b>

            <b className="font-light">
              {weatherState === "F"
                ? `${Math.ceil(
                    celsiusToFahrenheit(
                      Math.round(dailyData.temperature_2m_min[i]),
                    ),
                  )}°`
                : `${Math.round(dailyData.temperature_2m_min[i])}°`}
            </b>
          </div>
        </span>
      ))}
    </div>
  );
}

export default DailyForecast;
