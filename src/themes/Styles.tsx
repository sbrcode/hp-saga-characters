import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledTitle = styled.h2`
  font-size: 1.5em;
  color: #241e4e;
  text-align: justify;
`;

export const StyledInput = styled.input.attrs(props => ({
  type: "text",
  size: props.size || "1em",
}))`
  color: #241e4e;
  font-size: 1em;
  border: 2px solid #h241e4e;
  border-radius: 6px;
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

export const StyledLink = styled(Link)`
  color: #241e4e;
  font-size: 1em;
`;

export const StyledMain = styled.div`
  background-color: ghostwhite;
  padding: 2em;
`;
