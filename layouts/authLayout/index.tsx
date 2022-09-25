import React from "react";
import { LeftOutline } from "antd-mobile-icons";
import styles from "./index.module.css";
import { Layout } from "antd";
import Link from "next/link";
import Footer from "../../components/footer";
import ECookLogo from "/public/logoMedium.svg";

const { Header, Content } = Layout;

interface PropsType {
    children: React.ReactNode;
}

export const AuthLayout: React.FC<PropsType> = (props) => {
    return (
        <Layout className={styles["user-layout-container"]}>
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
                <div className={styles["top"]}>
                    <div className={styles["logo"]}>
                        {" "}
                        <ECookLogo />{" "}
                    </div>
                    {props.children}
                </div>
            </Content>
            <Footer />
        </Layout>
    );
};
