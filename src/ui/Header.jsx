import PropTypes from 'prop-types'

function Header({ searchedPosition, setSearchedPosition, getSearchedPosition, getPosition }) {
    return (
        <header>
            <div className="nav-container">
                <div className="flex">
                    <img width={50} src="/assets/clear-day.svg" alt="icon" />
                    <h1 className="heading--primary">Weather App</h1>
                </div>
                <div className="flex">
                    <div className="relative-pos">
                        <input
                            className="search-input-field"
                            type="text"
                            placeholder="Search Location"
                            value={searchedPosition}
                            onChange={(e) => setSearchedPosition(e.target.value)}
                        />
                        <img
                            title='Search'
                            onClick={searchedPosition ? (async () => await getSearchedPosition(searchedPosition)) : () => { }}
                            className="search-icon"
                            src="assets/search.png"
                            alt="Search Icon" />
                    </div>
                    <button title='Current Location' onClick={getPosition}>
                        <img
                            className="location-icon"
                            src="assets/location.png"
                            alt="Current location" />
                    </button>
                </div>
            </div>
        </header >
    )
}

export default Header;

Header.propTypes = {
    setSearchedPosition: PropTypes.func,
    getPosition: PropTypes.func,
    getSearchedPosition: PropTypes.func,
    searchedPosition: PropTypes.string,
}