import React from 'react'
import { Link } from 'react-router-dom'

import { LibraryPropType } from '../validations/props'
import Shelf from './Shelf'
import shelfType from '../enums/shelfType'
import BookPlaceholders from './BookPlaceholders'

const Library = ({ books, loading, onChangeShelf }) => {
  const shelves = Object.keys(shelfType)
    .filter(type => shelfType[type].isShelf)
    .map(type => {
      let name = shelfType[type].text
      let booksInShelf = books.filter(book => book.shelf === type)
      return { type, name, booksInShelf }
    })
  
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {loading && 
            <BookPlaceholders showTitle={true} />
          }
          {!loading && shelves.map(shelf => (
            <Shelf 
              key={shelf.type} 
              title={shelf.name} 
              books={shelf.booksInShelf}
              onChangeShelf={onChangeShelf} />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}

Library.propTypes = LibraryPropType

export default Library
