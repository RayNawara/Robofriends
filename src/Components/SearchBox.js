import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  console.log('Searchbox');
  
  return(
    <div className='pa2'>
      <label for="sb"></label>
      <input name="sb"
      className='pa3 ba b--green bg-lightest-blue'
      type='search' 
      placeholder='search robots' 
      onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;