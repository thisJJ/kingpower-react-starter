import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import logo from '~/static/react.svg'
import '~/static/Home.css'
import { NavLink, Route, Switch } from 'react-router-dom'
class App extends React.Component {


  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Kingpower Test</h2>
        </div>
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
        <div>
          <Switch>
            <Route
              path="/"
              exact
              render={() => <div>Is home</div>}
            />
          </Switch>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
