import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className="container">
      <h1>Reat Countries : {countries.length}</h1>
      <p>Rest countries API using REACT</p>
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.cca3} country={country}></Country>
        ))}
      </div>
      {countries.map((country) => console.log(country))}
    </div>
  );
};

export default Countries;
