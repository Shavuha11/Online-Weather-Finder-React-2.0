import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import CityChips from "./components/CityChips"
import PageHeader from "./components/PageHeader"
import SearchPanel from "./components/SearchPanel"
import StatusCard from "./components/StatusCard"
import WeatherDetails from "./components/WeatherDetails"
import WeatherHeroCard from "./components/WeatherHeroCard"
import WeatherMetric from "./components/WeatherMetric"
import { getWeatherByCity } from './services/weatherApi'

const popularCities = [
  'Tashkemt',
  'Samarkand',
  'Bukhara',
  'Khiva',
  'Istanbul',
  'Seoul',
]

function App() {

  const [searchValue, setSearchValue] = useState('Tashkent')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    loadWeather('Tashkent')
  }, [])

  async function loadWeather(cityName) {
    const cleanCity = cityName.trim()

    if (!cleanCity) {
      setError('Введите название города.')
      setWeather(null)
      return
    }

    setLoading(true)
    setError('')

    try {
      const weatherData = await getWeatherByCity(cleanCity)
      setWeather(weatherData)
      setSearchValue(weatherData.city)
    } catch (requestError) {
      setError(requestError.message)
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  function handleSubmitSearch(event) {
    event.preventDefault()
    loadWeather(searchValue)
  }

  function handleSelectCity(cityName) {
    setSearchValue(cityName)
    loadWeather(cityName)
  }
  return (
    <>
      <main className="weather-page">
      <section className="app-card">
        <PageHeader />

        <div className="weather-layout">
          <aside className="sidebar-card">
            <SearchPanel
              searchValue={searchValue}
              onChangeSearchValue={setSearchValue}
              onSubmitSearch={handleSubmitSearch}
              loading={loading}
            />

            <CityChips
              cities={popularCities}
              onSelectCity={handleSelectCity}
              loading={loading}
            />
          </aside>

          <section className="content-card">
            {loading && (
              <StatusCard
                title="Загружаем погоду"
                text="Делаем запрос к OpenWeather и обновляем карточки."
              />
            )}

            {!loading && error && (
              <StatusCard title="Не удалось получить данные" text={error} />
            )}

            {!loading && !error && weather && (
              <>
                <WeatherHeroCard weather={weather} />
                <WeatherDetails weather={weather} />
              </>
            )}
          </section>
        </div>
      </section>
    </main>
    </>
  )
}

export default App
