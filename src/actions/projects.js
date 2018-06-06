import uuid from  'uuid';

// ADD_PROJECT
export const addProject = (
    { 
      date_worked = undefined,
      assignee = '',
      jira_ref = '',
      project = '',
      topic = 'vv',
      working_hours = 0,
      project_action = '' 
    } = {}
  ) => ({
    type: 'ADD_PROJECT',
    project: {
      id: uuid(),
      date_worked,
      assignee,
      jira_ref,
      project,
      topic,
      working_hours,
      project_action
    }
  }); 
  
  // REMOVE_PROJECT
  export const removeProject = ( { id } = {} ) => ({
    type: 'REMOVE_PROJECT',
    id
  });
  
  // EDIT_PROJECT
  export const editProject = (id, updates) => ({
    type: 'EDIT_PROJECT',
    id,
    updates
  })