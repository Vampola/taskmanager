import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";

export const ProjectsSummary = ({ projectCount, projecTotal }) => {
  const projectWord = projectCount === 1 ? "project" : "projects";
  const formattedWorkingHoursTotal = numeral(projecTotal)
    .multiply(60)
    .format("00:00:00");
  return (
    <div>
      <h1>
        There are {projectCount} {projectWord} totalling{" "}
        {formattedWorkingHoursTotal} Hours
      </h1>
    </div>
  );
};

const mapStateToProps = state => {
    return {

    }
};
export default connect(mapStateToProps)(ProjectsSummary);
