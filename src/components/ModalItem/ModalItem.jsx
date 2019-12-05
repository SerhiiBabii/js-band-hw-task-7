/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {addTodoItem, hideModalArea} from '../../actions'

import './ModalItem.css';

const ModalItem = ({
  addItem1,
  modalShow1,
  currentId,
  currentTitle,
  currentDescription,
  currentPriority,
  handleSelect,
  hideModalArea1,
}) => {
  return (
    <section className={modalShow1 ? 'visible' : 'invisible'}>
      <div className="modal__fade" onClick={hideModalArea1} />
      <div className="modal__form">
        <div className="modal__part">
          <label htmlFor="title">
            Title
            <input
              value={currentTitle}
              onChange={handleSelect}
              type="text"
              name="currentTitle"
              id="title"
              placeholder="Title"
            />
          </label>
        </div>
        <div className="modal__part">
          <label htmlFor="description">
            Description
            <textarea
              value={currentDescription}
              onChange={handleSelect}
              name="currentDescription"
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
            <select value={currentPriority} onChange={handleSelect} name="currentPriority" id="priority">
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
            className="btn btn-success"
            onClick={() => addItem1(currentTitle, currentDescription, currentPriority, currentId)}
          >
            Save
          </button>
        </div>
      </div>
    </section>
  );
};

ModalItem.propTypes = {
  addItem1: PropTypes.func.isRequired,
  modalShow1: PropTypes.bool.isRequired,
  currentId: PropTypes.string.isRequired,
  currentTitle: PropTypes.string.isRequired,
  currentDescription: PropTypes.string.isRequired,
  currentPriority: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
  hideModalArea1: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    modalShow1: state.todos.modalShow,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem1: (title, description, priority) => dispatch(addTodoItem(title, description, priority)),
    hideModalArea1: () => dispatch(hideModalArea()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalItem);
