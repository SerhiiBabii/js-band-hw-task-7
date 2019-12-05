import React, { useState } from 'react';
import PropTypes from 'prop-types'
import './ListItem.css'

const ListItem = ({
  id,
  title,
  description,
  priority,
  status,
  deleteItem,
  onToggleDone,
  setCurrentFields,
}) => {
  const [visible, changeVisible] = useState(false);
  return (
    <div className="col-4 p-4">
      <div className={status ? 'done card p-2' : 'card p-2'}>
        <p className="">
          Title:
          {' '}
          {title}
        </p>
        <p className="">
          Description:
          {' '}
          {description}
        </p>
        <div className="">
          <p className="">
          Priority:
            {' '}
            {priority}
          </p>
          <button
            type='button'
            className="btn btn-primary"
            onClick={() => {
              changeVisible(!visible);
            }}
          >
            ...
          </button>
          <div className={visible ? 'visible' : 'invisible'}>
            <button
              type='button'
              className="btn btn-success"
              name="done"
              onClick={() => {
                onToggleDone(id);
              }}
            >
              done
            </button>
            <button type='button' className="btn btn-secondary" name="edit" onClick={() => setCurrentFields(id)}>
              edit
            </button>
            <button type='button' className="btn btn-danger" name="delete" onClick={() => deleteItem(id)}>
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  deleteItem: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  setCurrentFields: PropTypes.func.isRequired,
}

export default ListItem;
