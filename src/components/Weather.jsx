import { useEffect, useRef, useState } from 'react';
import Image from 'next/image'

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API;



function Weather() {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Alcobendas,España&lang=es&appid=${API_KEY}&units=metric`)
      .then(response => response.json())
      .then(data => setWeather(data))
  }, [])

  if (!weather) {
    return (
      <div className="relative flex items-center justify-between px-6 py-3 border bg-white/20 dark:bg-slate-900/50 rounded-2xl border-zinc-100/30 dark:border-zinc-700/40 backdrop-blur">
          <p className='text-xs text-slate-800 dark:text-slate-400'>Cargando tiempo...</p>
      </div>
      )
    }

  return (
    <div className="relative flex items-center justify-between px-6 py-3 border bg-white/20 dark:bg-slate-900/50 rounded-2xl border-zinc-100/30 dark:border-zinc-700/40 backdrop-blur">
      <h2 className="flex text-xs font-semibold text-slate-900 dark:text-slate-100 ">{weather.name}, {weather.sys.country}</h2>
      <div className='flex items-center py-1 pr-3 rounded-full bg-white/20 dark:bg-slate-900/50'>
        <Image
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="Picture of the author"
          width={36}
          height={36}
          className="mr-2 rounded-full bg-slate-100/60"
        />
        <p className="mr-2 text-xs capitalize text-slate-800 dark:text-slate-400">{weather.weather[0].description}</p>
        <p className="text-xs font-semibold text-slate-900 dark:text-slate-100"> {weather.main.temp}°C</p>
      </div>
    </div>
  )
}

export default Weather
