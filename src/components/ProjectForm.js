import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

export default class ProjectForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dateWorked:      props.project ? moment(props.project.dateWorked) : moment(),
      assignee:        props.project ? props.project.assignee : '',
      jiraRef:         props.project ? props.project.jiraRef : '',
      projectName:     props.project ? props.project.projectName : '',
      topic:           props.project ? props.project.topic : '',
      workingHours:    props.project ? (props.project.workingHours).toString() : '',
      projectAction:   props.project ? props.project.projectAction : '',
      calendarFocused: false,
      error: ""
    };     
  } 

  onProjectChange = e => {
    const projectName = e.target.value;
    this.setState(() => ({ projectName }));
  };
  onAssigneeChange = e => {
    const assignee = e.target.value;
    this.setState(() => ({ assignee }));
  };
  onJiraReferenceChange = e => {
    const jiraRef = e.target.value;
    this.setState(() => ({ jiraRef }));
  };
  onTopicChange = e => {
    const topic = e.target.value;
    this.setState(() => ({ topic }));
  };
  onProjectActionChange = e => {
    const projectAction = e.target.value;
    this.setState(() => ({ projectAction }));
  };
  onWorkingHoursChange = e => {
    const workingHours = e.target.value;
    if (workingHours.match(/^[0-9\b]+$/)) {
      this.setState(() => ({ workingHours }));
    }
  };
  onDateChange = dateWorked => {
    if(dateWorked) {
      this.setState(() => ({ dateWorked })); // if statemant  to prevent user  clear value
    }    
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {

    e.preventDefault();

    if( !this.state.projectName ) {
      this.setState( () => ({error: 'Please fill all the required fields'})) 
    } else {
      this.setState( () => ({error: ''}))
      this.props.onSubmit({
        dateWorked: this.state.dateWorked.valueOf(),
        assignee: this.state.assignee,
        jiraRef: this.state.jiraRef,
        project: this.state.projectName,
        topic: this.state.topic,
        workingHours: parseFloat(this.state.workingHours),
        projectAction: this.state.projectAction
      })
    }
  }
  render() {
    return (
      <div>
        {this.state.error  && <p>{this.state.error }</p>}
        <form className="form-content" onSubmit={this.onSubmit}>
          <SingleDatePicker
            date={this.state.dateWorked} // momentPropTypes.momentObj or null
            onDateChange={this.onDateChange} // PropTypes.func.isRequired
            focused={this.state.calendarFocused} // PropTypes.bool
            onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
            id="your_unique_id" // PropTypes.string.isRequired,
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <div className="form-group">
            <input
              className="form-control"
              name="project"
              type="text"
              placeholder="Project name"
              value={this.state.projectName}
              onChange={this.onProjectChange}
            />
            <input
              className="form-control"
              name="in charge"
              type="text"
              placeholder="Name of the person in charge"
              value={this.state.assignee}
              onChange={this.onAssigneeChange}
            />
            <input
              className="form-control"
              name="jira"
              type="text"
              placeholder="Jira reference"
              value={this.state.jiraRef}
              onChange={this.onJiraReferenceChange}
            />
            <input
              className="form-control"
              name="topic"
              type="text"
              placeholder="Topic"
              value={this.state.topic}
              onChange={this.onTopicChange}
            />
            <input
              className="form-control"
              name="hours"
              type="number"
              placeholder="Working Hours"
              value={this.state.workingHours}
              onChange={this.onWorkingHoursChange}
            />
            <textarea
              className="form-control"
              name="action"
              placeholder="What have you done?!"
              value={this.state.projectAction}
              onChange={this.onProjectActionChange}
            />
            <button className="btn btn-primary">Save Project</button>
          </div>
        </form>
      </div>
    );
  }
}
