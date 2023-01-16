import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";



const UserInfo = () => {
  const locate = useLocation();
  const [user, setUser] = useState(locate.state.user);
  useEffect(() => {
    setUser(locate.state.user);
  }, [locate]);
  return (
    <div className="detials">
      <div className="detailCenter row justify-content-center">
        <div className="col-lg-4 col-sm-12">
          <div>
            <>
              <div>{user && user?.name}</div>
              <div className="fs-5">
                Year Of Birth: {user && user?.birth_year}
              </div>
            </>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12">
          <div src="assets/images/divfile.png"></div>
        </div>
        <div className="col-lg-4 col-sm-12">
          <div className="row">
            <div className="col">
             
              <div>Gender</div>
            </div>
            <div className="col-3">
              <userue>{user && user?.height}</userue>
              <div>Height</div>
            </div>
            <div className="col-3">
              <userue>{user && user?.mass}</userue>
              <div>Mass</div>
            </div>
            <div className="col">
            
              <div>Skin Color</div>
            </div>
            <div className="col-3">
            
              <div>Hair Color</div>
            </div>
            <div className="col-3">
           
              <div>Eye Color</div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center text-center">
          <h1>Featured Movies</h1>
          <div
            className="d-flex flex-wrap justify-content-center align-items-center"
            style={{ minHeight: "124px" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
