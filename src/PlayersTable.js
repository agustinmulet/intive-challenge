import React from "react";
import { Col, Row, Table } from "reactstrap";

class PlayersTable extends React.Component {
  render() {
    return (
      <Row>
        <Col className="text-center">
          {this.props.players.length ? (
            <Table bordered striped responsive id="players-table">
              <thead>
                <tr>
                  <th>Player</th>
                  <th>Position</th>
                  <th>Nationality</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                {this.props.players.map(player => (
                  <tr key={player.name}>
                    <td>{player.name}</td>
                    <td>{player.position}</td>
                    <td>{player.nationality}</td>
                    <td>{player.age}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <React.Fragment>Not found</React.Fragment>
          )}
        </Col>
      </Row>
    );
  }
}

export default PlayersTable;
