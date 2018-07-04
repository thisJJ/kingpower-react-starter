import React from 'react'
import App from '~/App'
import { NavLink } from 'react-router-dom';
import About from '~/containers/About/container'

const Register = () => {
  return(
    <div>Register Page .... (<NavLink to='/'>Home</NavLink>)</div>
  )
}
export default [
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/about',
        render: () => <div>Is count { this.props.count }</div>
      },
      {
        path: '/about/:component',
        component: About
      },
    ]
  },
  {
    path: '/:error',
    render: () => <div>Is Error</div>
  },
];
