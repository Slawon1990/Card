import styled from "styled-components";

export const ButtonOne = styled.button`
  width: 86px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background: rgb(78, 113, 254);
  color: rgb(255, 255, 255);
  font-size: 10px;
  font-weight: 700;
  text-align: center;
`;

export const ButtonTwo = styled(ButtonOne)`
  border: 2px solid rgb(78, 113, 254);
  background-color: rgb(255, 255, 255);
  color: rgb(78, 113, 254);
  margin-left: 12px
`;
