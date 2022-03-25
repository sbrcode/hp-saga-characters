import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 1.5em;
  color: #h241e4e;
  text-align: ;
`;

export const Input = styled.input.attrs(props => ({
  type: "text",
  size: props.size || "1em",
}))`
  color: #781b2b;
  font-size: 1.2em;
  border: 2px solid #h241e4e;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

export const StyledDiv = styled.div`
  background-color: #f5a549
`;
// const Link = ({ className, children }) => (
//   <a className={className}>
//     {children}
//   </a>
// );

// const StyledLink = styled(Link)`
//   color: palevioletred;
//   font-weight: bold;
// `;
// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
// const Wrapper = styled.section`
//   padding: 4em;
//   background: papayawhip;
// `;

// Use them like any other React component – except they're styled!
// <Wrapper>
//   <Title>Hello World, this is my first styled component!</Title>
// </Wrapper>