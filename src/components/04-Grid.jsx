import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Card from "./05-Card";

const Grid = () => {
  const properties = useSelector((state) => state.properties);
  return (
    <>
      <p className="title has-text-black">Your Selected Properties</p>
      <div className="container grillacontainer">
        <table class="table is-fullwidth grilla is-flex is-justify-content-center is-align-content-center">
          <tbody>
            {" "}
            {properties.map(
              ({
                id,
                image,
                name,
                description,
                price,
                location,
                availability,
              }) => {
                return (
                  <tr key={id}>
                    <Card
                      key={id}
                      image={image}
                      name={name}
                      description={description}
                      price={price}
                      location={location}
                      availability={availability}
                    />
                    <br />
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Grid;

// <div className="columns is-offset-1 is-desktop ">
//   <div className="column">
//     {properties.map(
//       ({id, image, name, description, price, location, availability }) => (
//         <Card key={id} image={image} name={name} description={description} price={price} location={location} availability={availability}
//         />
//       )
//     )}
//   </div>
// </div>
