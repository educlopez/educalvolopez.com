import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API;

function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Alcobendas,España&lang=es&appid=${API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }, []);

  if (!weather) {
    return (
      <div
        className="relative flex items-center justify-between px-6 py-3 border rounded-2xl border-zinc-900/10 bg-white/10 backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900/20 dark:backdrop-blur"
      >
        <p className="text-xs text-zinc-600 dark:text-zinc-400">
          Cargando tiempo...
        </p>
      </div>
    );
  }

  return (
    <div
      className="relative flex flex-col items-center justify-between px-6 py-3 border rounded-2xl border-zinc-900/10 bg-white/10 backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900/20 dark:backdrop-blur md:flex-row"
    >
      <h2 className="flex text-xs font-semibold text-zinc-900 dark:text-zinc-100 ">
        {weather.name}, {weather.sys.country}
      </h2>
      <div className="flex items-center py-1 pr-3 rounded-full bg-white/10 dark:bg-zinc-900/20">
        <Image
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="Picture of the author"
          width={36}
          height={36}
          className="mr-2 rounded-full bg-zinc-100/60"
        />
        <p className="mr-2 text-xs capitalize text-zinc-600 dark:text-zinc-400">
          {weather.weather[0].description}
        </p>
        <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
          {' '}
          {weather.main.temp}°C
        </p>
      </div>
    </div>
  );
}

export default Weather;
