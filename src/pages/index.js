// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import "../index.css";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>;

// Step 3: Export your component
export default IndexPage;
