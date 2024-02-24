import PropTypes from 'prop-types'

function CurrentConditions({ currentConditions }) {

    const { temp, windspeed, humidity, solarradiation } = currentConditions

    return (
        <section>
            <div className="card">
                <div className="container">
                    <h2 className="heading--secondary">Current Conditions</h2>
                    <ul>
                        <li className="flex list-container">
                            <p>Temperature</p>
                            <strong>{temp}° C</strong>
                        </li>
                        <li className="flex list-container">
                            <p>Wind Speed</p>
                            <strong>{windspeed} m/s</strong>
                        </li>
                        <li className="flex list-container">
                            <p>Humidity</p>
                            <strong>{humidity}%</strong>
                        </li>
                        <li className="flex list-container">
                            <p>Solar Radiation</p>
                            <strong>{solarradiation} W/m²</strong>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default CurrentConditions

CurrentConditions.propTypes = {
    currentConditions: PropTypes.object,
}