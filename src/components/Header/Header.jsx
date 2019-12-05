import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {showFilteredTodoItems, showModalArea} from '../../actions/index'
import SelectField from '../SelectField/SelectField';
import InputField from '../InputField/InputField';

const Header = ({ search1, status1, priority1, handleSelect1, showModalArea1 }) => {
  return (
    <div className="input-group">
      <hr />
      <InputField value={search1} onChange={handleSelect1} name="search1" type="text" placeholder="search by title 1" />
      <SelectField value={status1} onChange={handleSelect1} name="status1" items={['all', 'open', 'done']} />
      <SelectField value={priority1} onChange={handleSelect1} name="priority1" items={['all', 'high', 'normal', 'low']} />
      <button type="button" className="btn btn-primary" onClick={showModalArea1}>
        Create
      </button>
      <hr />
    </div>
  );
};

Header.propTypes = {
  search1: PropTypes.string.isRequired,
  status1: PropTypes.string.isRequired,
  priority1: PropTypes.string.isRequired,
  handleSelect1: PropTypes.func.isRequired,
  showModalArea1: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    search1: state.todos.filters.search1,
    status1: state.todos.filters.status1,
    priority1: state.todos.filters.priority1,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSelect1: (e) => dispatch(showFilteredTodoItems(e.target.name, e.target.value)),
    showModalArea1: () => dispatch(showModalArea()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
