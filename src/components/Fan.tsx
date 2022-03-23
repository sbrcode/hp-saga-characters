import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import FanService from "../services/FanService";
import FanData from "../types/FanType";

const Fan: React.FC = () => {
  const { id }= useParams();
  console.log('==useParams==>', id)
  const initialFanState = {
    id: "",
    name: "",
    species: "",
    gender: "",
    wizard: false,
    ancestry: "",
    hairColour: "",
    hogwartsStudent: false,
    hogwartsStaff: false,
    alive: false,
  };
  const [currentFan, setCurrentFan] = useState<FanData>(initialFanState);

  const getFan = (id: string) => {
    FanService.get(id)
      .then((response: any) => {
        setCurrentFan(response.data);
        console.log('==DATA==>', response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getFan(id);
  }, [id]);

  return (
    <div>
      <p>{currentFan.ancestry}</p>
    </div>
  );
};

export default Fan;