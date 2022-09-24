import React from "react";
import { AuthLayout } from "../layouts/authLayout";
import { RegisterForm } from "../components/registerForm";

const Register = () => {
    return (
        <AuthLayout>
            <RegisterForm />
        </AuthLayout>
    );
};

export default Register;
