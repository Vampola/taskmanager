import React from "react";
import { connect } from "react-redux";
import ProjectForm from "../ProjectForm";
import { editProject } from "../../actions/projects"

const EditProjectPage = (props) => {
  return (
    <div className="content-container">
      <p>EditProjectPage of</p>
      
      <ProjectForm
        project={props.project}
        onSubmit={(project) => {
          
          props.dispatch(editProject(props.project.id, project));
          props.history.push('/');          
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    project: state.projects.find((project) => project.id === props.match.params.id)
  };
  
};

export default connect(mapStateToProps)(EditProjectPage);
