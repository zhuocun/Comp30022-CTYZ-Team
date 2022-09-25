import { Layout } from "antd";
import React from "react";
import ECookLogo from "/public/logoMedium.svg";
import { LoginForm } from "../components/loginForm";
import styles from "../styles/loginPage.module.css";
import { NextPage } from "next";

const { Header, Content, Footer } = Layout;

const LoginPage: NextPage = () => {
    return (
        <Layout>
            <Header className={styles.header}>

            </Header>

            <Content className={styles.content}>
                <ECookLogo />
                <LoginForm />
            </Content>
            <Footer className={styles.footer}></Footer>
        </Layout>
    );
};

export default LoginPage;