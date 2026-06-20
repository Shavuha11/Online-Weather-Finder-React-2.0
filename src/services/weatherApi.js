const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY

function formatCityTime(unixTime, timezoneOffset) {
    return new Intl.DateTimeFormat("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "UTC",
    }).format(new Date((unixTime + timezoneOffset) * 1000))
}

function capitalizeText(text) {
    return text.charAt(0).toUpperCase() + text.slice(1)
}

export async function getWeatherByCity(cityName) {
    if (!apiKey) {
        throw new Error("Добавьте API ключ OpenWeather в файл .env.local.")
    }

    // One simple request by city name.
    const weatherUrl =
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}` +
        `&appid=${apiKey}&units=metric`

    
    const response = await fetch(weatherUrl)
    const data = await response.json()

    if (!response.ok) {
        if (data.cod === "404" || data.cod === 404) {
            throw new Error("Город не найден. Попробуйте другое название.")
        }

        throw new Error("Не удалось получить погоду. Попробуйте позже.")
    }

    return {
        city: data.name,
        country: data.sys.country,
        description: capitalizeText(data.weather[0].description),
        temperature: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        tempMin: Math.round(data.main.temp_min),
        tempMax: Math.round(data.main.temp_max),
        humidity: data.main.humidity,
        windSpeed: Math.round(data.wind.speed * 10) / 10,
        pressure: data.main.pressure,
        cloudiness: data.clouds.all,
        sunrise: formatCityTime(data.sys.sunrise, data.timezone),
        sunset: formatCityTime(data.sys.sunset, data.timezone), 
        localTime: formatCityTime(data.dt, data.timezone),
        coordinates: `${data.coord.lat.toFixed(2)}, ${data.coord.lon.toFixed(2)}`,
        iconUrl: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    }
}