import React from "react";
import { Link } from "react-router-dom";
import Exercise1 from "../components/exercise-1";
import Exercise2 from "../components/exercise-2";
import Exercise3 from "../components/exercise-3";
import Exercise4 from "../components/exercise-4";

const ThirdHomework = () => {
  return (
    <>
      <Link className="btn back-home home-3-hw shadow-none" to="/">
        <i className="bi-arrow-left-short"></i>Back home
      </Link>
      <Exercise1 />
      <Exercise2 />
      <Exercise3 />
      <Exercise4 />
    </>
  );
};

export default ThirdHomework;
