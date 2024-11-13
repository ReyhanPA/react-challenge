"use client";

import { useState } from "react";
import FormSearch from "@/components/formSearch";
import WeatherCard from "@/components/weatherCard";
import { getCityLatLon, getWeatherData } from "@/utils/apiService";
import ClipLoader from "react-spinners/ClipLoader";

export default function WeatherPage() {
  const [dataAllWeather, setDataAllWeather] = useState([]);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGetWeather = async (city) => {
    try {
      setLoading(true);
      const dataLatLon = await getCityLatLon(city);
      const allWeather = [];
      if (dataLatLon) {
        const data = await getWeatherData(dataLatLon.lat, dataLatLon.lon);
        const weather = data.list;
        weather.map((item) => {
          const dateTime = item.dt_txt;
          const [formattedDate, formattedTime] = dateTime.split(" ");

  
          const main = item.weather[0].main;
          const description = item.weather[0].description;
          const icon = item.weather[0].icon;
          
          allWeather.push({ date: formattedDate, time: formattedTime, main, description, icon });
        });
        setDataAllWeather(allWeather);
        console.log(dataAllWeather);
        const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
        setCity(capitalizedCity);
      } else {
        console.log("City not found or error occurred.");
        setCity("City not found");
        setDataAllWeather([]);
      }
    } catch (error) {
      console.log("Error fetching city data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-col pt-24 bg-white">
      <div className="flex justify-start px-4">
        <h1 className="text-lg font-semibold text-cyan-800">Weather</h1>
      </div>
      <FormSearch onSearch={handleGetWeather} />
      <div className="flex justify-center px-4 my-4">
        <h1 className="text-base font-semibold text-cyan-800">{loading ? "" : city}</h1>
      </div>
      <div className="flex gap-2 flex-wrap justify-center items-center px-4">
        {loading ? <ClipLoader color="#36d7b7" /> : dataAllWeather.map((item, index) => (
          <WeatherCard
            key={index}
            date={item.date}
            time={item.time}
            main={item.main}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}
