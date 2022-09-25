import React from "react";
import { AuthLayout } from "../layouts/authLayout";
import ECookLogo from "/public/logoMedium.svg";
import { RegisterForm } from "../components/registerForm";
import { NextPage } from "next";

const Register: NextPage = () => {
    return (
        <AuthLayout>
            <ECookLogo />
            <RegisterForm />
        </AuthLayout>
    );
};

export default Register;
