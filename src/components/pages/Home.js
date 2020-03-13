import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div class="outer-container" data-test="home-container">
      <h1>Scuba Diving Planner</h1>
      <button data-test="button-container" class="button-normal">
        Go to planner
      </button>
      <div></div>
    </div>
  );
};

export default Home;
