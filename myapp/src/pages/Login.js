import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const navigate = useNavigate();

  const onFinish = (values) => {
    if (values.username === "admin" && values.password === "password123") {
      console.log("Login Successfull...!");
      props.auth();
      navigate("/home");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Login Failed!", errorInfo);
  };
  return (
    <div style={{ marginTop: "30px" }}>
      <Paper
        className="login-paper"
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 300,

          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please Input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Log In
            </Button>
            <br />
            <br />
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </Paper>
    </div>
  );
};
