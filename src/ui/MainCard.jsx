import PropTypes from 'prop-types'

function MainCard({ currentConditions, resolvedAddress }) {

    const { temp, conditions, icon } = currentConditions
    return <section>
        <div className="card main-card">
            <div>
                <p>{resolvedAddress}</p>
                <h1>{temp}° C</h1>
                <p>{conditions}</p>
            </div>
            <div className="main__img-container">
                <img src={`assets/${icon}.svg`} alt={`${icon}`} />
            </div>
        </div>
    </section>
}

export default MainCard

MainCard.propTypes = {
    currentConditions: PropTypes.object,
    position: PropTypes.object,
    searchedPosition: PropTypes.string,
    resolvedAddress: PropTypes.string
}