import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <div
        style={{
          filter: "brightness(0.4)",
        }}
      >
        <h1>WIP - Work in Progress</h1>
        <p>
          This project is in work in progress, please visit after few weeks to
          see changes here...Thanks!
        </p>
        <span
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <strong
            style={{
              fontSize: "18px",
            }}
          >
            Current development Status:
          </strong>{" "}
          <p>Header Menu</p>
        </span>
      </div>
    </>
  );
};

export default Home;
