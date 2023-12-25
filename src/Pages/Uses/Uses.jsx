import React, { useContext } from "react";
import { AuthContext } from "../../AuthProbider/AuthProvider";
import { Link } from "react-router-dom";
import "../Btn/btn.css"
const Uses = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>
      <h2 className="text-3xl text-center mt-5">
        Who uses and website can be of benefit
      </h2>
 <div className="grid grid-cols-3 gap-5 p-5">
 <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Students</h2>
          <p>Manage study tasks, assignments, and deadlines.</p>
          <div className="card-actions justify-end">
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
 <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Professionals</h2>
          <p>Organize work tasks, meetings, and projects.</p>
          <div className="card-actions justify-end">
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
 <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Freelancers</h2>
          <p>Track project deadlines, client meetings, and
                deliverables.</p>
          <div className="card-actions justify-end">
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
 <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Entrepreneurs</h2>
          <p>Plan tasks, prioritize objectives, and manage
                business-related activities.</p>
          <div className="card-actions justify-end">
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
 <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title"> Parents</h2>
          <p>Keep track of household chores, children's activities,
                and appointments.</p>
          <div className="card-actions justify-end">
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
 <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">  Small Businesses</h2>
          <p>Coordinate tasks among team members, assign
                responsibilities, and track progress.</p>
          <div className="card-actions justify-end">
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
 <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">  Event Planners</h2>
          <p>Organize event schedules, tasks, and vendor
                coordination.</p>
          <div className="card-actions justify-end">
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
 <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">  Healthcare Professionals</h2>
          <p>Manage patient appointments, treatment
                plans, and medical tasks.</p>
          <div className="card-actions justify-end">
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
 </div>
      </div>

  );
};

export default Uses;
