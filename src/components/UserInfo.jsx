import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const UserInfo = () => {
  const locate = useLocation();
  const [user, setUser] = useState(locate.state.user);
  useEffect(() => {
    setUser(locate.state.user);
  }, [locate]);
  return (
    <div className="details">
      <div className="detailCenter text-center grid md:grid-cols-2 xl:grid-cols-4 justify-content-center space-y-4 md:space-y-0">
        <div className="col-lg-4 col-sm-12 ">
          <div>
            <>
              <div className="text-3xl font-semibold">{user && user?.name}</div>
              <div className="text-xl">Email: {user && user?.email}</div>
              <div className="text-xl">Website: {user && user?.website}</div>
              <div className="text-xl">Username: {user && user?.username}</div>
            </>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12">
          <div>
            <>
              <div className="text-3xl font-semibold">Address</div>
              <div className="text-xl">City: {user && user?.address?.city}</div>
              <div className="text-xl">
                Street: {user && user?.address?.street}
              </div>
              <div className="text-xl">
                Suite: {user && user?.address?.suite}
              </div>
              <div className="text-xl">
                Zipcode: {user && user?.address?.zipcode}
              </div>
            </>
          </div>
        </div>

        <div className="col-lg-4 col-sm-12">
          <div>
            <>
              <div className="text-3xl font-semibold">Company</div>
              <div className="text-xl">
                {" "}
                Name: {user && user?.company?.name}
              </div>
              <div className="text-xl">
                catchPhrase: {user && user?.company?.catchPhrase}
              </div>
              <div className="text-xl">bs: {user && user?.company?.bs}</div>
            </>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12">
          <div>
            <>
              <div className="text-3xl font-semibold">Geo</div>
              <div className="text-xl">
                {" "}
                Lat: {user && user?.address?.geo?.lat}
              </div>
              <div className="text-xl">
                Lng: {user && user?.address?.geo?.lng}
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
