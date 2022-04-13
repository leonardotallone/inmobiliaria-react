import React from "react";
import { useDispatch } from "react-redux";

import { addToFavorite } from "../store/user";

const Card = ({ image, name, description, price, location, availability }) => {
  const dispatch = useDispatch();

  const onFavoriteAdd = (id) => {
    dispatch(addToFavorite(id));
  };

  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left"></div>
            <div className="media-content">
              <strong className="title is-4">{name}</strong>
              <p className="title is-5">{location}</p>
              <p className="title is-5">US$ {price}</p>
              <p className="subtitle is-6">{availability}</p>
            </div>
          </div>
          <button
            onClick={onFavoriteAdd}
            className="fa-solid fa-heart"
          ></button>
          <div className="content">
            {description} <a>@bulmaio</a>.<a href="#">#css</a>{" "}
            <a href="#">#responsive</a>
            <br />
          </div>
        </div>
      </div>  
    </>
  );
};
export default Card;
