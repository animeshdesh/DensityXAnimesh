// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import "../index.css";
import Services from "../components/Services";
import WhiteServices from "../components/WhiteServices";
import Derivates from "../components/Derivates";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhiteServices />
      <Derivates />
    </>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>;

// Step 3: Export your component
export default IndexPage;
