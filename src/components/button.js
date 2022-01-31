import styled from "styled-components"

export const Button = styled.button`
  margin: 20px 0;
  padding: 2px 10px;
  width: 202px;
  height: 56px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 50px;
  font-weight: 600;
  color: white;
  background-color: #262626;
  border: 2px solid #fece04;
  transition: ease-in 0.2s;
  text-decoration: none;

  :hover {
    color: #262626;
    background-color: #fece04;
  }

  :focus {
    outline: #fece04 solid 2px;
    color: #262626;
    background-color: #fece04;
  }

  :visited {
    outline: #fece04 solid 2px;
    color: #262626;
    background-color: #fece04;
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
