import React, { useState } from "react";
import data from "../data";
import Card from "./Card";

const CardList = () => {

    // stte with hooks
  const [state, setState] = useState("undefined"); //setState is a fn that allow us to change our state

  // fn that finds element in the data array with element.target.id
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
