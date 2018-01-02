import React, { Component } from 'react'

class BookList extends Component {
	render(){
		return (
            <ol className="books-grid">
            	{this.props.books.map((book, bookIndex) => (
            		<li key={bookIndex}>
						<div className="book">
							<div className="book-top">
								<div className="book-cover" 
									style={{ 
										width: 128, 
										height: 193, 
										backgroundImage: `url(${book.imageLinks.thumbnail})` 
									}}></div>
								<div className="book-shelf-changer">
									<select onChange={(event) => {
                      console.log('teste')

                      if (this.props.onUpdate) this.props.onUpdate(book, event.target.value)
                  }}>
										<option value="none" disabled>Move to...</option>
										{this.props.shelves.map((shelf, shelfIndex) => (
											<option key={shelfIndex} value={shelf.id}>{shelf.name}</option>
										))}								
										<option value="none">None</option>
									</select>
								</div>
							</div>
							<div className="book-title">{book.title}</div>
							<div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
						</div>
					</li>
        		))}		                      
            </ol>
		)
	}
}

export default BookList;