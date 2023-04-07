import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { tasksListSelector } from '../tasks.selectors';
import { getTasks } from '../tasks.actions';
import Task from './Task';

const TasksList = ({ tasks, getTasks }) => {
  useEffect(() => {
    (async () => {
      await getTasks();
    })();
  }, [getTasks]);

  if (!tasks) {
    return null;
  }

  return (
    <ul className="list">
      {tasks.map(task => (
        <Task key={task.id} {...task} />
      ))}
    </ul>
  );
};

const mapState = state => {
  return {
    tasks: tasksListSelector(state),
  };
};
const mapDispatch = {
  getTasks,
};

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()),
  getTasks: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(TasksList);
