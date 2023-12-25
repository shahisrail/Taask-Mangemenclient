import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../../../AuthProbider/AuthProvider";
import "../Banner/Btn.css"
const Banner = () => {
  const { user } = useContext(AuthContext);
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.postimg.cc/QtsqWSc9/99307145749.png)",
      }}
    >
      <div className="hero-overlay "></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold"></h1>
          <p className="mb-5 font-bold">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          {user ? (
            <Link to="/dashboard/maketodo">
              <button className=" btn-grad">
                Letss Explore
              </button>
            </Link>
          ) : (
            <Link to="/login">
              {" "}
              <button className="btn-grad">
                Lets's Explore
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
