const requestUrl = 'https://63a6da56f8f3f6d4ab138405.mockapi.io/api/v1/tasks';

export const fetchingTasks = async () => {
  try {
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch');
  }
};

export const postTask = async task => {
  try {
    return await fetch(requestUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
  } catch (error) {
    throw new Error('Failed to post task');
  }
};

export const updateTask = async (id, task) => {
  try {
    return await fetch(`${requestUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
  } catch (error) {
    throw new Error('Failed to update task');
  }
};

export const deleteTask = async id => {
  try {
    return await fetch(`${requestUrl}/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    throw new Error('Failed to delete task');
  }
};
