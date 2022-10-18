import React, { useEffect } from "react";
import { AuthLayout } from "../layouts/authLayout";
import { Button, Layout } from 'antd';
import { NextPage } from "next";
import styles from "../styles/logout.module.css";
import Link from "next/link";
import { LeftOutline } from "antd-mobile-icons";
const { Header, Content } = Layout;

const Logout: NextPage = () => {
    useEffect(() => {
        document.body.style.backgroundColor = "#FFF9EB";
    })
    return (
        <Layout>
            <Header className={styles["header"]}>
                <div>
                    <Link href="/">
                        <span className={styles["navBar"]}>
                            <LeftOutline />
                        </span>
                    </Link>
                </div>
            </Header>
            <Content className={styles["content"]}>
                <div className={styles["seeu"]}>
                    <h1>See u soon...</h1>
                </div>
                <div className={styles["logout"]}>
                <Link href="./openPage">
                    <Button type="dashed" block>
                        Log out
                    </Button>
                </Link>
            </div>
        </Content>
    </Layout >
    );
};

export default Logout;
