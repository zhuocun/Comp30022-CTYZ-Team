import { Button, Form, Input } from "antd";
import React from "react";
import styles from "./index.module.css";
import axios from "axios";
import { useRouter } from "next/router";

export const RegisterForm: React.FC = () => {
    const router = useRouter();

    const onFinish = async (values: {
        email: string,
        password: string,
        name: string
    }) => {
        console.log("Success:", values);
        try {
            await axios.post("https://itproject-online-cookbook.herokuapp.com/api/v1/auth/register", {
                name: values.name,
                email: values.email,
                password: values.password
            });
            router.push("/login/").then();
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
                name="name"
                // hasFeedback
                rules={[
                    {
                        required: true,
                        message: "Please input your name!"
                    }
                ]}
            >
                <Input placeholder="Username" className={styles["input"]}/>
            </Form.Item>

            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: "Please input your email!"
                    }
                ]}
                
            >
                <Input placeholder="Email" className={styles["input"]}/>
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

            <p className={styles["warning"]}>Password with at list 6 character</p>

            <Form.Item
            >
                <Button type="primary" htmlType="submit" className={styles["submit"]}>
                    Create Account
                </Button>
            </Form.Item>
        </Form>
    );
};
