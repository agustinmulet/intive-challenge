export default function name(state = [], action) {
  switch (action.type) {
    case "CHANGE_PLAYERS":
      return action.payload;
    default:
      return state;
  }
}
