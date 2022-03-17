import React from 'react'
import "./SearchBar.scss"

const SearchBar = props => {
    const {searchTerm, handleInput} = props;

    return (
      <form className='search-bar'>
        <input type="text" value={searchTerm} onInput={handleInput} placeholder='Search games here'
        className='search-bar__input' />
      </form>
    )
  }



export default SearchBar;