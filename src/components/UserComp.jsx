import React from "react";
import Button from "./Button";

const UserComp = ({ ...user }) => {
  return (
    <div className="frame">
      <div className="center">
        <div className="">
          <div className="image">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="initial">
              <span>{user?.name?.split(" ")[0]?.slice(0, 1)}</span>
              <span>{user?.name?.split(" ")[1]?.slice(0, 1)}</span>
            </div>
          </div>
          <div className="name">{user?.name}</div>
          <div className="username">{user?.email}</div>
          <div className="actions">
            <Button {...user} />
          </div>
        </div>
        <div className="stats">
          <div className="box">
            <span className="value">{user?.username}</span>
            <span className="parameter">Username</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserComp;
