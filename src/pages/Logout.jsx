import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { removeUser } from "@/store/slices/userSlice";

const LogoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(removeUser());
    navigate("/");
  }, []);

  return <div>...</div>;
};

export default LogoutPage;
