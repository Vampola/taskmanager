import React from "react";
import ReactDom from "react-dom";
import { Provider } from 'react-redux';
import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore';
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import {addProject} from './actions/projects'

const store = configureStore();

const projectOne = store.dispatch(addProject({ assignee: 'Damir', jiraRef: 'SMD-879', projectName: 'Project 1', workingHours:3 }))
const projectTwo = store.dispatch(addProject({ assignee: 'Damir', jiraRef: 'SMD-880', projectName: 'Project 2', workingHours:5 }))
// const projectTwo = store.dispatch(addProject({assignee: 'Miljana', project: 'Project 2'}))
// store.dispatch(removeProject({id: projectOne.project.id}))
// store.dispatch(editProject(projectTwo.project.id, {assignee: 'Mira'}));

// store.subscribe(() => {
//   
// })

const App = (
  <div>
    <Provider store={store}>
      <AppRouter />
    </Provider>    
  </div>
);

ReactDom.render(App, document.getElementById("app"));
