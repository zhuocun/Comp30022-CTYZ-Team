import React from "react";
import { AuthLayout } from "../layouts/authLayout";
import { Button } from 'antd';
import { NextPage } from "next";
import styles from "../styles/userPage.module.css";
import Link from "next/link";

const UserPage: NextPage = () => {
    return (
        <AuthLayout isLogin={true}>
            <div className={styles["logout"]}> 
            <Link href="./openPage">
            <Button type="dashed" block>
                Log out
            </Button>
            </Link>
            </div>
        </AuthLayout>
    );
};

export default UserPage;
