import { NextPage } from "next";
import { useReduxDispatch, useReduxSelector } from "../redux/hooks";
import { useEffect } from "react";
import React from "react";
import { SearchBar } from "../components/searchBar";
import { Layout } from "antd";
import styles from "../styles/index.module.css";
import Link from "next/link";
import {
    HistoryOutlined,
    UserOutlined,
} from "@ant-design/icons";
import FooterNavBar from "../components/footerNavBar";

const { Header, Content, Footer } = Layout;

const Home: NextPage = () => {
    return (
        <Layout>
            <Header className={styles["header"]}>
                <div className={styles["headerNav"]}>
                    <Link href="/">
                        <span className={styles["user"]}>
                            <UserOutlined />
                        </span>
                    </Link>
                    <h1 className={styles.pageTitle}>What to eat?</h1>
                    <Link href="/">
                        <span className={styles["shoppingList"]}>
                            <HistoryOutlined />
                        </span>
                    </Link>
                </div>
            </Header>
            <Content className={styles["content"]}>
                <div>
                    <SearchBar />
                </div>
                content
            </Content>
            <Footer className={styles["footer"]}>
                <FooterNavBar />
            </Footer>
        </Layout>
    );
};

export default Home;
