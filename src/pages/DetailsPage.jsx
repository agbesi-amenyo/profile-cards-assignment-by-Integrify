import React from "react";
import { useNavigate } from "react-router-dom";
import UserInfo from "../components/UserInfo";

const DetailsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="justify-content-center max-w-screen md:px-20 mx-auto">
      <div
        className="back"
        onClick={() => {
          navigate(-1);
        }}
      >
        <span>&#8678;</span>
        <span>Back</span>
      </div>

      <UserInfo />
    </div>
  );
};

export default DetailsPage;
