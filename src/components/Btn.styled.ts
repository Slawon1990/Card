import styled, { css } from "styled-components";

type StyledBtnType = {
  btnType: "primary" | "outlined";
};

export const Button = styled.button<StyledBtnType>`
  width: 86px;
  height: 30px;
  border: none;
  border-radius: 5px;
  font-size: 10px;
  font-weight: 700;
  text-align: center;

  ${(props) =>
    props.btnType === "primary" &&
    css<StyledBtnType>`
      background: rgb(78, 113, 254);
      color: rgb(255, 255, 255);
    `}

  ${(props) =>
    props.btnType === "outlined" &&
    css<StyledBtnType>`
      border: 2px solid rgb(78, 113, 254);
      background-color: rgb(255, 255, 255);
      color: rgb(78, 113, 254);
      margin-left: 12px;
    `}
`;
