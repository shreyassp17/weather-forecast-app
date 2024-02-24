import { useState } from "react";

export function useGeolocation() {

    const [isLoading, setIsLoading] = useState(true);
    const [weatherData, setWeatherData] = useState({})
    const [error, setError] = useState(null);
    const [searchedPosition, setSearchedPosition] = useState("")
    const API_KEY = 'SFTL4MJT9C58K8KKUP8TSNAVT'

    //get current location
    function getPosition() {
        if (!navigator.geolocation)
            return setError("Your browser does not support geolocation");

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    //get searched location
    async function getSearchedPosition(pos) {
        const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${pos}?unitGroup=metric&include=days%2Ccurrent&key=${API_KEY}&contentType=json`
        setIsLoading(true)
        try {
            let data = await fetch(URL)
            data = await data.json()
            setWeatherData(data)
        }
        catch (err) {
            setError("Please enter a valid location!");
            setSearchedPosition("")
            setWeatherData({})
        } finally {
            setIsLoading(false)
        }
    }

    async function onSuccess(pos) {
        const { latitude, longitude } = pos.coords
        const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude}%2C${longitude}?unitGroup=metric&include=days%2Ccurrent&key=${API_KEY}&contentType=json`
        setIsLoading(true)
        try {
            let data = await fetch(URL)
            data = await data.json()
            setWeatherData(data)
        } catch (err) {
            setError("Something went wrong!");
            setWeatherData({})
        } finally {
            setIsLoading(false);
            setSearchedPosition("")
        }
    }

    function onError(error) {
        setError(error.message);
        setIsLoading(false);
        setSearchedPosition("")
    }

    return { isLoading, error, weatherData, searchedPosition, setSearchedPosition, getPosition, getSearchedPosition }

}