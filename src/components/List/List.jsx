import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {addTodoItem, deleteTodoItem, toggleStatusTodoItem} from '../../actions/index'
import ListItem from '../ListItem/ListItem';
import filetrForAll from '../../additionalFunctions/filetrForAll';
import searchItems from '../../additionalFunctions/searchItems';

const List = (props) => {
  const { todoList, deleteItem, onToggleDone, addItem, setCurrentFields, filters } = props;
  const currentTodoList = searchItems(
    filetrForAll(todoList, filters.priority1, filters.status1),
    filters.search1,
  );
  return (
    <div className="col-12">
      <div className="row">
        {currentTodoList.map((item) => {
          return (
            <ListItem
              key={item.id}
              id={item.id}
              priority={item.priority}
              status={item.status}
              title={item.title}
              description={item.description}
              deleteItem={deleteItem}
              onToggleDone={onToggleDone}
              addItem={addItem}
              setCurrentFields={setCurrentFields}
            />
          );
        })}
      </div>
    </div>
  );
};

List.propTypes = {
  todoList: PropTypes.instanceOf(Array).isRequired,
  deleteItem: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  setCurrentFields: PropTypes.func.isRequired,
  filters: PropTypes.instanceOf(Object).isRequired,
}

const mapStateToProps = (state) => ({
  todoList: state.todos.todos,
  filters: state.todos.filters,
});

const mapStateToDispatch = (dispatch) => {
  return {
    addItem: (title, description, priority) => dispatch(addTodoItem(title, description, priority)),
    deleteItem: (id) => dispatch(deleteTodoItem(id)),
    onToggleDone: (id) => dispatch(toggleStatusTodoItem(id)),
  };
}

export default connect(mapStateToProps, mapStateToDispatch)(List);