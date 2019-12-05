/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {addTodoItem, hideModalArea, saveEditedTodoItem, changeModalField} from '../../actions'

import './ModalItem.css';

const ModalItem = ({
  addItem1,
  modalShow1,
  currentId1,
  hideModalArea1,
  saveEditedItem,
  changeField,
  modalFields,
}) => {
  const {modalTitle, modalDescription, modalPriority} = modalFields;
  return (
    <section className={modalShow1 ? 'visible' : 'invisible'}>
      <div className="modal__fade" onClick={hideModalArea1} />
      <div className="modal__form">
        <div className="modal__part">
          <label htmlFor="title">
            Title
            <input
              value={modalTitle}
              onChange={changeField}
              type="text"
              name="modalTitle"
              id="title"
              placeholder="Title"
            />
          </label>
        </div>
        <div className="modal__part">
          <label htmlFor="description">
            Description
            <textarea
              value={modalDescription}
              onChange={changeField}
              name="modalDescription"
              id="description"
              cols="22"
              rows="2"
              placeholder="Description"
            />
          </label>
        </div>
        <div className="modal__part">
          <label htmlFor="priority">
            Priority
            <select value={modalPriority} onChange={changeField} name="modalPriority" id="priority">
              <option value="high">high</option>
              <option value="normal">normal</option>
              <option value="low">low</option>
            </select>
          </label>
        </div>
        <div className="modal__buttons">
          <button type="button" className="btn btn-warning" onClick={hideModalArea1}>
            Cancel
          </button>
          <button
            type="button"
            className={!currentId1 ? "btn btn-success" : "d-none"}
            onClick={() => addItem1(modalTitle, modalDescription, modalPriority)}
          >
            Save
          </button>
          <button
            type="button"
            className={currentId1 ? "btn btn-success" : "d-none"}
            onClick={() => saveEditedItem(modalTitle, modalDescription, modalPriority, currentId1)}
          >
            Save
          </button>
        </div>
      </div>
    </section>
  );
};

ModalItem.defaultProps = {
  currentId1: '',
}

ModalItem.propTypes = {
  addItem1: PropTypes.func.isRequired,
  modalShow1: PropTypes.bool.isRequired,
  currentId1: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  hideModalArea1: PropTypes.func.isRequired,
  saveEditedItem: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  modalFields: PropTypes.instanceOf(Object).isRequired,
}

const mapStateToProps = (state) => {
  return {
    modalShow1: state.todos.modalShow,
    currentId1: state.todos.currentId,
    modalFields: state.todos.modalFields,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem1: (title, description, priority) => dispatch(addTodoItem(title, description, priority)),
    hideModalArea1: () => dispatch(hideModalArea()),
    saveEditedItem: (title, description, priority, id) => dispatch(saveEditedTodoItem(title, description, priority, id)),
    changeField: (e) => dispatch(changeModalField(e.target.name, e.target.value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalItem);
