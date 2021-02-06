import React from 'react';

const Search = ({searchValue, changeSearch}) => {
    const search = (event) => {
        event.preventDefault()
  
    }
    const handleSearchChange = (event) => {
        changeSearch(event.target.value)
    }
    
    return (
        <div>
        <h3>Search</h3>
      <div>
          <form onSubmit={search}   >
      Search: <input value={searchValue} onChange={handleSearchChange}></input>
      <button type="submit">Search</button>
      </form>
      </div>
      </div>
    );
};

export default Search;