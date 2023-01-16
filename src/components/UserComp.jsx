import React from "react";
import { useNavigate } from "react-router-dom";

const UserComp = ({ ...user }) => {
  const navigate = useNavigate();

  const handleClick = (user) => {
    navigate("/user-info", { state: { user } });
    let view = JSON.parse(localStorage.getItem("lastViewed") || "[]");
    if (view.length === 3) view.shift();
    view.push(user);
    localStorage.setItem("lastViewed", JSON.stringify(view));
  };
  return (
    <div className="frame">
      <div className="center">
        <div classNmae="profile">
          <div className="image">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="initial">
              <span>{user?.name?.split(" ")[0]?.slice(0, 1)}</span>
              <span>{user?.name?.split(" ")[1]?.slice(0, 1)}</span>
            </div>
          </div>
          <div className="name">{user?.name}</div>
          <div className="username">Username: {user?.username}</div>
          <div className="actions">
            <button className="moreInfo" onClick={() => handleClick(user)}>
              More Details...
            </button>
          </div>

        </div>
        <div className="stats">
            <div className="box">
                <span className="value">Male</span>
                <span className="parameter">Gender</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default UserComp;
