import React, { useEffect } from "react";
import { Button, Form, Input, Row } from "antd";
import styles from "./index.module.css";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import { login } from "../../redux/reducers/authSlice";
import { useRouter } from "next/router";
import Link from "next/link";
import { CheckCircleOutline, CheckCircleFill } from "antd-mobile-icons";
import { Checkbox } from "antd-mobile";

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
        dispatch(
            login({
                email: values.username,
                password: values.password
            })
        );
    };

    return (
        <Form
            name="basic"
            initialValues={{
                remember: true
            }}
            onFinish={onFinish}
            autoComplete="off"
            className={styles["login-form"]}
        >
            <h2 className={styles["title"]}> Login </h2>
            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: "Please input your email!"
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
                    }
                ]}
            >
                <Input.Password
                    placeholder="Password"
                    className={styles["input"]}
                />
            </Form.Item>

            <Row justify="center" align="middle" style={{ height: "40px" }}>
                <Form.Item
                    name="remember"
                    valuePropName="checked"
                >
                    <Checkbox
                        className={styles["remember"]}
                        value="remember"
                        icon={(checked) =>
                            checked ? (
                                <CheckCircleFill style={{ color: "#FF7F3F" }} />
                            ) : (
                                <CheckCircleOutline style={{ color: "#FF7F3F" }} />
                            )
                        }
                    >
                        Remember me
                    </Checkbox>
                </Form.Item>
            </Row>

            <Form.Item
            >
                <Button
                    className={styles["submit"]}
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                >
                    Let's start cooking!
                </Button>
            </Form.Item>

            <Link href="/register">
                <a className={styles["signUp"]}>or Sign Up</a>
            </Link>
        </Form>
    );
};
