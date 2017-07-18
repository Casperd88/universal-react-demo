import React from 'react';
import {connect} from 'react-redux';
import {counterActions} from './../actions/counterActions';
import {Link} from 'react-router-dom';

export const Header = connect(
  ({counterReducer}) => ({count: counterReducer}),
  dispatch => ({
    increment: () => dispatch(counterActions.increment()),
    decrement: () => dispatch(counterActions.decrement())
  })
)(({count, increment, decrement}) => (
    <div className="row">
      <div className="col-md-6">
        <h1>Hello React Universe!</h1>
        <Link to="/">Home</Link> | <Link to="/contact">Contact</Link>
      </div>
      <div className="col-md-6 text-right">
        <h3>{count}</h3>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
));
