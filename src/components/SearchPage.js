import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Book from './Book';


class SearchPage extends Component {

    render() {

        const { update, books } = this.props

        return (
            <div className="search-books">
            
                <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" />
                    </div>
                </div>

                <div className="search-books-results">
                    <ol className="books-grid">
                        {books.map((books) =>
                            <li key={books.id}>
                                <Book
                                    key={books.id}
                                    book={books}
                                    update={update} />
                            </li>
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage

