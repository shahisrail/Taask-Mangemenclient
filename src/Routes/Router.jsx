import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HOme/Home/Home";
import Login from "../Pages/Shared/Login/Login";
import Regestare from "../Pages/Shared/Regestare.jsx/Regestare";
import Dashborad from "../Layout/Dashborad";
import CreateTodo from "../Pages/CreateTodo/CreateTodo";
import UpdateTodo from "../Pages/UpdateTodo/UpdateTodo";
import Profile from "../Pages/Profile/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Regestare></Regestare>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashborad></Dashborad>,
    children: [
      {
        path: "maketodo",
        element: <CreateTodo></CreateTodo>,
      },
      {
        path: "updatetask/:id",
        element: <UpdateTodo></UpdateTodo>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/updatetask/${params.id}`),
      },
      {
        path: "profile",
        element: <Profile></Profile>
      },
    ],
  },
]);
export default router;
