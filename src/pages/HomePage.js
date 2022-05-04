import React from "react";

const HomePage = () => {
  return (
    <div className="container-fluid d-flex align-items-center flex-column navigation-menu">
      <a
        class="btn btn-primary back-home align-self-end shadow-none"
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
      <a
        className="personal personal-link hw-menu-link"
        href="./homework_1/index.html"
      >
        Homework #1
      </a>
      <a
        className="personal personal-link hw-menu-link"
        href="./homework_2/index.html"
      >
        Homework #2
      </a>
      <a className="personal personal-link hw-menu-link" href="#">
        Homework #3 (inactive)
      </a>
      <a className="personal personal-link hw-menu-link" href="#">
        Homework #4 (inactive)
      </a>
      <a className="personal personal-link hw-menu-link" href="#">
        Homework #5 (inactive)
      </a>
      <a className="personal personal-link hw-menu-link" href="#">
        Homework #6 (inactive)
      </a>
      <a className="personal personal-link hw-menu-link" href="#">
        Homework #7 (inactive)
      </a>
      <a
        className="personal personal-link hw-menu-link"
        href="https://youtu.be/dQw4w9WgXcQ"
        target="_blank"
      >
        Homework #8 (inactive)
      </a>
    </div>
  );
};

export default HomePage;
