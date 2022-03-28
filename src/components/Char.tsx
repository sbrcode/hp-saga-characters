import _ from 'lodash';
import React, { useContext } from "react";
import { useParams } from 'react-router-dom';
import { CharContext } from "../contexts/CharContext";
import magicStaff from '../assets/magic-staff.png';

const Char: React.FC = () => {
  let params = useParams();
  const { fans } = useContext(CharContext as never);
  const getChar = (char: string | undefined) => _.find(fans, { 'name': char })

  if (fans && fans.length > 0) {
    const {
      name, alternate_names, species, gender, house, dateOfBirth, wizard, ancestry, hairColour,
      hogwartsStudent, actor, alternate_actors, alive, image, wand, 
    } = getChar(params.id);

    const start = gender === 'female' ? 'She is' : 'He is'

    return (
      <div>
        <img src={image} height={225} alt={`[ ${name} ]`} />
        <h2>{name}</h2>
        {alternate_names.length > 0 &&
        <p>a.k.a {alternate_names.join(', ')}</p>}
        {species && 
        <p>{species} kind</p>}
        {house &&
        <p>Part of the {house} House</p>}
        {dateOfBirth &&
        <p>Born on {dateOfBirth}</p>}
        {wizard &&
        <p>{start} a wizard</p>}
        {wand.length &&
          <>
            <img src={magicStaff} alt={magicStaff} height={wand.length * 3} />
            <span> <b>{wand.length}</b> [wood: {wand.wood}] [core: {wand.core}]</span>
          </>
        }
        {ancestry &&
        <p>ancestry: {ancestry}</p>}
        {hairColour &&
        <p>hair colour: {hairColour}</p>}
        {hogwartsStudent &&
        <p>Hogwart's Student</p>}
        {alive &&
        <p>{start} alive !</p>}
        {actor &&
        <p>played by {actor}</p>}
        {alternate_actors.length > 0 &&
        <p>alternally played by {alternate_actors.join(', ')}</p>}
      </div>
    );
  } else {
    return null
  }
}

export default Char;