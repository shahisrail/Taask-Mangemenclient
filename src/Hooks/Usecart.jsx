/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";

import UseAxiosPublic from "./UseAxiosPublic";
import { AuthContext } from "../AuthProbider/AuthProvider";

const UseCart = () => {
  const axiospublic = UseAxiosPublic();
  const { user } = useContext(AuthContext)
  const { refetch, data: carts = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await axiospublic.get(`/task`);
      console.log(res.data);
      return res.data;
    },
  });
  return [carts, refetch];
};

export default UseCart;
