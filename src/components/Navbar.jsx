import { useValues } from "../Context";

function Navbar() {
  const { weatherState, setWeatherState } = useValues();
  return (
    <div className="flex justify-between text-white w-full">
      <span className="text-2xl sm:text-3xl font-semibold flex items-center gap-1">
        <p>⛅</p>
        <p>Weather</p>
      </span>
      <span className="rounded-full w-fit  bg-white/20 flex items-center text-sm font-semibold backdrop-blur-2xl">
        <button
          onClick={() => setWeatherState("C")}
          className={`px-4 py-2 cursor-pointer rounded-full${weatherState === "C" ? " bg-white text-black" : "text-white"}`}
        >
          °C
        </button>
        <button
          onClick={() => setWeatherState("F")}
          className={`px-4 py-2 cursor-pointer rounded-full${weatherState === "F" ? " bg-white text-black" : "text-white"}`}
        >
          °F
        </button>
      </span>
    </div>
  );
}

export default Navbar;
