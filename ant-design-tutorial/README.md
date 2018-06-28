# Ant Design Tutorial

#### Menu
- [Setup library](#how-to-use)
- [Usage](#usage)
- [Getting started](#getting-started)
- [Antd Form structure](#antd-form-structure)

#### Setup library
```
npm i --save antd
```

#### Usage
Use <a href="https://github.com/ant-design/babel-plugin-import">babel-plugin-import</a>

```
npm install babel-plugin-import --save-dev
```

Add import stylesheetsinto _Document.js (Next.js)
```javascript
// _Document.js
import 'antd/dist/antd.css'
```

Custom .babelrc
```json
{
  "plugins": [
    [
      "import", {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": "css" 
      }
    ]
  ]
}
```

#### Getting started

##### Create form
```javascript
import React from 'react'
import { Form, Input } from 'antd'
const FormItem = Form.Item

class LoginForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      } else {
        console.log('Have sone error: ', err);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit}>
        <div>E-mail</div>
        <FormItem>
          { getFieldDecorator('email', {
            rules: [{
              type: 'email',
              message: 'The input is not valid E-mail!',
            }, {
              required: true,
              message: 'Please input your E-mail!',
            }],
          })(
            <Input type="text" />
          ) }
        </FormItem>

        <div>Password</div>
        <FormItem>
          { getFieldDecorator('email', {
            rules: [{
              required: true,
              message: 'Please input your E-mail!',
            }],
          })(
            <Input type="password" />
          ) }
        </FormItem>

        <FormItem>
          <Button htmlType="submit">Login</Button>
        </FormItem>
      </Form>
    )
  }
}

export const LoginFormContainer = Form.create()(LoginForm)
```

#### Antd Form structure

| Name  | Description |
|:--|:--|
| Form | Create form store |
| Form.Item | Is form control mustbe child of Form.Item and you can using validation or form rule |
| getFieldDecorator | Manage rule of Form.Item |