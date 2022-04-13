import React from "react";

import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { getOneProperty } from "../../store/admin";

const AdminProperties = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const properties = useSelector((state) => state.properties);
  

  const oneProperty = (e) => {
    e.preventDefault();
    dispatch(getOneProperty()).then(() => navigate("/admin/property"));
  };

  return (
    <>
      <a onClick={oneProperty}>Properties Dashboard</a>
    </>
  );
};  
export default AdminProperties;
