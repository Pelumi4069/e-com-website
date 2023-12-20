import React from 'react';
import PropTypes from 'prop-types';

const CartCount = ({ size }) => {
  return (
    <div className={`absolute bg-red-600 text-white ${size} -right-3 -top-1 rounded-full grid place-items-center`}>
      0
    </div>
  );
};

CartCount.propTypes = {
  size: PropTypes.string.isRequired,
};

export default CartCount;

