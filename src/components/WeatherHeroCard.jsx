function WeatherHeroCard({ weather }) {
  return (
    <section className="weather-hero">
      <div className="weather-hero__left">
        <p className="weather-label">Сейчас в городе</p>
        <h2>
          {weather.city}, {weather.country}
        </h2>
        <p className="weather-description">{weather.description}</p>

        <div className="temperature-row">
          <div className="temperature-icon">
            <span className="big-emoji" aria-hidden="true">
              🌡️
            </span>
          </div>

          <div>
            <strong className="temperature-value">{weather.temperature}°C</strong>
            <p className="temperature-note">
              Ощущается как {weather.feelsLike}°C
            </p>
          </div>
        </div>

        <div className="hero-meta">
          <span>
            <span className="small-emoji" aria-hidden="true">
              🕒
            </span>
            Местное время: {weather.localTime}
          </span>

          <span>
            <span className="small-emoji" aria-hidden="true">
              📍
            </span>
            Координаты: {weather.coordinates}
          </span>
        </div>
      </div>

      <div className="weather-hero__right">
        <img
          className="weather-icon"
          src={weather.iconUrl}
          alt={weather.description}
        />

        <div className="temperature-range">
          <span>Мин: {weather.tempMin}°C</span>
          <span>Макс: {weather.tempMax}°C</span>
        </div>
      </div>
    </section>
  )
}

export default WeatherHeroCard
