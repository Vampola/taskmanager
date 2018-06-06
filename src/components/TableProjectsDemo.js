import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { connect } from "react-redux";



const ProjectTable = (state) => (
  <div>
    <ReactTable
      data={state.projects}
      columns={[
        {
          Header: "Creative Team Projects",
          columns: [
            {
              Header: "Date",
              accessor: "date_worked"
            },
            {
              Header: "In Charge",
              accessor: "assignee"
            },
            {
              Header: "Jira Reference",
              accessor: "jira_ref"
            },
            {
              Header: "Project",
              accessor: "project"
            },
            {
              Header: "Topic",
              accessor: "topic"
            },
            {
              Header: "Working Hours",
              accessor: "working_hours"
            },
            {
              Header: "Action",
              accessor: "project_action"
            }
          ]
        }
      ]}
      defaultPageSize={10}
      className="-striped -highlight"
    />
  </div>
);

// Higher order component

// const ConnectedProjectTable = connect((state) => {
//   return {
//     projects: state.projects
//   }
// })(ProjectTable);

// export default ConnectedProjectTable;

//Better usage

const mapStateToProps = state => {
  return {
    projects: state.projects
  };
};

export default connect(mapStateToProps)(ProjectTable);
