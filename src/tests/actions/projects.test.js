import { addProject, removeProject, editProject } from "../../actions/projects";

test("should setup remove project action object", () => {
  const action = removeProject({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_PROJECT",
    id: "123abc"
  });
});

test("should setup edit project action object", () => {
  const action = editProject("123abc", { projecName: "New value" });
  expect(action).toEqual({
    type: "EDIT_PROJECT",
    id: "123abc",
    updates: {
      projecName: "New value"
    }
  });
});

test("should setup add project with provided values", () => {
  const projectData = {
    dateWorked: 0,
    assignee: "Default Assignee",
    jiraRef: "Default Jira Ref",
    projectName: "Default Project Name",
    topic: "Default Topic",
    workingHours: 0,
    projectAction: "Default Action"
  };
  const action = addProject(projectData);
  expect(action).toEqual({
    type: "ADD_PROJECT",
    project: {
      ...projectData,
      id: expect.any(String)
    }
  });
});

test("should setup add project with default values", () => {
    
    const action = addProject();
    expect(action).toEqual({
      type: "ADD_PROJECT",
      project: {
        id: expect.any(String),
        dateWorked: 0,
        assignee: "Default Assignee",
        jiraRef: "Default Jira Ref",
        projectName: "Default Project Name",
        topic: "Default Topic",
        workingHours: 0,
        projectAction: "Default Action"
      }
    });
  });
