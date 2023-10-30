import React from "react";
import { useNavigate } from "react-router-dom";

function GoHome() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="my-2 font-semibold text-light"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </div>
  );
}

export default GoHome;
