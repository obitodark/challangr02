import styled from "styled-components";

export const NavBar = styled.button`
  font-family: "Alata", sans-serif;
  font-weigth: 400;
  position: relative;
  font-size: 15px;
  padding: 10px;
  color:white;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover:before{
    content: "";
    position: absolute;
    top: 40px;
    left: calc(60%/2);
    
    background-color: white;
    height: 3px;
    width: 40%;
  },
  

`;
export const Body = styled.button`
  font-family: "Alata", sans-serif;
  color: black;
  background: white;
  border: 1px solid black;
  padding: 10px 35px;
  letter-spacing: 2px;

  &:hover {
    color: white;
    background: black;
  }
`;

const Button = {
  NavBar,
  Body,
};
export default Button;
