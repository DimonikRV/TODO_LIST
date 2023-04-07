import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { toggleTask, removeTask } from '../tasks.actions';

const Task = ({ text, id, done, toggleTask, removeTask }) => {
  const taskElem = classNames('list-item', { 'list-item_done': done });
  return (
    <li className={taskElem}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        onChange={() => toggleTask(id)}
        checked={done}
      />
      <span className="list-item__text">{text}</span>
      <button className="list-item__delete-btn" onClick={() => removeTask(id)}></button>
    </li>
  );
};

const mapDispatch = {
  toggleTask,
  removeTask,
};

Task.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  toggleTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(Task);
