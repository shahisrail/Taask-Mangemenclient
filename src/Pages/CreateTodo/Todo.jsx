import React, { useContext, useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";

import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { AuthContext } from "../../AuthProbider/AuthProvider";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import '../Btn/Btn.css'
const Todo = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = UseAxiosPublic();
  const [todo, setTodo] = useState([]);
  const [progress, setProgress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [task, setTasks] = useState([]);

  const fetchTaskData = async () => {
    try {
      const res = await axiosPublic.get(`/task/${user?.email}`);
      setTasks(res.data);
    } catch (error) {
      // Handle error, such as displaying an error message or logging it
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchTaskData(); 
  }, [task]);

  useEffect(() => {
    if (task) {
      const filteredTodo = task.filter((item) => item.status === "todo");
      const filteredProgress = task.filter(
        (item) => item.status === "progress"
      );
      const filteredCompleted = task.filter(
        (item) => item.status === "completed"
      );
      setTodo([...filteredTodo]);
      setProgress([...filteredProgress]);
      setCompleted([...filteredCompleted]);
    }
  }, [task]);

  const [openDropdownMap, setOpenDropdownMap] = useState({});

  const toggleDropdown = (taskId) => {
    setOpenDropdownMap((prevMap) => ({
      ...prevMap,
      [taskId]: !prevMap[taskId],
    }));
  };

  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/task/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    const updatedTasks = Array.from(task);
    const [movedTask] = updatedTasks.splice(source.index, 1);
    updatedTasks.splice(destination.index, 0, movedTask);

    console.log(draggableId);
    axiosPublic
      .patch(`/task?id=${draggableId}`, {
        status: destination.droppableId,
      })
      .then(() => {
        refetch();
      });
  };

  return (
    <div className="px-5">
      <div className="flex justify-center items-center content-center mt-5">
        <h1 className="mx-auto text-center text-3xl">
          Welcome Back{" "}
          <span className=" text-blue-500">{user?.displayName},</span> Here Your
          Daily Task
        </h1>
        <p className="">
          <Link to="/dashboard/notificatoin">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          </Link>
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-5 mt-10">
        <DragDropContext onDragEnd={onDragEnd}>
          <div>
            <Droppable droppableId="todo">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className=" px-4"
                >
                  <div className="">
                    <h1 className="text-center text-3xl mt-3 mb-3">Todo</h1>
                    {todo?.map((task, index) => (
                      <Draggable
                        key={task._id}
                        draggableId={task._id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            key={task._id}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className=" justify-center mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5"
                          >
                              <div className="card-body border">
                              <h2 className="card-title">
                                {task.titale}
                              
                              </h2>
                              <p className="">{task.Descriptoin}</p>
                              <p>{task.priority}</p>
                              <div className="card-actions  justify-end ">
                               
                              <div className="flex">
                              <button className="btn-grad "   onClick={() => handelDelete(task._id)}> Delete </button> 
                                 <Link   to={`/dashboard/updateTask/${task._id}`}>
                                <button className=" btn-grad"  > Update </button>   </Link>
                                </div> 


                                </div>       
                                                   
                              </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          <div>
            <Droppable droppableId="progress">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className=" px-4"
                >
                  <div className="">
                    <h1 className="text-center text-3xl mt-3 mb-3">progress</h1>
                    {progress?.map((task, index) => (
                      <Draggable
                        key={task._id}
                        draggableId={task._id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            key={task._id}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="w-full justify-center mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5"
                          >
                              <div className="card-body border">
                              <h2 className="card-title">
                                {task.titale}
                              
                              </h2>
                              <p className="">{task.Descriptoin}</p>
                              <p>{task.priority}</p>
                              <div className="card-actions justify-end">
                               
                              <div className="flex">
                              <button className="btn-grad "   onClick={() => handelDelete(task._id)}> Delete </button> 
                                 <Link   to={`/dashboard/updateTask/${task._id}`}>
                                <button className=" btn-grad"  > Update </button>   </Link>
                                </div> 
                                </div>       
                                                   
                              </div>

                           
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          <div>
            <Droppable droppableId="completed">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className=" px-4"
                >
                  <div className="">
                    <h1 className="text-center text-3xl mt-3 mb-3">Complete</h1>
                   
                     {completed?.map((task, index) => (
                      <Draggable
                        key={task._id}
                        draggableId={task._id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            key={task._id}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="w-full justify-center mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5"
                          >
                              <div className="card-body border">
                              <h2 className="card-title">
                                {task.titale}
                              
                              </h2>
                              <p className="">{task.Descriptoin}</p>
                              <p>{task.priority}</p>
                              <div className="card-actions justify-end">
                               
                              <div className="flex">
                              <button className="btn-grad "   onClick={() => handelDelete(task._id)}> Delete </button> 
                                 <Link   to={`/dashboard/updateTask/${task._id}`}>
                                <button className=" btn-grad"  > Update </button>   </Link>
                                </div>  
                                </div>       
                                                   
                              </div>

                           
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};

export default Todo;
