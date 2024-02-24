import PropTypes from 'prop-types'

function Error({ error }) {
    return <div className="loader-container">
        <div className="error-msg">
            <span><strong>Error:</strong> {error}</span>
        </div>
    </div>
}

export default Error

Error.propTypes = {
    error: PropTypes.string,
}