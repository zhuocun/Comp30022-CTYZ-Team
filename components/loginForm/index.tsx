import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import styles from "./index.module.css";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import { login } from "../../redux/reducers/authSlice";
import { useRouter } from "next/router";

export const LoginForm: React.FC = () => {
    const loading = useReduxSelector((s) => s.authentication.loading);
    const jwtToken = useReduxSelector((s) => s.authentication.jwtToken);

    const dispatch = useReduxDispatch();
    const router = useRouter();

    useEffect(() => {
        if (jwtToken !== null) {
            router.push("/").then();
        }
    }, [jwtToken]);

    const onFinish = (values) => {
        console.log("Success:", values);
        dispatch(
            login({
                email: values.username,
                password: values.password
            })
        );
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{
                span: 8
            }}
            wrapperCol={{
                span: 16
            }}
            initialValues={{
                remember: true
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className={styles["login-form"]}
        >
            <h2 className={styles["title"]}> Login </h2>
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: "Please input your username!"
                    }
                ]}
            >
                <Input placeholder= "Username" className={styles["input"]}/>
            </Form.Item>

            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: "Please input your password!"
                    }
                ]}
            >
                <Input.Password placeholder="Password" className={styles["input"]}/>
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 8,
                    span: 16
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16
                }}
            >
                <Button className={styles["submit"]} type="primary" htmlType="submit" loading={loading}>
                    Let's start cooking!
                </Button>
            </Form.Item>
        </Form>
    );
};
