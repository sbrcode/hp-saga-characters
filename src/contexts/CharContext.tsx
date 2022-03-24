import { useState, createContext, useEffect, ReactChild, ReactFragment, ReactPortal } from 'react';
import CharService from '../services/CharService';
import CharData from '../types/CharType';

export const CharContext = createContext([] as unknown);

export function CharProvider(props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) {
  const [fans, setFans] = useState<Array<CharData>>([]);

  useEffect(() => {
    retrieveTutorials();
  }, []);

  const retrieveTutorials = () => {
    CharService.getAll()
      .then((response: any) => {
        setFans(response.data);
        // console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return (
    <CharContext.Provider
      value={{
        fans,
      }}
    >
      {props.children}
    </CharContext.Provider>
  );
}

export default CharContext;