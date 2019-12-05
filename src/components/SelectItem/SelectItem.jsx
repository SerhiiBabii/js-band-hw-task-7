import React from 'react';
import PropTypes from 'prop-types';

const SelectItem = ({ value }) => {
  return <option value={value}>{value}</option>;
};

SelectItem.propTypes = {
  value: PropTypes.string.isRequired,
}

export default SelectItem;
