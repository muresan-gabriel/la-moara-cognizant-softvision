import React from "react";
import HomeworkList from "../components/homework-list.js";

const HomePage = () => {
  return (
    <div className="container-fluid d-flex align-items-center flex-column navigation-menu">
      <a
        className="btn btn-primary back-home align-self-end shadow-none"
        href="https://github.com/muresan-gabriel/la-moara-cognizant-softvision"
      >
        Back to GitHub Repository
      </a>
      <h1 className="pt-5">La Moară - Cognizant Softvision Course</h1>
      <span className="personal">
        Live homework previews by&nbsp;
        <a
          className="personal personal-link"
          href="https://gabrielmuresan.site"
          target="_blank"
        >
          Gabriel Muresan
        </a>
      </span>
      <div className="container-fluid d-flex justify-content-center">
        <HomeworkList></HomeworkList>
      </div>
    </div>
  );
};

export default HomePage;
