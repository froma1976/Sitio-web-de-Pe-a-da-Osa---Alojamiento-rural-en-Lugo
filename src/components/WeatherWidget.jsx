import React, { useEffect, useState } from 'react';
import { Cloud, CloudDrizzle, CloudFog, CloudLightning, CloudRain, CloudSnow, Sun, Wind } from 'lucide-react';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  // Coordinates for Sober, Lugo
  const LAT = 42.4619;
  const LON = -7.5894;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,weather_code&timezone=auto`
        );
        const data = await response.json();
        setWeather(data.current);
      } catch (error) {
        console.error("Failed to fetch weather:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  // WMO Weather interpretation codes (https://open-meteo.com/en/docs)
  const getWeatherIcon = (code) => {
    if (code === 0 || code === 1) return <Sun className="w-5 h-5 text-[#e5c988]" />;
    if (code === 2 || code === 3) return <Cloud className="w-5 h-5 text-stone-400" />;
    if (code >= 45 && code <= 48) return <CloudFog className="w-5 h-5 text-stone-400" />;
    if (code >= 51 && code <= 67) return <CloudDrizzle className="w-5 h-5 text-blue-300" />;
    if (code >= 71 && code <= 77) return <CloudSnow className="w-5 h-5 text-white" />;
    if (code >= 80 && code <= 82) return <CloudRain className="w-5 h-5 text-blue-400" />;
    if (code >= 95 && code <= 99) return <CloudLightning className="w-5 h-5 text-yellow-400" />;
    return <Sun className="w-5 h-5 text-[#e5c988]" />;
  };

  const getWeatherDescription = (code) => {
    if (code === 0) return "Despejado";
    if (code >= 1 && code <= 3) return "Parcialmente nublado";
    if (code >= 45 && code <= 48) return "Niebla";
    if (code >= 51 && code <= 67) return "Llovizna";
    if (code >= 71 && code <= 77) return "Nieve";
    if (code >= 80 && code <= 82) return "Lluvia";
    if (code >= 95 && code <= 99) return "Tormenta";
    return "Despejado";
  };

  if (loading) return <div className="animate-pulse h-5 w-20 bg-white/10 rounded"></div>;
  if (!weather) return null;

  return (
    <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
      {getWeatherIcon(weather.weather_code)}
      <div className="flex flex-col leading-none">
        <span className="text-sm font-semibold text-white">
          {Math.round(weather.temperature_2m)}°C
        </span>
        <span className="text-[10px] uppercase tracking-wider text-stone-400">
          Sober
        </span>
      </div>
    </div>
  );
};

export default WeatherWidget;
