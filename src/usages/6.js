import React from "react";
import styled from "styled-components";
import Ex from "../exercises/6";
import S from "../solutions/6";

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
const ListWrapper = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  height: 60%;
  overflow-y: scroll;

  .heading {
    text-align: left;
    padding-left: 40px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    font-style: italic;
  }

  .student-group {
    margin-bottom: 20px;
  }
`;

export default () => (
  <Wrapper>
    <Left>
      Exercise:
      <ListWrapper>
        <Ex />
      </ListWrapper>
    </Left>
    <Right>
      Solution:
      <ListWrapper>
        <S />
      </ListWrapper>
    </Right>
  </Wrapper>
);
