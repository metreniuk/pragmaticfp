import React, { Fragment } from "react";
import State from "../state/State";
import PlayerMover from "../components/PlayerMover";
import WallMover from "../components/WallMover";
import { Player, Wall, Hole, Wrapper, World } from "../components/styled";
import Slider from "../components/Slider";
/*
Exercise 6
Theory: ???
Practice: Wall reducer
*/

/*
Notes for me:

*/

function playerReducer(player, action) {
  const { x, y } = player;
  const { type, key, step } = action;

  if (type !== "PLAYER_MOVED") {
    return player;
  }

  if (key === "w") {
    return { x: x, y: y + step };
  }

  if (key === "s") {
    return { x: x, y: y - step };
  }

  if (key === "a") {
    return { x: x - step, y: y };
  }

  if (key === "d") {
    return { x: x + step, y: y };
  }

  return player;
}

// The state indicates the coordinates of all the walls
// (and some more information about the holes that doesn't matter for now).
// It has a similar shape:
// [{x: 200, holes: []}, {x: 240, holes: []}, {x: 300, holes: []}, ...]
function wallsReducer(walls, action) {
  // You can use these constants in your code
  const { type, index, step } = action;

  if (type === "WALL_MOVED") {
    // 1.
    const newWalls = [];

    for (let i = 0; i < walls.length; i++) {
      let wall = walls[i];
      if (i === index) {
        wall = {
          x: wall.x - step,
          holes: wall.holes
        };
      }

      newWalls.push(wall);
    }

    // 2.
    // const newWalls = walls.map(
    //   (wall, i) => (i === index ? { x: wall.x - step, holes: wall.holes } : wall)
    // );
    return newWalls;
  }

  return walls;
}

function reducer(state, action) {
  return {
    player: playerReducer(state.player, action),
    walls: wallsReducer(state.walls, action)
  };
}

// 🌈This is a fancy way to write html inside JavaScript
// think of it just as html on steroids.
// Don't touch it 👀(at least if you don't know what you are doing).
const Usage = props => {
  const initialState = {
    player: {
      x: 0,
      y: 0
    },
    walls: [
      {
        x: 400,
        holes: [{ y: 30, size: 40 }, { y: 100, size: 20 }]
      }
    ]
  };

  return (
    <Wrapper>
      <World>
        <State initialState={initialState} reducer={reducer}>
          {({ state, dispatch, playHistory, slide }) => (
            <Fragment>
              <PlayerMover dispatch={dispatch}>
                {() => (
                  <Player
                    x={state.player.x}
                    y={state.player.y}
                    onClick={playHistory}
                  />
                )}
              </PlayerMover>
              {state.walls.map((wall, index) => (
                <WallMover
                  dispatch={dispatch}
                  index={index}
                  isFrozen={true}
                  key={index}
                >
                  {({ toggleFrozen }) => (
                    <Wall x={wall.x} onClick={toggleFrozen}>
                      {wall.holes.map(({ y, size }, i) => (
                        <Hole key={i} y={y} size={size} />
                      ))}
                    </Wall>
                  )}
                </WallMover>
              ))}
            </Fragment>
          )}
        </State>
      </World>
    </Wrapper>
  );
};

export default Usage;
