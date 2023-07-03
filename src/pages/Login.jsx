import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setUser } from "@/store/slices/userSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = () => {
    const _user = {
      loggedIn: true,
    };

    dispatch(setUser(_user));
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Login page</h1>
      <div>
        You can go back to <NavLink to="/">Home Page</NavLink>
      </div>
      <p>click the button to login in</p>
      <div>
        <button onClick={onLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
