import { Button, Form, Input } from "antd";
import React from "react";
import styles from "./index.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import openNotification from "../../utils/Notification";

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
            openNotification("Registration Successful!", "success");
            router.push("/login/").then();
        } catch (error) {
            openNotification("Registration Failed", "error");
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
                rules={[
                    {
                        required: true,
                        message: "Please input your name!"
                    }
                ]}
            >
                <Input placeholder="Username" className={styles["input"]} />
            </Form.Item>

            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: "Please input your email!"
                    },
                    {
                        type: "email",
                        message: "The input is not valid email"
                    }
                ]}

            >
                <Input placeholder="Email" className={styles["input"]} />
            </Form.Item>


            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: "Please input your password!"
                    },
                    { min: 6, message: "Password with at least 6 character" }
                ]}
            >
                <Input.Password placeholder="Password" className={styles["input"]} />

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
