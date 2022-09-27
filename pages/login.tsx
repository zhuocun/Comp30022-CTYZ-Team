import React from "react";
import { AuthLayout } from "../layouts/authLayout";
import { LoginForm } from "../components/loginForm";
import styles from "../styles/loginPage.module.css";
import { NextPage } from "next";

const LoginPage: NextPage = () => {
    return (
        <AuthLayout isLogin = {true}>
            <div className={styles.component}>
                <LoginForm />
            </div>
        </AuthLayout>
    );
};

export default LoginPage;
