import React from "react";
import { LeftOutline } from "antd-mobile-icons";
import styles from "./index.module.css";
import { Layout } from "antd";
import Link from "next/link";
import ECookLogo from "/public/logoMedium.svg";

const { Header, Content } = Layout;

interface PropsType {
    isLogin: boolean;
    children: React.ReactNode;
}

export const AuthLayout: React.FC<PropsType> = (props) => {
    return (
        <Layout className={props.isLogin ? styles["user-layout-container_login"] : styles["user-layout-container_register"]}>
            <Header className={styles["header"]}>
                <div>
                    <Link href="/intro">
                        <span className={styles["navBar"]}>
                            <LeftOutline />
                        </span>
                    </Link>
                </div>
            </Header>
            <Content className={styles["content"]}>
                <div className={styles["top"]}>
                    <div className={styles["logo"]}>
                        <ECookLogo />
                    </div>
                    {props.children}
                </div>
            </Content>
        </Layout>
    );
};
