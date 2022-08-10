import React from 'react';
import PropTypes from 'prop-types';
import Star from './star/star';

function Stars({ count }) {
  if (!count || typeof(count) !== 'number' || count < 1 || count > 5) {
    return null;
  }

  const stars = Array.from({ length: count }, (item, i) => i);
  return (
    <ul className='card-body-stars'>{stars.map(star => <Star key={star} />)}</ul>
  );
}

Stars.propTypes = {
  count: PropTypes.number.isRequired
};

export default Stars;