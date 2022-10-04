import { NextPage } from "next";
import { useReduxDispatch, useReduxSelector } from "../redux/hooks";
import { useEffect } from "react";
import { getRecipeList } from "../redux/reducers/recipeSlice";
import React from "react";
import { Layout, Row } from "antd";
import styles from "../styles/openPage.module.css";
import LogoLarge from "../public/logoLarge.svg";
import { Button } from "antd";
import { LeftOutline } from "antd-mobile-icons";
import Link from "next/link";

const { Header, Content, Footer } = Layout;

const OpenPage: NextPage = () => {
    const jwtToken = useReduxSelector((s) => s.authentication.jwtToken);
    const dispatch = useReduxDispatch();

    useEffect(() => {
        if (jwtToken) {
            dispatch(getRecipeList({ jwtToken, keywords: undefined, categoryId: undefined }));
        }
    }, [jwtToken]);

    return (
        <Layout>
            <Header className={styles["header"]}>
                <Link href="/">
                    <span className={styles["navBar"]}>
                        <LeftOutline />
                    </span>
                </Link>
            </Header>
            <Content className={styles.content}>
                <Row className={styles.bigLogo} align="middle" justify="center">
                    <LogoLarge />
                </Row>
            </Content>
            <Footer className={styles.footer}>
                <Row align="middle" justify="center">
                    <Link href="/login">
                        <Button className={styles.signIn} type="primary">
                            Sign In
                        </Button>
                    </Link>
                </Row>
                <Row align="middle" justify="center">
                    <Link href="/register">
                        <Button className={styles.signUp} type="primary">
                            Sign Up
                        </Button>
                    </Link>
                </Row>
            </Footer>
        </Layout>
    );
};

export default OpenPage;
