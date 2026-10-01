function WeatherSkeleton() {
  return (
    <div className="w-full flex flex-col items-center space-y-5 animate-pulse">
      <div className="w-full md:w-130 h-11 md:h-12 rounded-full bg-white/50 backdrop-blur-md" />

      <div className="flex w-85 sm:w-200 max-w-200 h-71.25 shrink-0 bg-white/50 backdrop-blur-md rounded-lg px-3 sm:px-4 py-5 flex-col gap-10">
        <div className="flex justify-between">
          <div className="text-black flex flex-col gap-3 w-[50%]">
            <div className="space-y-2">
              <div className="h-6 w-40 sm:w-56 rounded-md bg-gray-300/50" />
              <div className="h-4 w-28 sm:w-40 rounded-md bg-gray-300/50" />
            </div>

            <div className="space-y-2">
              <div className="h-14 sm:h-16 w-32 sm:w-44 rounded-md bg-gray-300/50" />
              <div className="h-5 w-24 sm:w-32 rounded-md bg-gray-300/50" />
            </div>
          </div>

          <div className="shrink-0 w-[50%] flex justify-end">
            <div className="h-35 sm:h-40 w-32 sm:w-40 rounded-full bg-gray-300/50" />
          </div>
        </div>

        <div className="flex justify-between items-center gap-1">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex items-center gap-1 text-sm">
              <div className="h-5 w-5 rounded-full bg-gray-300/50" />

              <div className="space-y-1">
                <div className="h-4 w-12 sm:w-16 rounded-md bg-gray-300/50" />
                <div className="h-3 w-14 sm:w-20 rounded-md bg-gray-300/50" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full md:w-200 h-31.25 shrink-0 gap-2 sm:gap-5 justify-between bg-white/50 backdrop-blur-md rounded-lg px-4 py-5 items-center">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="flex-1 h-full flex flex-col items-center justify-center gap-2 border-r border-black/20 last:border-r-0"
          >
            <div className="h-4 w-10 sm:w-14 rounded-md bg-gray-300/50" />
            <div className="h-7 w-7 rounded-full bg-gray-300/50" />
            <div className="h-4 w-12 sm:w-16 rounded-md bg-gray-300/50" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherSkeleton;
