import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class Book extends React.Component {

    state = {
        open: false,
    };

    //Abre dialog
    dialogOpen = () => {
        this.setState({ open: true });
    };

    //Fecha dialog
    dialogClose = () => {
        this.setState({ open: false });
    };

    //array de opcoes usados no select
    shelves = [
        { id: 1, value: 'currentlyReading', title: 'Currently Reading' },
        { id: 2, value: 'wantToRead', title: 'Want to Read' },
        { id: 3, value: 'read', title: 'Read' }
    ]


    render() {


        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.dialogClose}
            />
        ];

        let { book, update } = this.props
        console.log(book.shelf)
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"
                        style={{
                            width: 128,
                            height: 192,
                            backgroundImage: `url(${book.imageLinks.thumbnail})`
                        }}>
                    </div>

                    <div className="book-shelf-changer">
                        <select
                            value={ book.shelf }
                            onChange={(event) => update(book, event.target.value)}
                            style={{
                                padding: 10
                            }}>
                            <option value="none" disabled>Move to...</option>
                            {this.shelves.map(eachShelf => <option
                                key={eachShelf.id}
                                value={eachShelf.value}> {eachShelf.title} </option>)}
                                <option value="none" >None</option>
                        </select>
                    </div>
                </div>

                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>

                <div>
                    <RaisedButton label="See More" onClick={this.dialogOpen} />

                    <Dialog
                        title={"Details of " + book.title}
                        actions={actions}
                        modal={true}
                        open={this.state.open}
                        autoScrollBodyContent={true}
                    >
                        <div>
                            <div>
                                <p className='book-details-title'> Description: </p> {book.description}
                            </div>

                            <div>
                                <p> Info Link: </p> <a href={`${book.infoLink}`}>{book.infoLink}</a>
                            </div>
                        </div>
                    </Dialog>
                </div>
            </div>
        )
    }
}

export default Book