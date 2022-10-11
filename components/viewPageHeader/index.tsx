import React, { FC } from "react";
import styles from "./index.module.css";
import Link from "next/link";
import ECookLogo from "/public/logo.svg";
import { CarryOutOutlined, HeartOutlined } from "@ant-design/icons";
import { LeftOutline, SendOutline } from "antd-mobile-icons";
import { Image } from "antd-mobile";

const demoSrc ="https://cookingwithayeh.com/wp-content/uploads/2021/11/Spicy-Tuna-Crispy-Rice.jpg";
const ViewPageHeader: FC = () => {
    return (
        <>
            <div className={styles["navigation"]}>
                <Link href="/recipes">
                    <span className={styles["return"]}>
                        <LeftOutline />
                    </span>
                </Link>
                <ECookLogo />
                <Link href="/">
                    <span className={styles["share"]}>
                        <SendOutline />
                    </span>
                </Link>
            </div>
            <div style={{ userSelect: "none" }} className={styles["img"]}>
                <Image src={demoSrc} className={styles["image"]} />
            </div>
            <div className={styles["functions"]}>
                <CarryOutOutlined
                    className={styles["complete"]}
                    twoToneColor="yellow"
                />

                <div className={styles["title"]}>
                    Spicy Tuna Cripsy Rice
                </div>

                <HeartOutlined className={styles["favorite"]} />
            </div>
        </>
    );
};

export default ViewPageHeader;
