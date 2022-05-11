import React from "react";
import { Link } from "react-router-dom";

const HomeworkList = () => {
  return (
    <div className="d-flex align-items-center flex-column">
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
      <Link
        className="personal personal-link hw-menu-link"
        to="/third-homework"
      >
        Homework #3
      </Link>
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

export default HomeworkList;
