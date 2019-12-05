import React from 'react';
import PropTypes from 'prop-types';
import SelectField from '../SelectField/SelectField';
import InputField from '../InputField/InputField';

const Header = ({ search, status, priority, handleSelect, showModalArea }) => {
  return (
    <div className="input-group">
      <hr />
      <InputField value={search} onChange={handleSelect} name="search" type="text" placeholder="search by title" />
      <SelectField value={status} onChange={handleSelect} name="status" items={['all', 'open', 'done']} />
      <SelectField value={priority} onChange={handleSelect} name="priority" items={['all', 'high', 'normal', 'low']} />
      <button type="button" className="btn btn-primary" onClick={showModalArea}>
        Create
      </button>
      <hr />
    </div>
  );
};

Header.propTypes = {
  search: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
  showModalArea: PropTypes.func.isRequired,
}

export default Header;
