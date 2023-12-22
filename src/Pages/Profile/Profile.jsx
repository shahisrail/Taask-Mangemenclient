import React, { useContext } from "react";
import { AuthContext } from "../../AuthProbider/AuthProvider";

const Profile = () => {
  const {user} = useContext(AuthContext)
  return (
    <div className="flex ">
      <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-10 p-6">
        <div className="avatar mx-auto">
          <div className="w-24 rounded-full">
            <img src={user?.photoURL} />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">
           Name: {user?.displayName } <br />
           Name: {user?.email }
          
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
