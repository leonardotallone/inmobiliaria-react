import React from "react";


const Card = ({image, name, description, price, location, availability}) => {
  return (
    <>
      <div classname="card">
        <div classname="card-image">
          <figure classname="image is-4by3">
            <img
              src={image}
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div classname="card-content">
          <div classname="media">
            <div classname="media-left"></div>
            <div classname="media-content">
              <strong class="title is-4">{name}</strong>
              <p class="title is-5">{location}</p>
              <p class="title is-5">US$ {price}</p>
              <p class="subtitle is-6">{availability}</p>
            </div>
          </div>
              <button className="fa-solid fa-heart"></button>
          <div classname="content">
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
