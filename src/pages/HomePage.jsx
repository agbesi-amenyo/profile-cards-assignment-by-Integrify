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

  return loader ? (
    <div className="flex justify-center items-center h-screen w-screen overflow-hidden ">
      <DotLoader size="80px" color="#ca7c4e" />
    </div>
  ) : (
    <div className="my-5">
      <div className=" justify-content-center max-w-screen md:px-20 mx-auto">
      <div className="text-5xl font-semibold text-center text-[#786450] uppercase">All Users</div>
      <div className="flex mx- flex-wrap gap-8 justify-center my-4 text-center">
        {users?.map((user) => {
          return (
            <div key={user.name} className="">
              <UserComp {...user} />
            </div>
          );
        })}
        </div>  
      </div>
    </div>
  );
};

export default HomePage;
