import { connect } from "react-redux";
import PlayersTable from "../PlayersTable";
import makeGetVisiblePlayers from "../selectors";

const makeMapStateToProps = () => {
  const getVisiblePlayers = makeGetVisiblePlayers();
  const mapStateToProps = state => {
    return {
      players: getVisiblePlayers(state)
    };
  };
  return mapStateToProps;
};

const VisiblePlayers = connect(makeMapStateToProps)(PlayersTable);

export default VisiblePlayers;
