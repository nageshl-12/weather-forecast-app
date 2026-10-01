import { MapPin } from "lucide-react";
import { useValues } from "../Context";

function SearchCity() {
  const { searchQuery, setSearchQuery, handleClick, city } = useValues();

  return (
    <div className="w-full md:w-130 sm:hover:scale-x-105 transition-all duration-300 flex items-center relative justify-between rounded-full mt-3 bg-white">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        defaultValue={city ? city : ""}
        placeholder="Search for a city..."
        className="px-3 py-2  w-full placeholder:text-black/40 placeholder:px-2 md:px-3 md:py-3 focus:outline-none focus:ring-2 transition-all ring-offset-2 duration-300 focus:ring-blue-600 rounded-full"
      />
      <button
        onClick={handleClick}
        className="bg-blue-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300 ring-offset-1  transition-all rounded-full px-3 py-1 md:px-4 md:py-2 text-white absolute right-1.5 "
      >
        <MapPin size={19} />
      </button>
    </div>
  );
}

export default SearchCity;
