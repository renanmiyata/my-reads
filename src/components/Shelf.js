import React from 'react'
import Book from './Book'


const Shelf = ({ columnTitle, shelf, books, update }) => {
    console.log(books)
    console.log(shelf)
    
    const myBooks = books.filter(eachBook => eachBook.shelf === shelf)
    return (
        <div className="App">

            <div className="list-books-content">
                <div className="bookshelf">

                    <h2 className="bookshelf-title">{ columnTitle }</h2>

                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {myBooks.map((eachBook) =>
                                <Book
                                    book={eachBook}
                                    key={eachBook.id}
                                    update={update} />)}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shelf