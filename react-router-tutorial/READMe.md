## React router

#### Usage
```
import { .... } from 'react-router-dom'
```

#### Function

```javascript
// src/routers.js
// Set main App route
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

```

```javascript
// src/App.js
// Set switch component/container render
<Switch>
  <Route
    path="/"
    exact={ true }
    render={() => <div>Is home</div>}
  />
  <Route
    path="/about"
    exact={ true }
    render={() => <div>Is about</div>}
  />
  <Route
    path="/about/:component"
    exact={ true }
    component={ About }
  />
  <Route
    path="/:error"
    exact={ false }
    render={() => <div>Is Error</div>}
  />
</Switch>
```
---------
#### Route Props
---------
##### exact
```javascript
default: true
```
<pre>
if the entire URL was matched 
</pre>

Example
```javascript
<Route
  path="/about/:component"
  exact={ true }
  component={ About }
/>
```

```text
True url : www.kingpower.com/about/a/b/b
```
---------
```javascript
<Route
  path="/about/:component"
  exact={ false }
  component={ About }
/>
```

```text
True url : www.kingpower.com/about/a
False url : www.kingpower.com/about/a/b/b
```
---------