import React from "react";
import { AuthLayout } from "../layouts/authLayout";
import { LoginForm } from "../components/loginForm";

const Login = () => {
    return (
        <AuthLayout>
            <LoginForm />
        </AuthLayout>
    );
};

export default Login;
