import React, { useState } from "react";
import data from "../data";
import Card from "./Card";

const CardList = () => {
  const [state, setState] = useState("undefined");
  // const [user, setUser] = useState('Zheniya')

  const clickHandler = (e) => {
    const res = data.results.find((el) => el.id == e.target.id);
    setState(res.name);
  };

  return (
    <div className="cardsList">
      <p>{state}</p>
      {data.results.map((element) => (
        <Card
          name={element.name}
          id={element.id}
          birth_year={element.birth_year}
          onClick={(e) => clickHandler(e)}
        />
      ))}
    </div>
  );
};

export default CardList;
