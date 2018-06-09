import React from "react";
import { connect } from "react-redux";
import ProjectForm from "../ProjectForm";
import { editProject, removeProject } from "../../actions/projects";

const EditProjectPage = props => {
  return (
    <div className="content-container">
      <p>Edit Project Page of </p>

      <ProjectForm
        project={props.project} //dont forget to pass the props!
        onSubmit={project => {
          //got acces to project object
          props.dispatch(editProject(props.project.id, project));
          props.history.push("/");
        }}
      />
      <button
        onClick={project => {
          props.dispatch(removeProject({id: props.project.id}));
          props.history.push("/");
        }}
      >
        Delete Project
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    project: state.projects.find(
      project => project.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(EditProjectPage);
