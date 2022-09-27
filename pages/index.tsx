import { NextPage } from "next";
import React from "react";
import { SearchBar } from "../components/searchBar";
import { Button, Layout } from "antd";
import styles from "../styles/index.module.css";
import Link from "next/link";
import { HistoryOutlined, UserOutlined } from "@ant-design/icons";
import FooterNavBar from "../components/footerNavBar";
import Category from "../components/category";
import { useRouter } from "next/router";

const { Header, Content, Footer } = Layout;

const Home: NextPage = () => {
    const router = useRouter();
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
                <div className={styles["searchBar"]}>
                    <SearchBar />
                </div>
                <div className={styles["category"]}>
                    <Category />
                </div>
            </Content>
            <Button onClick={() => router.push("./recipes")}>My Recipes</Button>
            <Footer className={styles["footer"]}>
                <FooterNavBar />
            </Footer>
        </Layout>
    );
};

export default Home;
