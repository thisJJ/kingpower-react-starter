import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as CounterActions from '~/actions';

import logo from '~/static/react.svg';
import '~/static/Home.css';
import About from '~/containers/About/container'

import { NavLink, Route, Switch } from 'react-router-dom';
class App extends React.Component {
  static async getInitialProps({ req, res, match}) {
    // console.log('res', res)
    // console.log('store ', match)

    console.log('App getInitialProps', match)

    return { };
  }

  componentDidMount = () => {
    console.log('componentDidMount', this.props)
    this.props.loadCount()
  }

  render() {
    console.log('App props', this.props)
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Razzle</h2>
        </div>
        <ul className="Home-resources">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/about/component">About and Home Container</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </ul>
        <div>
          <Switch>
            <Route
              path="/"
              exact
              render={() => <div>Is home</div>}
            />
            <Route
              path="/about"
              exact
              render={() => <div>Is count { this.props.count }</div>}
            />
            <Route
              path="/about/:component"
              exact
              component={ About }
            />
            <Route
              path="/:error"
              render={() => <div>Is Error</div>}
            />
          </Switch>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  count: state.counter.count,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
