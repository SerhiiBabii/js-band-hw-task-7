/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types'

import './ModalItem.css';

const ModalItem = ({
  addItem,
  clearModalField,
  modalShow,
  currentId,
  currentTitle,
  currentDescription,
  currentPriority,
  handleSelect,
}) => {
  return (
    <section className={modalShow ? 'visible' : 'invisible'}>
      <div className="modal__fade" onClick={clearModalField} />
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
          <button type="button" className="btn btn-warning" onClick={clearModalField}>
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => addItem(currentTitle, currentDescription, currentPriority, currentId)}
          >
            Save
          </button>
        </div>
      </div>
    </section>
  );
};

ModalItem.defaultProps = {
  currentId: '',
}

ModalItem.propTypes = {
  addItem: PropTypes.func.isRequired,
  clearModalField: PropTypes.func.isRequired,
  modalShow: PropTypes.bool.isRequired,
  currentId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  currentTitle: PropTypes.string.isRequired,
  currentDescription: PropTypes.string.isRequired,
  currentPriority: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
}

export default ModalItem;
