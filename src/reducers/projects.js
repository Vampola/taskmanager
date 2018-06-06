// Project Reducer

const projectsReducerDefaultState = [];

const projectsReducer = ( state = projectsReducerDefaultState , action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [
        ...state, // like concat with better control
        action.project
      ];
    case 'REMOVE_PROJECT':
      return state.filter(( {id} ) => id !== action.id );  // id !== action.id - return true
    case 'EDIT_PROJECT':
      return state.map((project) => {
        if (project.id === action.id) {
          return {
            ...project,
            ...action.updates
          }
        } else {
          return project;
        }
      });
    default:
      return state;
  }
}

export default projectsReducer;