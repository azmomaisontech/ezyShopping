import React from "react";
import "../styles/NavBar.css";

const NavBar: React.FC = () => {
  return (
    <nav>
      <div className="container">
        <h2>
          ezy<span className="logo">S</span>
          hopping
        </h2>
      </div>
    </nav>
  );
};

export default NavBar;
