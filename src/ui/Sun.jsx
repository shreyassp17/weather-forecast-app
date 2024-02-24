import PropTypes from 'prop-types'

function Sun({ currentConditions }) {

    const { sunrise, sunset } = currentConditions

    return <section>
        <div className="card">
            <div className="container">
                <h2 className="heading--secondary">Sun</h2>
                <ul>
                    <li className="flex list-container">
                        <p>Rise</p>
                        <strong>{sunrise.slice(0, -3)}</strong>
                    </li>
                    <li className="flex list-container">
                        <p>Set</p>
                        <strong>{sunset.slice(0, -3)}</strong>
                    </li>
                </ul>
            </div>
        </div>
    </section>
}

export default Sun

Sun.propTypes = {
    currentConditions: PropTypes.object,
}