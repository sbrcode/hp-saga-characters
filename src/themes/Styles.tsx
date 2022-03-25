import { Link } from 'react-router-dom';
import styled from 'styled-components';

/**
    brown = #781b2b
    violet = #241e4e
    gold = #f5a549
    green = #2e382e
    black = #0d1f22
 */

export const StyledTitle = styled.h2`
  font-size: 1.5em;
  color: #f5a549;
  text-align: justify;
`;

export const StyledInput = styled.input.attrs(props => ({
  type: "text",
  size: props.size || "1em",
}))`
  color: #781b2b;
  font-size: 1em;
  border: 2px solid #h241e4e;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

export const StyledLink = styled(Link)`
  color: #f5a549;
  font-size: 1em;
`;

export const StyledDiv = styled.div`
  background-color: #241e4e;
`;
