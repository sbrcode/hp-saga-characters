import _ from 'lodash';
import React, { useState, useContext } from "react";
import CharContext from '../contexts/CharContext';
import { StyledTitle, StyledInput, StyledLink } from '../themes/Styles'

const CharsList: React.FC = () => {
  const [searchName, setSearchName] = useState<string>('');
  const { fans } = useContext(CharContext as never)

  const filteredCharacters = _.filter(fans, (item) => {
    return item.name.toLowerCase().indexOf(searchName.toLowerCase()) > -1
  })

  return (
    <div>
      <StyledTitle>Harry Potter Saga Characters List</StyledTitle>
      <StyledInput
        size="1em"
        placeholder="Lookin' for someone ?"
        value={searchName}
        onChange={(e: { target: { value: any; }; }) => setSearchName(e.target.value)}
      />
        <ul className="list-group">
          {filteredCharacters &&
            filteredCharacters.map((fan, index) => (
              <li key={index} >
                <StyledLink to={`/${fan.name}`} >
                  {fan.name}
                </StyledLink>
              </li>
            ))}
        </ul>
    </div>
  );
};

export default CharsList;