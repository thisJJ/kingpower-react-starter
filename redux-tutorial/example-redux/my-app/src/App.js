import React from 'react'
import KingpowerContainer from './container/Kingpower' // Kingpower.js
import { compose } from 'redux'
import withRedux from './withRedux' // withRedux.js

export default compose(withRedux())(() => (
  <KingpowerContainer />
))