    import { Droplets, Wind, Thermometer, Eye } from "lucide-react";
    import { useValues } from "../Context";

    import {
      celsiusToFahrenheit,
      getWeatherDescription,
      getWeatherImage,
    } from "../services/weatherDescription";

    function WeatherSection() {
      const { weatherData, city, country, weatherState, timeAndDate } = useValues();

      const convertedWeatherData =
        weatherState === "F"
          ? celsiusToFahrenheit(weatherData?.current?.apparent_temperature)
          : weatherData?.current?.apparent_temperature;

      const tempUnit = weatherState === "F" ? "F" : "C";

      const weatherDetails = [
        {
          icon: <Droplets size={19} />,
          value: weatherData ? weatherData.current.relative_humidity_2m : "",
          units: weatherData ? weatherData.current_units.relative_humidity_2m : "",
          label: "Humidity",
          mobileLabel: "Humidity",
        },
        {
          icon: <Wind size={19} />,
          value: weatherData ? weatherData.current.wind_speed_10m : "",
          units: weatherData ? weatherData.current_units.wind_speed_10m : "",
          label: "Wind Speed",
          mobileLabel: "Wind",
        },
        {
          icon: <Thermometer size={19} />,
          value: convertedWeatherData,
          units: `°${tempUnit}`,
          label: "Feels Like",
          mobileLabel: "Feels",
        },
        {
          icon: <Eye size={19} />,
          value: weatherData ? weatherData.current.visibility / 1000 : "",
          units: "KM",
          label: "Visibility",
          mobileLabel: "Visibility",
        },
      ];

      return (
        <div className="flex w-85 sm:w-200 max-w-200 h-71.25 shrink-0 bg-white/70 backdrop-blur-md hover:-translate-y-0.5 transition-all duration-300 rounded-lg px-3 sm:px-4 py-5 flex-col gap-10">
          <div className="flex justify-between">
            <div className="text-black text-lg flex flex-col gap-3 w-[50%]">
              <div className="min-w-0">
                <h1 className="whitespace-nowrap overflow-hidden text-ellipsis max-w-50 sm:text-2xl">
                  {city && `${city}, `}
                  {country}
                </h1>

                <p className="font-light text-sm">{timeAndDate}</p>
              </div>
              <span>
                <h1 className="sm:text-6xl text-5xl font-semibold">
                  {convertedWeatherData}°{tempUnit}
                </h1>

                <p className="font-medium opacity-70">
                  {getWeatherDescription(weatherData?.current?.weather_code)}
                </p>
              </span>
            </div>

            <div className="shrink-0 w-[50%] flex justify-end">
              <img
                className="h-35 sm:h-40 sm:ml-20 "
                src={getWeatherImage(weatherData?.current?.weather_code)}
                alt=""
              />
            </div>
          </div>

          <div className="flex justify-between items-center gap-1">
            {weatherDetails.map((item) => (
              <span key={item.label} className="flex items-center gap-1 text-sm">
                <span className="scale-90 sm:scale-100">{item.icon}</span>

                <span>
                  <h1>
                    {item.value}
                    {item.units}
                  </h1>

                  <span className="text-black/60">
                    <p>
                      <span className="sm:hidden">{item.mobileLabel}</span>
                      <span className="hidden sm:inline">{item.label}</span>
                    </p>
                  </span>
                </span>
              </span>
            ))}
          </div>
        </div>
      );
    }

    export default WeatherSection;
