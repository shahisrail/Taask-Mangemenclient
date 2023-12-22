import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProbider/AuthProvider";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateTodo = () => {
  const { titale, priority, separatelists, Dedline, _id, Descriptoin } =
    useLoaderData();
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);

    const taksiteam = {
      email: data.email,
      priority: data.priority,
      titale: data.titale,
      Descriptoin: data.Descriptoin,
      Dedline: data.Dedline,
      separatelists: data.separatelists,
    };
    const Taskres = await axios.patch(
      `http://localhost:5000/updatetask/${_id}`,
      taksiteam
    );
    console.log(Taskres.data);

    console.log(Taskres.data);
    if (Taskres.data.modifiedCount > 0) {
      // show  success popup
      // reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Update this task`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div className="w-full mx-auto ">
      {/* <h2 className="text-3xl text-center">Create To do </h2> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full my-6 hidden">
          <label className="label">
            <span className="label-text">User Email</span>
          </label>
          <input
            type="text"
            defaultValue={user?.email}
            readOnly
            placeholder="User Email"
            {...register("email", { required: true })}
            className="input input-bordered w-full "
          />
        </div>

        {/* titale  */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Titale</span>
          </label>
          <input
            type="text"
            defaultValue={titale}
            placeholder="titale"
            {...register("titale", { required: true })}
            className="input input-bordered w-full "
          />
        </div>
        {/* dedline */}

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Dedline</span>
          </label>
          <input
            type="date"
            defaultValue={Dedline}
            placeholder="Dedline"
            {...register("Dedline", { required: true })}
            className="input input-bordered w-full "
          />
        </div>
        {/* priority  */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">priority</span>
          </label>
          <select
            defaultValue={priority}
            {...register("priority", { required: true })}
            className="select select-bordered w-full"
          >
            <option disabled value="default">
              Select a priority
            </option>
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
          </select>
        </div>
        {/*  todo Descriptoins  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Descriptoin</span>
          </label>
          <textarea
            defaultValue={Descriptoin}
            {...register("Descriptoin", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn mt-5 w-full text-white bg-[#00CBBD]"
        >
          Update To do
        </button>
      </form>
    </div>
  );
};

export default UpdateTodo;
