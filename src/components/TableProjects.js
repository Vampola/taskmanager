import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";

const ProjectTable = state => (
  <div className="tableProjects">
    <ReactTable
      data={state.projects}
      noDataText="Oh Noes!"
      
      columns={[
        {
          Header: "Date",
          accessor: "dateWorked",
          Cell: row => moment(row.value).format("DD MMM YYYY")
        },
        {
          Header: "In Charge",
          accessor: "assignee"
        },
        {
          Header: "Jira Reference",
          accessor: "jiraRef",
          Cell: row => (
            <Link className="linkTable" to={`https://jira.transactortech.co.nz/browse/${row.value}`}>
              {row.value}
            </Link>
          )
        },
        {
          Header: "Project",
          accessor: "projectName"
        },
        {
          Header: "Topic",
          accessor: "topic"
        },
        {
          Header: "Working Hours",
          accessor: "workingHours",
          Cell: row => <div>{row.value} Hours</div>
          
        },
        {
          Header: "Action",
          accessor: "projectAction"
        },
        {
          accessor: "id",
          maxWidth: 50,
          Cell: row => (
            <Link className="linkTable" to={`/edit/${row.value}`}>
              Edit
            </Link>
          )
        }
      ]}
      defaultPageSize={10}
      className="-striped -highlight"
    />
  </div>
);

const mapStateToProps = state => {
  return {
    projects: state.projects
  };
};

export default connect(mapStateToProps)(ProjectTable);
