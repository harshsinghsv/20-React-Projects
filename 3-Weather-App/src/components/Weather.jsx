// src/components/WeatherApp.jsx
import { useState } from 'react';
import { useWeather } from '../hooks/useWeather';
import { Sun, Cloud, Droplets, Wind } from "lucide-react"; // optional icons

const apiKey = import.meta.env.VITE_OPENWEATHER_KEY;

export default function WeatherApp() {
  const [city, setCity] = useState('');
  const { data: weather, status, error, getWeather } = useWeather(apiKey);

  const searching = status === 'loading';

  const handleSearch = () => getWeather(city);
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') getWeather(city);
  };

  return (
    <div
      className="flex flex-col justify-center items-center h-screen"
        style={{
        backgroundImage: "url('/src/assets/images/bgg.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div> */}

      <div className="relative z-10 w-full max-w-md mx-auto p-6 h-[60%] rounded-4xl shadow-xl bg-white/20 backdrop-blur-md border border-white/30 overflow-hidden flex flex-col gap-2 text-white">
         
      <div className='w-full h-[45%] rounded-4xl bg-[#8A8C8B] backdrop-blur-4xl p-6 flex flex-col justify-between gap-2'>
        <div className='flex justify-center items-center gap-3'>
          <div className='h-20 w-20'>
            🌤️
          </div>

          <div>
            <h1>Saturday, 12:26</h1>
            <h1>Cloudy, 30°C</h1>
            <h1>Delhi, India</h1>
          </div>
        </div>
        <div className='w-full h-[30%] flex items-center justify-center text-white bg-[#172929] z-10 rounded-4xl '></div>
      </div>

      <div className='w-full h-[10%] bg-[#172929] text-white rounded-3xl'></div>

      <div className='flex justify-between items-center text-gray-300'>
        <p>Humidity : 73%</p>
        <p>Wind : 10km</p>
      </div>

      <div className='flex gap-1.5'>
        <div className='w-15 h-42 bg-[#777674] rounded-4xl backdrop-blur-4xl'></div>
        <div className='w-15 h-42 bg-[#777674] rounded-4xl backdrop-blur-4xl'></div>
        <div className='w-15 h-42 bg-[#777674] rounded-4xl backdrop-blur-4xl'></div>
        <div className='w-15 h-42 bg-[#777674] rounded-4xl backdrop-blur-4xl'></div>
        <div className='w-15 h-42 bg-[#777674] rounded-4xl backdrop-blur-4xl'></div>
        <div className='w-15 h-42 bg-[#777674] rounded-4xl backdrop-blur-4xl'></div>
        <div className='w-15 h-42 bg-[#777674] rounded-4xl backdrop-blur-4xl'></div>






        
      </div>

      
        


        
        {/* <div className="flex mb-4 gap-3">
          <input
            className="flex-1 px-4 py-2 rounded-xl bg-white/70 
                       focus:outline-none focus:ring-2 focus:ring-blue-400
                       placeholder-gray-500 text-gray-800 shadow-sm"
            placeholder="Enter city (e.g., Pune)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={searching}
          />
          <button
            onClick={handleSearch}
            disabled={searching || !city.trim()}
            className={`px-5 py-2 font-medium text-white rounded-xl shadow-md transition-all
              ${searching ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 active:scale-95'}`}
          >
            {searching ? '...' : 'Go'}
          </button>
        </div> */}

        {/* Status Messages
        {status === 'idle' && (
          <p className="text-gray-200 text-center">🌍 Search for a city to get started</p>
        )}
        {status === 'error' && (
          <p className="text-red-500 text-center">⚠️ {error}</p>
        )} */}

        {/* Weather Card */}
        {/* {status === 'success' && weather && (
          <div className="mt-6 text-center text-white space-y-3">
            <h3 className="text-2xl font-bold">{weather.name}</h3>
            <p className="text-5xl font-extrabold">
              {Math.round(weather.main.temp)}°C
            </p>
            <p className="capitalize text-lg">{weather.weather?.[0]?.description}</p>
            
            <div className="mt-4 flex justify-center gap-6 text-sm text-gray-200">
              <div className="flex items-center gap-1">
                <Sun size={16}/> Feels {Math.round(weather.main.feels_like)}°C
              </div>
              <div className="flex items-center gap-1">
                <Droplets size={16}/> {weather.main.humidity}%
              </div>
              <div className="flex items-center gap-1">
                <Wind size={16}/> {Math.round(weather.wind.speed)} m/s
              </div>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}
