import React from 'react'
import App from '~/App'
import { NavLink } from 'react-router-dom';
const Register = () => {
  return(
    <div>Register Page .... (<NavLink to="/">Home</NavLink>)</div>
  )
}
export default [
  {
    path: '/register',
    exact: true,
    component: Register,
  },
  {
    path: '/',
    component: App,
  },
];
