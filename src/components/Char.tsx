import _ from 'lodash';
import React, { useContext } from "react";
import { useParams } from 'react-router-dom';
import { CharContext } from "../contexts/CharContext"

const Char: React.FC = () => {
  let params = useParams();
  const { fans } = useContext(CharContext as never);

  console.log('CHAR', params, fans.length)

  const getChar = (char: string | undefined) => _.find(fans, { 'name': char })

  const {
    name, alternate_names, species, gender, house, dateOfBirth, wizard, ancestry, hairColour,
    hogwartsStudent, hogwartsStaff, alive, // wand, image
        } = getChar(params.id);

  return (
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
  );
};

export default Char;