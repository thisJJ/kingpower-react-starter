# Unit Test Tutorial

### Tools
- Jest (http://jestjs.io/)
```
npm i --save-dev jest babel-jest
```

ปรับ package.json ให้สามารถ run test ได้
```
{
  "scripts": {
    "test": "jest"
  }
}
```

#### โครงสร้างการทำตัวเทส
```
- สคริปต์สำหรับเทสจะอยู่ภายในโฟลเดอร์ __TEST__ เท่านั้น
- รูปไฟล์สำหรับเทส Reducer "reducer.test.js"
- รูปไฟล์สำหรับเทส Selector "selector.test.js"
- รูปไฟล์สำหรับเทส Function "function.test.js"
```

#### การสร้างเทส Reducer
```javascript
import {
  action,
  reducer
}
```