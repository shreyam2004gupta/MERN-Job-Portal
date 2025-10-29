import React from 'react'
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div style= {{ textAlign: "center", padding: "20px", margin: "20px" }}>
      <p>
        {" "}
        2025 My-Project.<span> 
            <Link to = {"/Rights"}>©All Right Reserved </Link></span>
      </p>
      <p>
        {" "}
        <a href="https://in.linkedin.com/in/shreyam-gupta-2b6858279">
          {" "}
          By-Shreyam Gupta
        </a>
      </p>
      <p>
        <Link to={"/Terms"}> Terms and Conditions </Link>
      </p>
    </div>
  );
}

export default Footer
