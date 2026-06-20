function CityChips({ cities, onSelectCity, loading }) {
  return (
    <div className="panel-block">
      <div className="panel-heading">
        <h2>Быстрый выбор</h2>
        <p>Готовые кнопки помогают объяснить события и props.</p>
      </div>

      <div className="chip-list">
        {cities.map((city) => (
          <button
            key={city}
            type="button"
            className="chip-button"
            disabled={loading}
            onClick={() => onSelectCity(city)}
          >
            <span className="small-emoji" aria-hidden="true">
              📍
            </span>
            {city}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CityChips
