import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import axiosWithAuth from "./../utils/axiosWithAuth";
import axios from "axios";

const Logout = () => {
  const { push } = useHistory();

  useEffect(() => {
    axios
      .post("/logout")
      .then((resp) => {
        localStorage.removeItem("token");
        push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div></div>;
};

export default Logout;
