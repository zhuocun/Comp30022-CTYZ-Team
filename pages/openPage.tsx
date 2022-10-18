import { NextPage } from "next";
import { useReduxDispatch, useReduxSelector } from "../redux/hooks";
import { useEffect } from "react";
import { getRecipeList } from "../redux/reducers/recipeSlice";
import React from "react";
import { Layout, Image } from "antd";
import styles from "../styles/openPage.module.css";
import { Button, AutoCenter } from "antd-mobile";
import { useRouter } from "next/router";
import { UserOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;

const demoSrc = "../loginImg.jpg";

const OpenPage: NextPage = () => {
    const jwtToken = useReduxSelector((s) => s.authentication.jwtToken);
    const dispatch = useReduxDispatch();
    const router = useRouter();

    useEffect(() => {
        document.body.style.backgroundColor = "#FFF9EB";
        if (jwtToken) {
            dispatch(
                getRecipeList({
                    jwtToken,
                    keywords: undefined,
                    categoryId: undefined
                })
            );
        }
    }, [jwtToken]);

    return (
        <Layout>
            <Header className={styles["header"]}>
                <Button className={styles["user"]} onClick={() => router.push("/")}>
                    <span className={styles["user"]}>
                        <UserOutlined />
                    </span>
                </Button>
            </Header>
            <Content className={styles["content"]}>
                <div>
                    <h1 className={styles["heading"]}>
                        Your Own Recipe Manager
                    </h1>

                    <Image className={styles["img"]} src={demoSrc} preview={false}/>
                    <hr className={styles["horizontalLine"]} />
                    <p className={styles["introText"]}>
                        Recipes that make an extraordinary taste on the tongue
                    </p>
                    <AutoCenter>
                        <Button
                            className={styles["button"]}
                            onClick={() => router.push("/")}
                        >
                            LET'S COOK
                        </Button>
                    </AutoCenter>
                </div>
            </Content>
        </Layout>
    );
};

export default OpenPage;
