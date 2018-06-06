import React from "react";
import ReactDom from "react-dom";
import { Provider } from 'react-redux';
import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore';
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import {addProject} from './actions/projects'

const store = configureStore();

const projectOne = store.dispatch(addProject({ assignee: 'Damir', project: 'Project 1', working_hours:22 }))
const projectTwo = store.dispatch(addProject({ assignee: 'Damir', project: 'Project 2', working_hours:80 }))
// const projectTwo = store.dispatch(addProject({assignee: 'Miljana', project: 'Project 2'}))
// store.dispatch(removeProject({id: projectOne.project.id}))
// store.dispatch(editProject(projectTwo.project.id, {assignee: 'Mira'}));

// store.subscribe(() => {
//   
// })
console.log(store.getState());

const App = (
  <div>
    <Provider store={store}>
      <AppRouter />
    </Provider>    
  </div>
);

ReactDom.render(App, document.getElementById("app"));
