import { NextPage } from "next";
import React from "react";
import { Layout, Row } from "antd";
import styles from "../styles/viewPage.module.css";
import { Image, Space } from "antd-mobile";
import { LeftOutline, SendOutline } from "antd-mobile-icons";
import Link from "next/link";
import ECookLogo from "/public/logo.svg";
import { CarryOutOutlined, HeartOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const demoSrc =
    "https://cookingwithayeh.com/wp-content/uploads/2021/11/Spicy-Tuna-Crispy-Rice.jpg";

const ViewPage: NextPage = () => {
    // const jwtToken = useReduxSelector((s) => s.authentication.jwtToken);
    // const dispatch = useReduxDispatch();

    // useEffect(() => {
    //     if (jwtToken) {
    //         dispatch(getRecipeList({ jwtToken, keywords: undefined }));
    //     }
    // }, [jwtToken]);

    return (
        <Layout>
            <Header className={styles["header"]}>
                <div className={styles["navigation"]}>
                    <Link href="/recipes">
                        <span >
                            <LeftOutline className={styles["return"]}/>
                        </span>
                    </Link>
                    <ECookLogo />
                    <Link href="/">
                        <span >
                            <SendOutline className={styles["share"]}/>
                        </span>
                    </Link>
                </div>
                <div style={{ userSelect: "none" }} className={styles["img"]}>
                    <Image src={demoSrc} className={styles["image"]}/>
                </div>
                <div className={styles["functions"]}>
                
                        <CarryOutOutlined className={styles["complete"]} twoToneColor="yellow"/>
               
                    <div className={styles["title"]}>
                    <h1>Spicy Tuna Cripsy Rice</h1>
                    </div>
              
                        <HeartOutlined className={styles["favorite"]}/>
                  
                </div>
            </Header>
            <Content className={styles.content}>content</Content>
            <Footer className={styles.footer}>footer</Footer>
        </Layout>
    );
};

export default ViewPage;
