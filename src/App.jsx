import bg from "../public/bg.png";
import DailyForecast from "./components/DailyForecast";
import Navbar from "./components/Navbar";
import SearchCity from "./components/SearchCity";
import WeatherSection from "./components/WeatherSection";
function App() {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="w-full fixed inset-0 h-dvh font-DM bg-cover bg-center px-4 py-5 space-y-10 grid grid-rows-[auto_auto_1fr] items-center justify-center"
    >
      <Navbar />

      <div className="flex justify-center">
        <SearchCity />
      </div>

      <div className="h-full space-y-5 flex flex-col items-center sm:max-w-5xl">
        <WeatherSection />
        <DailyForecast />
      </div>
    </div>
  );
}
export default App;
