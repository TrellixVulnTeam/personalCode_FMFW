import React from "react";
import { Form, Input, Button } from "antd";
import { connect } from 'react-redux'
import userAction from './../store/actionCreators/user'
import { setItem } from './../utils/common'

const mapDispatchToProps = (dispatch) => {
  return {
    login(values) {
      return dispatch(userAction(values))
    }
  }
}

const Login =  (props) => {
  const onFinish = (values) => {
    console.log("Success:", values);
    props.login(values).then(res => {
      console.log(res)
      //在这里将用户信息存储到本地的cookie中，并且跳转页面
      setItem('adminname', res.adminname)
      setItem('role', res.roleid)
      setItem('token', res.token)
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="loginpage">
      <div className="loginCom">
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
          <h1 style={{ textAlign:'center', marginBottom: '30px' }}>JD_ADMIN</h1>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "请输入账号!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "请输入密码!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Login);
