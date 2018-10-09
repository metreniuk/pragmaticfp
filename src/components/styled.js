import styled from "styled-components"

// const prop = k => o => console.log({[k]: o[k]}) || o[k];
const prop = k => o => o[k]

const worldHeight = 200
const bg = "#f9f9f9"

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${bg};
  display: flex;
  align-items: center;
`

const World = styled.div`
  height: ${worldHeight}px;
  width: 100%;
  border-top: 2px solid brown;
  border-bottom: 2px solid brown;
  display: flex;
  align-items: flex-end;
  padding: 0 10px;
  position: relative;
`

const Player = styled.div`
  height: 30px;
  width: 30px;
  background: magenta;
  position: absolute;
  left: ${prop("x")}px;
  bottom: ${prop("y")}px;
  z-index: 99;
`

const Wall = styled.div`
  width: 30px;
  height: 100%;
  background: black;
  position: absolute;
  left: ${prop("x")}px;
  cursor: pointer;
`

const Hole = styled.div`
  width: 30px;
  position: absolute;
  height: ${prop("size")}px;
  bottom: ${prop("y")}px;
  background: ${bg};
`

export { Wrapper, World, Wall, Hole, Player }
