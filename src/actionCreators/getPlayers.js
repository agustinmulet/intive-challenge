function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var diffMonths = today.getMonth() - birthDate.getMonth();
  if (
    diffMonths < 0 ||
    (diffMonths === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}

export default function getPlayers() {
  return function(dispatch, getState) {
    fetch(
      "https://football-players-b31f2.firebaseio.com/players.json?print=pretty"
    )
      .then(response => response.json())
      .then(data => {
        const updatedPlayers = data.map(player => ({
          ...player,
          age: getAge(player.dateOfBirth)
        }));
        dispatch({ type: "CHANGE_PLAYERS", payload: updatedPlayers });
      });
  };
}
