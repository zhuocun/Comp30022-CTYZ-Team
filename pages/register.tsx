import React from "react";
import { AuthLayout } from "../layouts/authLayout";
import { RegisterForm } from "../components/registerForm";
import { NextPage } from "next";

const Register: NextPage = () => {
    return (
        <AuthLayout>
            <RegisterForm />
        </AuthLayout>
    );
};

export default Register;
