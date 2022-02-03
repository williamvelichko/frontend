import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

const Logout = () => {
  const { push } = useHistory();

  useEffect(() => {
    localStorage.removeItem("token");
    push("/signup");
  }, []);

  return <div></div>;
};

export default Logout;
