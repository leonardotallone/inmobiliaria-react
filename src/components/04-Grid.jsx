import React from "react";
import { useDispatch } from "react-redux";

import { addToFavorite } from "../store/user";
import Card from "./05-Card";

const Grid = () => {
  const dispatch = useDispatch();
  const onFavoriteAdd = (id) => {
    dispatch(addToFavorite(id)); //id es "propertiesId" en Redux
  };
  return (
    <>
    <br />
    <p className="title has-text-black">New York</p>
    <br />
    <div class="columns is-offset-1 is-desktop ">
      <div class="column"><Card /></div>
      <div class="column"><Card /></div>
      <div class="column"><Card /></div>
      <div class="column"><Card /></div>
    </div>
    <br />
    <p className="title has-text-black">New York</p>
    <br />
    <div class="columns is-offset-1 is-desktop">
      <div class="column"><Card /></div>
      <div class="column"><Card /></div>
      <div class="column"><Card /></div>
      <div class="column"><Card /></div>
    </div>
    <br />
    <p className="title has-text-black">New York</p>
    <br />
    <div class="columns is-offset-1 is-desktop">
      <div class="column"><Card /></div>
      <div class="column"><Card /></div>
      <div class="column"><Card /></div>
      <div class="column"><Card /></div>
    </div>

   </>
    
  );
};
export default Grid;
