import React from "react";

const HomePage = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center flex-column navigation-menu">
      <h1>La Moară - Cognizant Softvision Course</h1>
      <span className="personal">
        By&nbsp;
        <a
          className="personal personal-link"
          href="https://gabrielmuresan.site"
          target="_blank"
        >
          Gabriel Muresan
        </a>
      </span>
      <h2 className="homework-heading">Homework navigation menu</h2>
      <a className="personal personal-link" href="./homework_1/index.html">
        Homework #1
      </a>
      <a className="personal personal-link" href="#">
        Homework #2 (inactive)
      </a>
      <a className="personal personal-link" href="#">
        Homework #3 (inactive)
      </a>
      <a className="personal personal-link" href="#">
        Homework #4 (inactive)
      </a>
      <a className="personal personal-link" href="#">
        Homework #5 (inactive)
      </a>
      <a className="personal personal-link" href="#">
        Homework #6 (inactive)
      </a>
      <a className="personal personal-link" href="#">
        Homework #7 (inactive)
      </a>
      <a className="personal personal-link" href="#">
        Homework #8 (inactive)
      </a>
    </div>
  );
};

export default HomePage;
