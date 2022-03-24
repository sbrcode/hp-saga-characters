import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import FanService from "../services/FanService";
import FanData from "../types/FanType";

const Fan: React.FC = () => {
  const params = useParams();

  // const initialFanState = {
  //   name: "",
  //   species: "",
  //   gender: "",
  //   wizard: false,
  //   ancestry: "",
  //   hairColour: "",
  //   hogwartsStudent: false,
  //   hogwartsStaff: false,
  //   alive: false,
  // };
  // const [currentFan, setCurrentFan] = useState<FanData>(initialFanState);

  // const getFan = (id: any) => {
  //   FanService.get(id)
  //     .then((response: any) => {
  //       setCurrentFan(response.data);
  //       console.log('==DATA==>', response.data);
  //     })
  //     .catch((e: Error) => {
  //       console.log(e);
  //     });
  // };

  // const getChar = (id: string) => {
  //   return fans.find(
  //     (fan: FanData) => fan.name === id
  //   );
  // }

  // useEffect(() => {
  //   if (params)
  //     getFan(params.id);
  // }, [params]);

  return (
    <div>
      <p>Coucou: {params.id}</p>
    </div>
  );
};

export default Fan;