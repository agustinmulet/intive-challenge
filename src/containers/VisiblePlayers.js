import { connect } from "react-redux";
import PlayersTable from "../PlayersTable";
import { VisibilityFilters } from "../actionCreators";

const getVisiblePlayers = (players, filter, state) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      console.log("all");
      return players;
    case VisibilityFilters.SHOW_FILTERED:
      const { age, position, name } = state;
      return players.filter(
        player =>
          (age.length > 0 ? player.age === parseInt(age) : true) &&
          (name.toLowerCase().length > 0
            ? player.name.toLowerCase().includes(name.toLowerCase())
            : true) &&
          (position.length > 0 ? player.position === position : true)
      );
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => ({
  players: getVisiblePlayers(state.players, state.visibilityFilter, state)
});

export default connect(mapStateToProps)(PlayersTable);
