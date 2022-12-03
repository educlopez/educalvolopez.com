import { useEffect, useRef, useState } from 'react';

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API;

function Weather() {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Alcobendas,España&lang=es&appid=${API_KEY}&units=metric`)
      .then(response => response.json())
      .then(data => setWeather(data))
  }, [])

  if (!weather) {
    return <p>Cargando tiempo...</p>
  }

  return (
    <div>

    <div className="relative flex items-center justify-between p-6 border bg-white/20 dark:bg-slate-900/50 rounded-2xl border-zinc-100 dark:border-zinc-700/40 backdrop-blur">
      <h2 className="flex text-xl font-semibold text-slate-900 dark:text-slate-100 ">{weather.name}, {weather.sys.country}</h2>
      <p className="text-xs capitalize text-slate-800 dark:text-slate-400">{weather.weather[0].description}</p>
      <p className="text-4xl font-semibold text-slate-900 dark:text-slate-100"> {weather.main.temp}°C</p>
    </div>
    </div>
  )
}

export default Weather
