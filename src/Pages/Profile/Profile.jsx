import React, { useContext } from "react";
import { AuthContext } from "../../AuthProbider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex ">
      <div className="card  bg-base-100 shadow-xl mx-auto mt-10 p-6">
        <div className="avatar mx-auto">
          <div className="w-24 rounded-full">
            <img src={user?.photoURL} />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            Name: {user?.displayName} 
        
          </h2>
          <h2 className="card-title">
          Email:{user?.email}
        
          </h2>

          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
