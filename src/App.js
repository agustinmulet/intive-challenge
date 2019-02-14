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
          {/*this.state.loaded === null ? (
          <PlayersTable />
                <h3>
                  Please insert data to search, or search with empty inputs to
                  get the full list of players.
                </h3>
              ) : !this.state.loaded ? (
                <React.Fragment>
                  <ReactLoading color="#343A40" className="loader" />
                  <h3>Loading...</h3>
                </React.Fragment>
              ) : this.state.players.length > 0 ? (
                <PlayersTable players={this.state.players} />
              ) : (
                <h3>No results found.</h3>
              )*/}
        </Container>
      </div>
    );
  }
}

export default connect(
  state => state,
  { getPlayers }
)(App);
