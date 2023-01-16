import React, { useState, useEffect } from "react";
import Axios from "axios";
import { DotLoader } from "react-spinners";
import UserComp from "../components/UserComp";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(true);

  const getUsers = async () => {
    const baseUrl = process.env.REACT_APP_USERS;
    Axios(baseUrl).then((res) => {
      setUsers(res.data);
      setLoader(false);
    });
  };
  useEffect(() => {
    getUsers();
  }, []);

  console.log(users[0])
  return loader ? (
    <div className="flex justify-center items-center h-screen w-screen overflow-hidden ">
      <DotLoader size="80px" color="#ca7c4e" />
    </div>
  ) : (
    <div className=" my-5 ">
      <div className="row justify-content-center">
      <div className="text-5xl font-semibold my-10 text-center text-[#786450]">Users</div>
        {users?.map((user) => {
          return (
            <div key={user.name} className="col">
              <UserComp {...user} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
