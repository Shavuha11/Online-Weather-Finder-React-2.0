import WeatherMetric from "./WeatherMetric";

function WeatherDetails({weather}) {
    return (
        <section className="details-grid">
            <WeatherMetric 
                icon="💧"
                label="Влажность"
                value={`${weather.humidity}%`}
                text="Показывает, сколько влаги сейчас в воздухе."
            />

            <WeatherMetric
                icon ="💨"
                label="Ветер"
                value={`${weather.windSpeed} м/с`}
                text="Скорость ветра в текущий момент."
            />

            <WeatherMetric
                icon="📊"
                label="Давление"
                value={`${weather.pressure} hPa`}
                text="Атмосферное давление в городе."
            />

            <WeatherMetric
                icon="☁️"
                label="Облачность"
                value={`${weather.cloudiness}%`}
                text="Сколько неба сейчас закрыто облаками."
            />

            <WeatherMetric
                icon="🌅"
                label="Восход"
                value={weather.sunrise}
                text="Время восхода солнца по городу."
            />

            <WeatherMetric
                icon="🌇"
                label="Закат"
                value={weather.sunset}
                text="Время заката солнца по городу."
            />
            </section>
        )
        }

export default WeatherDetails