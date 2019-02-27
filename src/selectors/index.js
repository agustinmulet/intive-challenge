import { createSelector } from "reselect";

const getVisiblePlayers = state => {
  const { age, position, name, players } = state;
  return players.filter(
    player =>
      (age.length > 0 || !age === "" ? player.age === parseInt(age) : true) &&
      (name.toLowerCase().length > 0 || !name === ""
        ? player.name.toLowerCase().includes(name.toLowerCase())
        : true) &&
      (position.length > 0 || !position === ""
        ? player.position === position
        : true)
  );
};

const makeGetVisiblePlayers = () => {
  return createSelector(
    [getVisiblePlayers],
    players => {
      return players;
    }
  );
};

export default makeGetVisiblePlayers;
