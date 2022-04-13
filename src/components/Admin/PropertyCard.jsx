import React from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { editUser } from "../../store/admin";
import { deleteUser } from "../../store/admin";

const PropertyCard = () => {
  return (
    <>
      <h1>Esto es PropertyCard</h1>
    </>
  );
};

export default PropertyCard;
