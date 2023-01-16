import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ ...user }) => {
  const navigate = useNavigate();

  const handleClick = (user) => {
    navigate("/user-info", { state: { user } });
  };
  return (
    <button className="moreInfo" onClick={() => handleClick(user)}>
      More Details...
    </button>
  );
};

export default Button;
