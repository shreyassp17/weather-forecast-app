import { useEffect } from "react"

//custom hooks
import { useGeolocation } from "./hooks/useGeolocation"

//ui components
import Header from "./ui/Header"
import Footer from "./ui/Footer"
import MainCard from "./ui/MainCard"
import CurrentConditions from "./ui/CurrentConditions"
import WeatherForecast from "./ui/WeatherForecast"
import Loader from "./ui/Loader"
import Error from "./ui/Error"
import Sun from "./ui/Sun"

function App() {

  const { isLoading, error, weatherData, getPosition, getSearchedPosition, searchedPosition, setSearchedPosition } = useGeolocation()
  const { currentConditions, days, resolvedAddress } = weatherData

  useEffect(function () {
    getPosition()
  }, [])

  return (
    <>
      <Header searchedPosition={searchedPosition} setSearchedPosition={setSearchedPosition} getSearchedPosition={getSearchedPosition} getPosition={getPosition} />
      {error ? <Error error={error} /> :
        isLoading ? <Loader /> :
          <main>
            {currentConditions && <MainCard currentConditions={currentConditions} resolvedAddress={resolvedAddress} />}
            {currentConditions && <CurrentConditions currentConditions={currentConditions} />}
            {currentConditions && <Sun currentConditions={currentConditions} />}
            {days && <WeatherForecast days={days} />}
          </main>
      }
      <Footer />
    </>
  )
}

export default App
