import React from "react";
import vg from "../assets/2.webp";
const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1> Rajneesh</h1>
          <p>
            {" "}
            This is your last Option to know your next move of your destiny 😊
          </p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Unlock the secrets of the cosmos with our astrology website. Explore
            celestial wonders, cosmic insights, and discover what the stars have
            in store for you today!
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
