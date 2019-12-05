import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ name, type, placeholder, value, onChange }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className="list__input"
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default InputField;
