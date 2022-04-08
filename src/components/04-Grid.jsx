import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { addToFavorite } from "../store/user";

import Card from "./05-Card";

const Grid = () => {
  const dispatch = useDispatch();

  const onFavoriteAdd = (id) => {
    dispatch(addToFavorite(id)); //id es "propertiesId" en Redux
  };

  const properties = useSelector((state) => state.properties);
  
  

  return (
    <>
      <p class="title has-text-black">Your Selected Properties</p>
      <div class="columns is-offset-1 is-desktop ">
        <div class="column">
          {properties.map(
            ({ image, name, description, price, location, availability }) => (
              <Card
                key={name}
                image={image}
                name={name}
                description={description}
                price={price}
                location={location}
                availability={availability}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};
export default Grid;
