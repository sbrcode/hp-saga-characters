import _ from 'lodash';
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CharContext from '../contexts/CharContext';
import { Title, Input, StyledDiv } from '../themes/Styles'

const CharsList: React.FC = () => {
  const [searchName, setSearchName] = useState<string>('');
  const { fans } = useContext(CharContext as never)

  const filteredCharacters = _.filter(fans, (item) => {
    return item.name.toLowerCase().indexOf(searchName.toLowerCase()) > -1
  })

  return (
    <StyledDiv>
      <Input
        size="1.2em"
        placeholder="Search by name"
        value={searchName}
        onChange={(e: { target: { value: any; }; }) => setSearchName(e.target.value)}
      />
      <Title>Harry Potter Saga Characters List</Title>
        <ul className="list-group">
          {filteredCharacters &&
            filteredCharacters.map((fan, index) => (
              <li key={index} >
                <Link to={`/${fan.name}`} >
                  {fan.name}
                </Link>
              </li>
            ))}
        </ul>
    </StyledDiv>
  );
};

export default CharsList;