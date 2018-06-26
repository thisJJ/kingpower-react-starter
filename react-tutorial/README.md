
# React Tutorial

### อ่านก่อนเรียนรู้

<p><details>
  <summary><b>การติดตั้ง Node.js, React และอื่น ๆ</b></summary>
  <div>
    ยังไม่มีข้อมูล
  </div>
</details></p>

<p><details>
  <summary><b>การทำแบบทดสอบ</b></summary>
  <div>
    ยังไม่มีข้อมูล</div>
</details></p>

<p><details>
  <summary><b>เริ่มทำแบบทดสอบ</b></summary>
  <div>
    ยังไม่มีข้อมูล</div>
</details></p>

### ทำความรู้จักโครงสร้าง React

#### React Class
```javascript
class KingpowerApp extends React.Component {
  render() {
    return (
      <div>
        Hello Kingpower
      </div>
    )
  }
}

export default KingpowerApp
```

#### Import other file, component, class, function
```javascript
import { XXX } from './file/a'
import YYY from './file/b'

import { AAA } from 'react-a'
import ZZZ from 'react-z'

// กรณีต้องการเปลี่ยนชื่อเพื่อไม่ให้มีการตั้งชื่อซ้ำกัน
import { AAA as BBB } from 'react-a' // AAA จะกลายเป็นชื่อ BBB
```

#### Using state
```javascript
class Kingpower extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    }
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => this.setState({value: 'X'})}
      >
        {this.state.value}
      </button>
    )
  }
}
```

#### Manage state
```javascript
class Kingpower extends React.Component {
  .
  .
  .
  
  manageState = () => {
    this.setState({
      value: true
    })
  }
  
  .
  .
}
```

#### Bypass props to using in other Component
```javascript
// index.js
import React from 'react'
import KingpowerComponent from './Kingpower' // Kingpower.js

export default class KingpowerApp extends React.Component {
  render(){
    return(
      <KingpowerComponent
        title="Kingpower"
        description="King of Dutyfree"
      />
    )
  }
}


// Kingpower.js
import React from 'react'
import PropTypes from 'prop-types'
const KingpowerComponent = ({
  title,
  description,
}) => {
  return (
    <div>
      <title>{ title }</title>
      <meta type="description">{ description }</meta>
    </div>
  )
}

KingpowerComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default KingpowerComponent

```

#### PropTypes
|Types|Description|
|:-----|:----|
|string|ข้อความ|
|number|ตัวเลข|
|object|อ็อบเจค|
|array|อาเรย์|
|node|ใช้กับ children|
|oneOfType|ทำให้กำหนดได้หลาย types|


