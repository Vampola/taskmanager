export default projects => {  
    return projects
    .map(project => project.workingHours)
    .reduce((sum, value) => {
      return sum + value;
    }, 0);  
};
