import React, { useContext } from 'react';
import SearchbarContext from '../contexts/SearchbarContext';

function FilterButtons() {
  const { searchCategory, setSearchCategory, categories } = useContext(SearchbarContext);

  const handleFilter = ({ value }) => {
    if (searchCategory === value) {
      setSearchCategory('list');
    } else { setSearchCategory(value); }
  };

  return (
    <section>
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => setSearchCategory('list') }
      >
        All
      </button>
      {categories && categories.map(({ strCategory }, index) => (
        <button
          key={ index }
          type="button"
          value={ strCategory }
          data-testid={ `${strCategory}-category-filter` }
          onClick={ (e) => handleFilter(e.target) }
        >
          { strCategory }
        </button>
      ))}
    </section>
  );
}

export default FilterButtons;
