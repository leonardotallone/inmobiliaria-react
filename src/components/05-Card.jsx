import React from "react";
// import { useDispatch } from "react-redux";

const Card = () => {
  return (
    <>
      <div classname="card">
        <div classname="card-image">
          <figure classname="image is-4by3">
            <img
              src="https://cdn.vox-cdn.com/thumbor/VbtQ-PS5ZTq0VIVNL2wxbnjV2PY=/0x0:3000x2253/1200x800/filters:focal(1260x887:1740x1367)/cdn.vox-cdn.com/uploads/chorus_image/image/56255181/GettyImages_619686566.1503067714.jpg"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div classname="card-content">

          <div classname="media">
            <div classname="media-left"></div>
            <div class="media-content">
              <p class="title is-4">Title Description</p>
              <p class="subtitle is-6">@johnsmith</p>
            </div>
          </div>

          <div classname="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{" "}
            <a href="#">#responsive</a>
            <br />
           z
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
