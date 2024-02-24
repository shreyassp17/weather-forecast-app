import PropTypes from 'prop-types'

function WeatherForecast({ days }) {

    return <section>
        <div className="card">
            <div className="container">
                <h2 className="heading--secondary">10-Day Weather Forecast</h2>
                <ul>
                    {days.slice(0, 10).map((day, i) => {
                        return <li key={i} className="flex list-container list-container-mobile">
                            <p className="list-column-1">{i === 0 ? "Today" : day.datetime}</p>
                            <div className="flex flex-start list-column-2" >
                                <img width={25} src={`./assets/${day.icon}.svg`} alt={`${day.icon}`} />
                                <p>{day.conditions}</p>
                            </div>
                            <p className="list-column-1 align-right"><strong>{day.tempmax}°</strong>&nbsp;&nbsp;{day.tempmin}°</p>
                        </li>
                    })
                    }

                </ul>
            </div>
        </div>
    </section>
}

export default WeatherForecast

WeatherForecast.propTypes = {
    days: PropTypes.array,
}