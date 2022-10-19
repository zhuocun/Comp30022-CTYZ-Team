import { NextPage } from "next";
import { useEffect } from "react";
import React from "react";
import { Layout, Image } from "antd";
import styles from "../styles/openPage.module.css";
import { Button, AutoCenter } from "antd-mobile";
import { useRouter } from "next/router";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Header, Content } = Layout;

const demoSrc = "../loginImg.jpg";

const Intro: NextPage = () => {
    const router = useRouter();

    useEffect(() => {
        document.body.style.backgroundColor = "#FFF9EB";
    }, []);

    return (
        <Layout>
            <Header className={styles["header"]}>
                <div>
                    <Link href="/login">
                        <span className={styles["user"]}>
                            <UserOutlined />
                        </span>
                    </Link>
                </div>

            </Header>
            <Content className={styles["content"]}>
                <div>
                    <h1 className={styles["heading"]}>
                        Your Own Recipe Manager
                    </h1>

                    <Image
                        className={styles["img"]}
                        src={demoSrc}
                        preview={false}
                    />
                    <hr className={styles["horizontalLine"]} />
                    <p className={styles["introText"]}>
                        Recipes that make an extraordinary taste on the tongue
                    </p>
                    <AutoCenter>
                        <Button
                            className={styles["button"]}
                            onClick={() => router.push("/login")}
                        >
                            LET'S COOK
                        </Button>
                    </AutoCenter>
                </div>
            </Content>
        </Layout>
    );
};

export default Intro;
