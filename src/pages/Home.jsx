import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <ul>
        <li>
          <NavLink to="login">Login</NavLink>
        </li>
        <li>
          <NavLink to="dashboard">Dashboard</NavLink>
        </li>
      </ul>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
        praesentium, totam quae dolore itaque sint excepturi facilis eos quam
        aut, nihil autem dolorum quo sequi iste, et est. Natus, ratione.
      </p>
    </div>
  );
};

export default Home;
