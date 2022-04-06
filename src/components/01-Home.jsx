import React from "react";
import NavBar from "./00-NavBar";


const Home = () => {
  return (
    <>
    <section className="hero is-fullheight is-bold">
      <div className="hero-head">
        <header className="nav">
          <NavBar />
        </header>
      </div>
      <div className="hero-body">
        <div className="container has-text-left">
          <p className="title is-1 has-text-white-ter">Find out you Home right Now!</p>
          <p className="subtitle has-text-white-ter">
            Don't waste your time, contact us, we have hundreds of properties
            throughout Manhattan, Brooklyn and New Jersey!
          </p>
        </div>
      </div>
    </section>
    </>
  );
};
export default Home;
