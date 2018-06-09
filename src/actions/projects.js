import uuid from  'uuid';

// ADD_PROJECT
export const addProject = (
    { 
      dateWorked = 0,
      assignee = 'Default Assignee',
      jiraRef = 'Default Jira Ref',
      projectName = 'Default Project Name',
      topic = 'Default Topic',
      workingHours = 0,
      projectAction = 'Default Action' 
    } = {}
  ) => ({
    type: 'ADD_PROJECT',
    project: {
      id: uuid(),
      dateWorked,
      assignee,
      jiraRef,
      projectName,
      topic,
      workingHours,
      projectAction
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