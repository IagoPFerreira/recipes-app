import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';

function CardMealDoneFav({ recepie, index }) {
  const { id, name, image, category, area, doneDate, tags } = recepie;

  const [isCopy, setIsCopy] = useState(null);
  const copyToClipboard = ({ target }) => {
    setIsCopy(true);
    console.log(target);
    const { alt } = target;
    const path = `http://localhost:3000/comidas/${alt}`;
    navigator.clipboard.writeText(path);
  };

  return (
    <main className="main-done-recipe">
      <Link to={ `/comidas/${id}` } className="recipe">
        <img
          data-testid={ `${index}-horizontal-image` }
          src={ image }
          width="50px"
          alt="the food recepe"
          className="recipe-image"
        />
        <p
          data-testid={ `${index}-horizontal-name` }
          className="recipe-title"
        >
          { name }
        </p>
      </Link>
      <p
        data-testid={ `${index}-horizontal-top-text` }
        className="recipe-title"
      >
        { `${area} - ${category}` }
      </p>
      <p className="about-done-recipes">{ area }</p>
      <p
        data-testid={ `${index}-horizontal-done-date` }
        className="about-done-recipes"
      >
        { doneDate }
      </p>
      <p
        data-testid={ `${index}-${tags[0]}-horizontal-tag` }
        className="about-done-recipes"
      >
        { tags[0] }
      </p>
      <p
        data-testid={ `${index}-${tags[1]}-horizontal-tag` }
        className="about-done-recipes"
      >
        {tags[1]}
      </p>
      <button
        src={ shareIcon }
        type="button"
        onClick={ (event) => copyToClipboard(event) }
        className="share-button"
      >
        <img
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
          alt={ id }
        />
      </button>
      {isCopy ? <span>Link copiado!</span> : null}
    </main>
  );
}

CardMealDoneFav.propTypes = {
  index: PropTypes.number.isRequired,
  recepie: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
    area: PropTypes.string,
    doneDate: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default CardMealDoneFav;
