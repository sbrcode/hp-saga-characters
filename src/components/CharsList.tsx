import _ from 'lodash';
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CharContext from '../contexts/CharContext';

const CharsList: React.FC = () => {
  const [searchName, setSearchName] = useState<string>('');
  const { fans } = useContext(CharContext as never)

  const filteredCharacters = _.filter(fans, (item) => {
    return item.name.toLowerCase().indexOf(searchName.toLowerCase()) > -1
  })

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </div>
      </div>
      <div className="col-md-6">
        <h4>Characters List</h4>
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
      </div>
    </div>
  );
};

export default CharsList;