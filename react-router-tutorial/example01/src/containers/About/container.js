import React from 'react';
import { Button } from 'antd'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as CounterActions from '~/actions';

import '~/static/Home.css';
class About extends React.Component {
  static async getInitialProps({ req, res, match}) {

    console.log('About getInitialProps')

    return {  };
  }

  render() {
    console.log('About props', this.props)
    return (
      <div>
        <Button onClick={ this.props.increment } type="primary">+</Button>
        { this.props.count }
        <Button onClick={ this.props.decrement } type="primary">-</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
