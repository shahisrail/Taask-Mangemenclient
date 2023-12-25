// export default CreateTodo;
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";

// import UseAxiosHoks from "../../../Hooks/UseAxiosHoks";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProbider/AuthProvider";
import Todo from "./Todo";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import '../Btn/Btn.css'
const CreateTodo = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = UseAxiosPublic();
  const email = user?.email;
  const onSubmit = async (data) => {
    console.log(data);

    const taksiteam = {
      priority: data.priority,
      titale: data.titale,
      Descriptoin: data.Descriptoin,
      Dedline: data.Dedline,
      email,
      status: "todo",
    };

    axiosPublic.post("/task", taksiteam).then((res) => {
      console.log(res);
      Swal.fire("Good job!", "task added", "success");
    });
    reset();
  };
  return (
    <>
      <div className="w-1/2 mx-auto mt-5">
        <h2 className="text-4xl flex justify-center items-center ">
          Add a New Task
          <button
            className="btn-grad w-[200px] h-[70px]"
            onClick={openModal}
          >
            Add +
          </button>
          {modalOpen && (
            <div className="fixed inset-0 z-50 overflow-y-auto">
              <div className="flex items-center justify-center min-h-screen">
                <div
                  className="fixed inset-0 bg-black opacity-50"
                  onClick={closeModal}
                ></div>
                <div className="relative bg-white rounded-lg w-full md:w-1/2 mx-auto p-6">
                  <button
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={closeModal}
                  >
                    ✕
                  </button>
                  <div className="w-full mx-auto ">
                    {/* <h2 className="text-3xl text-center">Create To do </h2> */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                     
                      {/* titale  */}
                      <div className="form-control w-full ">
                        <label className="label">
                          <span className="label-text">Titale</span>
                        </label>
                        <input
                          type="text"
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
                          defaultValue="default"
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
                      {/*  servay Descriptoins  */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Descriptoin</span>
                        </label>
                        <textarea
                          {...register("Descriptoin", { required: true })}
                          className="textarea textarea-bordered h-24"
                          placeholder="Bio"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="btn mt-5 w-full text-white bg-[#00CBBD]"
                      >
                        Add TO DO
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </h2>
      </div>
      <div>
        <Todo></Todo>
      </div>
    
    </>
  );
};

export default CreateTodo;
