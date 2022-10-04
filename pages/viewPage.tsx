import { NextPage } from "next";
import React from "react";
import { Layout } from "antd";
import styles from "../styles/viewPage.module.css";
import ViewPageHeader from "../components/viewPageHeader";
import TimeAndServing from "../components/timeAndServing";
import ViewIngredients from "../components/viewIngredients";
import ViewMethods from "../components/viewMethods";
import ViewTags from "../components/viewTags";
import BackStory from "../components/backStory";

const { Header, Content, Footer } = Layout;

const ViewPage: NextPage = () => {
    return (
        <Layout>
            <Header className={styles["header"]}>
                <ViewPageHeader />
            </Header>
            <Content className={styles.content}>
                <ViewTags />
                <div className={styles["timeAndServing"]}>
                    <TimeAndServing />
                </div>
                <ViewIngredients />
                <ViewMethods />
                <div className={styles["backStory"]}>
                    <BackStory />
                </div>
            </Content>
            <Footer className={styles.footer}>footer</Footer>
        </Layout>
    );
};

export default ViewPage;
