import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'


const ListOfBooks = ({ books, update }) => {

    //array de colunas com todas as prateleiras que serão usadas no projeto
    const columns = [
        { title: 'Want to Read', shelf: 'wantToRead', books },
        { title: 'Currently Reading', shelf: 'currentlyReading', books },
        { title: 'Read', shelf: 'read', books }
    ]

    return (
        <div>

            <div className="list-books-title">
                <h1> My Reads </h1>
            </div>

            <div className="list-books">
                {columns.map(eachColumn => (
                    <Shelf
                        key={eachColumn.title}
                        columnTitle={eachColumn.title}
                        shelf={eachColumn.shelf}
                        books={eachColumn.books}
                        update={update}
                    />
                ))}

                <div className="open-search">
                    <Link to='/Search'> CLose</Link>
                </div>
            </div>
            
        </div>
    )
}


export default ListOfBooks