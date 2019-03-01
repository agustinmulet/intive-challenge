import React, { Component } from "react";
import { Button, Col, Form, Input, Row } from "reactstrap";
import { connect } from "react-redux";
import changeName from "./actionCreators/changeName";
import changePosition from "./actionCreators/changePosition";
import changeAge from "./actionCreators/changeAge";

class PlayersForm extends Component {
  render() {
    return (
      <Row>
        <Col>
          <Form onSubmit={this.props.handleSubmit} inline={true} id="form">
            <Col xs="auto" md="3">
              <Input
                id="playerName"
                type="text"
                defaultValue=""
                onKeyDown={this.props.handleName}
                placeholder="Player Name"
              />
            </Col>
            <Col xs="auto" md="3" className="text-center">
              <Input id="playerPosition" type="select" defaultValue="">
                <option value=""> Select position </option>
                <option value="Attacking Midfield"> Attacking Midfield </option>
                <option value="Central Midfield"> Central Midfield </option>
                <option value="Centre-Back"> Centre - Back </option>
                <option value="Centre-Forward"> Centre - Forward </option>
                <option value="Defensive Midfield"> Defensive Midfield </option>
                <option value="Keeper"> Keeper </option>
                <option value="Left Midfield"> Left Midfield </option>
                <option value="Left Wing"> Left Wing </option>
                <option value="Left-Back"> Left - Back </option>
                <option value="Right-Back"> Right - Back </option>
              </Input>
            </Col>
            <Col xs="auto" md="3">
              <Input
                id="playerAge"
                type="text"
                defaultValue=""
                pattern="[0-9]*"
                onKeyDown={this.props.handleAge}
                placeholder="Age"
                maxLength={2}
              />
            </Col>
            <Col xs="auto" md="3" className="text-center">
              <Button type="submit" value="Search" size="lg" id="button">
                Search
              </Button>
            </Col>
          </Form>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ name, position, age }) => ({
  name,
  position,
  age
});

const mapDispatchToProps = dispatch => ({
  handleName(event) {
    const re = /^[a-zA-Z ]*$/;
    if (!re.test(event.key)) {
      event.preventDefault();
    }
  },
  handleAge(event) {
    const reg = /^[0-9]+$/;
    if (!(reg.test(event.key) || event.key === "Backspace")) {
      event.preventDefault();
    }
  },
  handleSubmit(event) {
    event.preventDefault();
    const { playerName, playerPosition, playerAge } = event.target;
    if (
      (playerAge.value >= 18 && playerAge.value <= 40) ||
      playerAge.value === ""
    ) {
      dispatch(changeName(playerName.value));
      dispatch(changePosition(playerPosition.value));
      dispatch(changeAge(playerAge.value));
    } else {
      alert("Sorry but the age must be between 18 and 40.");
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayersForm);
