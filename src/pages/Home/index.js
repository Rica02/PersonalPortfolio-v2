import React from "react";
import { useNav } from "../../hooks/useNav";

const Home = () => {
  const homeRef = useNav("home");

  return (
    <section id="home" ref={homeRef}>
      <h1>Home</h1>
    </section>
  );
};

export default Home;
