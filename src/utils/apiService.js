const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const WEATHER_GEOCODING_BASE_URL = process.env.NEXT_PUBLIC_WEATHER_GEOCODING_BASE_URL;
const WEATHER_5DAY_FORECAST_BASE_URL = process.env.NEXT_PUBLIC_WEATHER_5DAY_FORECAST_BASE_URL;

export async function getCityLatLon(city) {
  try {
    const url = `${WEATHER_GEOCODING_BASE_URL}direct?q=${city}&appid=${WEATHER_API_KEY}`;
    const res = await fetch(url, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    const cityData = data.find((item) => item.country === "ID");

    if (cityData) {
      return { lat: cityData.lat, lon: cityData.lon };
    } else {
      throw new Error("City not found in Indonesia");
    }
  } catch (error) {
    console.log("Error loading city data:", error);
    return null;
  }
}

export async function getWeatherData(lat, lon) {
  try {
    const url = `${WEATHER_5DAY_FORECAST_BASE_URL}forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    const res = await fetch(url, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data
  } catch (error) {
    console.log("Error loading products:", error);
  }
}