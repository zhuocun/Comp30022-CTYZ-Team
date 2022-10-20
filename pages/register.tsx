import React from "react";
import { AuthLayout } from "../layouts/authLayout";
import { RegisterForm } from "../components/registerForm";
import { NextPage } from "next";
import styles from "../styles/registerPage.module.css";

const Register: NextPage = () => {
    return (
        <AuthLayout isLogin = {false}>
            <div className={styles.component}>
                <RegisterForm />
            </div>
        </AuthLayout>
    );
};

export default Register;
