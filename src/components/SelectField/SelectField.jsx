import React from 'react';
import PropTypes from 'prop-types';
import SelectItem from '../SelectItem/SelectItem';

const SelectField = ({ name, items, onChange, value }) => {
  return (
    <select className="list" name={name} value={value} onChange={onChange}>
      {items.map((item) => {
        return <SelectItem key={item} value={item} />;
      })}
    </select>
  );
};

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.instanceOf(Array).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default SelectField;
