import React from "react";
import { Button } from "../../Components/Button/Button";
import CountryList from "../../Components/CountryList/CountryList";

// import Table from "../../Components/Table/Table"

// import Navbar from "../../Components/Navbar/Navbar";
// import Country from "../Country/Country";
// import CountryList from "../../Components/CountryList/CountryList";
// import "./Home.css";
// import { Button } from "../../Components/Button/Button";

const Home = () => {
  return (
    <>
      <div>Home Page</div>
      <div>
        <CountryList />
      </div>

      <div>
        <Button />
      </div>
    </>
  );
};

export default Home;
