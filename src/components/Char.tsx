import React, { useContext } from "react";
import { useParams } from 'react-router-dom';
import CharData from "../types/CharType";
import { CharContext } from "../contexts/CharContext"

const Char: React.FC = () => {
  let params = useParams();
  const { fans } = useContext(CharContext as never);

  const getChar = (params: string | undefined) => {
    return fans.find(
      (fan: CharData) => fan.name === params
    )
  }

  const {
          name, alternate_names, species, gender, house, dateOfBirth, wizard, ancestry, hairColour,
          wand, hogwartsStudent, hogwartsStaff, alive, image
        } = getChar(params.id);

  return (
    <div>
      {fans && params ?
        <div>
          <h2>{name}</h2>
          <p>{alternate_names}</p>
          <p>{species}</p>
          <p>{gender}</p>
          <p>{house}</p>
          <p>{dateOfBirth}</p>
          <p>{wizard}</p>
          <p>{ancestry}</p>
          <p>{hairColour}</p>
          <p>{hogwartsStudent}</p>
          <p>{hogwartsStaff}</p>
          <p>{alive}</p>
        </div>
        : <p>Loading...</p>
      }
    </div>
  );
};

export default Char;