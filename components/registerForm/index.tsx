import { Button, Checkbox, Form, Input, Row, Col } from "antd";
import React from "react";
import styles from "./index.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import { Content } from "antd/lib/layout/layout";

export const RegisterForm: React.FC = () => {
    const router = useRouter();

    const onFinish = async (values: {
        username: string,
        password: string,
        confirm: string
    }) => {
        console.log("Success:", values);
        try {
            await axios.post("", {
                email: values.username,
                password: values.password,
                confirmPassword: values.confirm
            });
            router.push("/Login/").then();
        } catch (error) {
            alert("Register failed");
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <Form
            name="basic"
            initialValues={{
                remember: true
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className={styles["register-form"]}
        >
            <h2 className={styles["title"]}> Sign Up </h2>
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: "Please input your username!"
                    }
                ]}
                
            >
                <Input placeholder="Username" className={styles["input"]}/>
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
                name="confirm"
                // hasFeedback
                rules={[
                    {
                        required: true,
                        message: "Please confirm your password!"
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                                return Promise.resolve();
                            } else {
                                return Promise.reject("Confirmation failed");
                            }
                        }
                    })
                ]}
            >
                <Input.Password placeholder="Confirm Password" className={styles["input"]}/>
            </Form.Item>


            <Form.Item
            >
                <Button type="primary" htmlType="submit" className={styles["submit"]}>
                    Create Account
                </Button>
            </Form.Item>
        </Form>
    );
};
