import React, { Component } from "react";
import "./App.css";
import { Col, Container, Navbar, NavbarBrand, Row } from "reactstrap";
import PlayersForm from "./PlayersForm";
import VisiblePlayers from "./containers/VisiblePlayers";
import getPlayers from "./actionCreators/getPlayers";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.getPlayers();
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="lg">
          <NavbarBrand href="/">Site Title</NavbarBrand>
        </Navbar>

        <Container>
          <Row>
            <Col>
              <h1 id="title">Football player finder</h1>
            </Col>
          </Row>
          <PlayersForm />
          <VisiblePlayers />
        </Container>
      </div>
    );
  }
}

export default connect(
  state => state,
  { getPlayers }
)(App);
