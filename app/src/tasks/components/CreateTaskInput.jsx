import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { inputTextSelector } from '../tasks.selectors';
import * as tasksActions from '../tasks.actions';

const CreateTaskInput = ({ text, handleTextChange, handleCreateTask }) => {
  return (
    <div className="create-task">
      <input className="create-task__input" type="text" value={text} onChange={handleTextChange} />
      <button className="btn create-task__btn" onClick={() => handleCreateTask(text)}>
        Create
      </button>
    </div>
  );
};

const mapState = state => {
  return {
    text: inputTextSelector(state),
  };
};
const mapDispatch = {
  handleTextChange: tasksActions.textChange,
  handleCreateTask: tasksActions.createTask,
};

CreateTaskInput.propTypes = {
  text: PropTypes.string,
  handleTextChange: PropTypes.func.isRequired,
  handleCreateTask: PropTypes.func.isRequired,
};
CreateTaskInput.defaultValue = {
  text: '',
};

export default connect(mapState, mapDispatch)(CreateTaskInput);
