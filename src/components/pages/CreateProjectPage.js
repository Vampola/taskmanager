import React from "react";
import { connect } from 'react-redux';
import ProjectForm from "../ProjectForm";
import { addProject } from "../../actions/projects"

const CreateProjectPage = (props) => (
  <div className="content-container">
    <h3>Create Project Page</h3>
    <ProjectForm 
      onSubmit={(project)=> {
        props.dispatch(addProject(project));
        props.history.push('/');
      }} 
    />
  </div>
);

export default connect()(CreateProjectPage);
