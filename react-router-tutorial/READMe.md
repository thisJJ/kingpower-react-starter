## React router

### Usage
```
import { .... } from 'react-router-dom'
```

### Function

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
### Route Props
---------
#### exact
```javascript
default: false
```
<pre>
if the entire URL was matched 
</pre>

###### Example

```javascript
// fixed params
<Route
  path="/about/:component"
  exact={ true }
  component={ About }
/>
```

```text
True url : www.kingpower.com/about/a
Fail url : www.kingpower.com/about/a/b
Fail url : www.kingpower.com/about/a/b/c

```


```javascript
// this.props
// www.kingpower.com/about/a
{
  match: {
    isExact: true,
    params: {
      component: "a",
    },
    path: "/about/:component",
    url: "about/a"
  }
}

// www.kingpower.com/about/a/b
{
  match: {
    isExact: true,
    params: {
      component: "a",
    },
    path: "/about/:component",
    url: "about/a/b"
  }
}

// www.kingpower.com/about/a/b/c
{
  match: {
    isExact: true,
    params: {
      component: "a",
    },
    path: "/about/:component",
    url: "about/a/b/c"
  }
}
```

---------


```javascript
// fixed params
<Route
  path="/about/:component/:id/:name"
  exact={ true }
  component={ About }
/>
```

```text
True url : www.kingpower.com/about/a
True url : www.kingpower.com/about/a/b
True url : www.kingpower.com/about/a/b/c
Fail url : www.kingpower.com/about/a/b/c/d

```


```javascript
// this.props
// www.kingpower.com/about/a
{
  match: {
    isExact: true,
    params: {
      component: "a",
    },
    path: "/about/:component",
    url: "about/a"
  }
}

// www.kingpower.com/about/a/b
{
  match: {
    isExact: true,
    params: {
      component: "a",
      id: "b"
    },
    path: "/about/:component",
    url: "about/a/b"
  }
}

// www.kingpower.com/about/a/b/c
{
  match: {
    isExact: true,
    params: {
      component: "a",
      id: "b",
      name: "c"
    },
    path: "/about/:component",
    url: "about/a/b/c"
  }
}
```

---------

```javascript
// relative params
<Route
  path="/about/:component"
  exact={ false }
  component={ About }
/>
```

```text
True url : www.kingpower.com/about/a
True url : www.kingpower.com/about/a/b
True url : www.kingpower.com/about/a/b/c
```

```javascript
// this.props
// www.kingpower.com/about/a
{
  match: {
    isExact: false,
    params: {
      component: "a",
    },
    path: "/about/:component",
    url: "about/a"
  }
}

// www.kingpower.com/about/a/b
{
  match: {
    isExact: false,
    params: {
      component: "a",
    },
    path: "/about/:component",
    url: "about/a/b"
  }
}

// www.kingpower.com/about/a/b/c
{
  match: {
    isExact: false,
    params: {
      component: "a",
    },
    path: "/about/:component",
    url: "about/a/b/c"
  }
}
```
---------