import React from "react";
import { Wrapper, World, Wall, Hole, Player } from "./styled";
import { PlayerMover, WallMover, Tracker } from "./components";

const SmartPlayer = () => (
  <PlayerMover>{({ x, y }) => <Player x={x} y={y} />}</PlayerMover>
);

const PlayerWorld = () => (
  <Wrapper>
    <World>
      <SmartPlayer />
    </World>
  </Wrapper>
);

export { SmartPlayer, PlayerWorld };
