import React from "react";
import { useNavigate } from "react-router-dom";

const Appbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>This will be seen on all routes</div>
      <button
        onClick={() => {
          // window.location.href = "/dashboard"; not right way because it whole reloads the page and we fetch the bundle again
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>
      <button
        onClick={() => {
          // window.location.href = "/"; not right way because it whole reloads the page and we fetch the bundle again
          navigate("/");
        }}
      >
        Landing
      </button>
    </div>
  );
};

export default Appbar;
