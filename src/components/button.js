import styled from "styled-components"

export const Button = styled.button`
  margin: 20px 0;
  padding: 2px 10px;
  width: 202px;
  height: 56px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  color: rgb(27, 95, 198);
  background-color: white;
  border: 2px solid rgb(27, 95, 198);
  transition: ease-in 0.2s;
  text-decoration: none;
  :hover {
    background-color: rgb(27, 95, 198);
    color: white;
  }

  :focus {
    outline: rgb(27, 95, 198) solid 2px;
    color: rgb(27, 95, 198);
    background-color: white;
    border: 2px solid rgb(27, 95, 198);
  }
  :visited {
    outline: rgb(27, 95, 198) solid 2px;
    color: rgb(27, 95, 198);
    background-color: white;
    border: 2px solid rgb(27, 95, 198);
  }
  & a,
  a:link {
    color: rgb(27, 95, 198);
    text-decoration: none;
    transition: 0.1s;
  }
  & a:hover {
    text-decoration: none;
    color: white;
    border: 2px solid white;
  }
`
