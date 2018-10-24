import React from "react";
import styled from "styled-components";
import Ex from "../exercises/1";
import S from "../solutions/1";

const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  height: 100vh;
  align-items: stretch;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-right: solid;
`;
const Right = styled.div`
  flex: 1;
`;
const ButtonWrapper = styled.div`
  max-width: 300px;
`;

export default () => (
  <Wrapper>
    <Left>
      Exercise:
      <ButtonWrapper>
        <Ex />
      </ButtonWrapper>
    </Left>
    <Right>
      Solution:
      <ButtonWrapper>
        <S />
      </ButtonWrapper>
    </Right>
  </Wrapper>
);
