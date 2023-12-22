import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.postimg.cc/gj6KHwM1/deadline-time-management-business-concept-vector-107791-42.jpg)'}}>
        <div className="hero-overlay "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold"></h1>
            <p className="mb-5 font-bold">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
           <Link to="/login"> <button className="btn btn-outline btn-accent">Lets's Explore</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;