import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import {
    HomeOutlined,
    HomeTwoTone,
    CalendarOutlined,
    CalendarTwoTone,
    HeartOutlined,
    HeartTwoTone,
    ShoppingCartOutlined,
    ShoppingTwoTone
} from "@ant-design/icons";

const FooterNavBar: React.FC = () => {
    return (
        <div className={styles["footerNav"]} >
        <Link href="/">
            <span className={styles["home"]}>
                <HomeTwoTone twoToneColor="orange"/>
            </span>
        </Link>
        <Link href="/">
            <span className={styles["plan"]}>
                <CalendarTwoTone twoToneColor="orange"/>
            </span>
        </Link>
        <Link href="/">
            <span className={styles["history"]}>
                <ShoppingTwoTone twoToneColor="orange"/>
            </span>
        </Link>
        <Link href="/">
            <span className={styles["favorite"]}>
                <HeartTwoTone twoToneColor="orange"/>
            </span>
        </Link>
    </div>
    );
}

export default FooterNavBar;