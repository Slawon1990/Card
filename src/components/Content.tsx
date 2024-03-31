import { Title } from "./Title.styled";
import { Text } from "./Text.styled";
import { Buttons } from "./Buttons";
import styled from "styled-components";



export const Content = () => {
  return (
    <Wrapper>
      <Title>Headline</Title>
      <Text>
        Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
        ornare in venen.
      </Text>
      <Buttons/>
    </Wrapper>
  );
};


const Wrapper = styled.div`
 padding: 0px 10px;

`;
