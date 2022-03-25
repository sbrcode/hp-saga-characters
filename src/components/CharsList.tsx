import _ from 'lodash';
import React, { useState, useContext } from "react";
import CharContext from '../contexts/CharContext';
import { StyledTitle, StyledInput, StyledDiv, StyledLink } from '../themes/Styles'

const CharsList: React.FC = () => {
  const [searchName, setSearchName] = useState<string>('');
  const { fans } = useContext(CharContext as never)

  const filteredCharacters = _.filter(fans, (item) => {
    return item.name.toLowerCase().indexOf(searchName.toLowerCase()) > -1
  })

  return (
    <StyledDiv>
      <StyledInput
        size="1.2em"
        placeholder="Search by name"
        value={searchName}
        onChange={(e: { target: { value: any; }; }) => setSearchName(e.target.value)}
      />
      <StyledTitle>Harry Potter Saga Characters List</StyledTitle>
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
    </StyledDiv>
  );
};

export default CharsList;