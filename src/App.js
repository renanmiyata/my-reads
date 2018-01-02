import React from 'react'
import './App.css'
import * as booksAPI from './BooksAPI'
import SearchPage from './components/SearchPage'
import ListOfBooks from './components/ListOfBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    myBooks: []
  }

  componentWillMount() {
    this.getAll()
  }

  //metodo responsável por buscar na API todos os livros cadastrados
  getAll() {
    booksAPI.getAll().then((booksApi) => {
      this.setState({ books: booksApi })
    })
  }

  /*metodo responsável por receber o livro e alterar a sua prateleira. 
  Caso o parametro recebido seja none, não haverá mudança de prateleira*/
  update(book, shelf) {
    if (shelf !== 'none') {
      booksAPI.update(book, shelf).then(this.getAll())
    }
  }

  render() {

    const { books } = this.state
    return (
      <div className="app">

        <Route exact path='/' render={() =>
          <ListOfBooks
            books={books}
            update={(book, shelf) => this.update(book, shelf)}
          />}>
        </Route>

        <Route exact path='/search' render={() =>
          <SearchPage
            books={books}
            update={(book, shelf) => this.update(book, shelf)}
          />}>
        </Route>
        
      </div>
    )
  }
}

export default BooksApp
