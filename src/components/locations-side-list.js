import React, { Component } from 'react';

class App extends Component {
    state = {
        query : ''
    }
    /*  UpdateQuery kicks off the sequence when a user enters text into the input search box.
    *   Query state is immediately updated with input text. Any Input text in this state also changes UI to show result of search.
    *   Providing the query is not empty it is passed over to the searchQuery function which looks for a match in the locations state.
    *   If the text is empty then the removeLocations function conversely re-adds all the original fetch locations to the searchResult state.
    */
    updateQuery = (query) => {
        this.setState({ query: query})
        if (query !== '') {
            this.searchQuery(query);
        } else {
            this.props.removeLocations(this.props.locations)
        }
    }


    /*  searchQuery returns the result (if any) of a query/search.
    *   If a search result is returned, searchResult state is immediately updated with locations.
    *   Any locations in searchResult state also changes UI map markers and search listings.
    */
    searchQuery(query) {
        const match = new RegExp(query, 'i')
        let results = this.props.locations.filter((location) => match.test(location.name) || match.test(location.categories[0].name))
        this.props.removeLocations(results)
    }

    render() {
        const { searchResult } = this.props
        const { query } = this.state

        return (
            <nav className={this.props.sideHidden ? "nav" : "nav open"}>
                <div className="foursquare"></div>
                <div className="search-locations">
                <input
                    id="search"
                    type='text'
                    aria-describedby="Search by location name or type"
                    placeholder="Search by location name or type"
                    value={query}
                    onChange={(event) => this.updateQuery(event.target.value)}
                />
                 {/* If query state has value (text search input), show the query and check how many (if any) results/locations are returned*/}
                 {query && (
                    <div className='showing-locations'>
                        <span>Search for "{query}"<br/>shows {searchResult.length > 0 ? searchResult.length : "0"} results</span>
                    </div>
                )}
                </div>
                <ul className="locations-list"
                    onClick={(event) => this.props.listClicked(event.target)}>
                    {/* Loop through each location (if any) and display results/locations*/}
                    {searchResult.map((location) => (
                        <li
                            key={location.id}
                            role="button"
                            tabIndex="0"
                            className="location-item"
                            id={location.id}>
                            <div className="location-name">{location.name}</div>
                            <div className="location-type">{location.categories[0].name}</div>
                        </li>
                    ))}
                </ul>
            </nav>
        )
    }
}
export default App;
