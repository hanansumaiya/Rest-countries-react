import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, population, area, region, subregion, flags } = props.country;
  return (
    <div className="country">
      <h3>{name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population:{population}</p>
      <p>
        <small>Area:{area}</small>
      </p>
      <p>
        <small>Region:{region}</small>
      </p>
      <p>
        <small>Sub Region:{subregion}</small>
      </p>
    </div>
  );
};

export default Country;
