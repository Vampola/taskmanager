import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import moment from 'moment';

const ProjectTable = (state) => (
  <div>
    <ReactTable
      
      data={state.projects}
      columns={[
        {
          Header: "Creative Team Projects",
          columns: [
            {
              Header: "Edit",
              accessor: "id",
              Cell: row => (
                <Link to={`/edit/${row.value}`}>Edit</Link>
              )
            },
            {
              Header: "Date",
              accessor: "dateWorked",
              Cell: row => (
                moment(row.value).format('DD MMM YYYY')
              )
            },
            {
              Header: "In Charge",
              accessor: "assignee"
            },
            {
              Header: "Jira Reference",
              accessor: "jiraRef"
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
              Cell: row => (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#dadada',
                    borderRadius: '2px'
                  }}
                >
                  <div
                    style={{
                      width: `${row.value}%`,
                      height: '100%',
                      backgroundColor: row.value > 66 ? '#85cc00'
                        : row.value > 33 ? '#ffbf00'
                        : '#ff2e00',
                      borderRadius: '2px',
                      transition: 'all .2s ease-out'
                    }}
                  />
                </div>
              )
            },
            {
              Header: "Action",
              accessor: "projectAction"
            }
          ]
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
