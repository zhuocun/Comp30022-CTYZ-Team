import { NextPage } from "next";
import { ShoppingItem } from "../components/shoppingItem";
// import { useReduxDispatch, useReduxSelector } from "../redux/hooks";
import { useEffect } from "react";
// import { getRecipeList } from "../redux/reducers/recipeSlice";
import React from "react";
import { Layout } from "antd";
import styles from "../styles/recipes.module.css";
import Link from "next/link";
import { LeftOutline, DeleteOutline } from "antd-mobile-icons";

const { Header, Content } = Layout;

const ShoppingList: NextPage = () => {
        useEffect(() => {
        document.body.style.backgroundColor = "white";});
    // const jwtToken = useReduxSelector((s) => s.authentication.jwtToken);
    // const loading = useReduxSelector((s) => s.shopping.loading);
    // const shoppingList = useReduxSelector((s) => s.shopping.shoppingList);
    // const dispatch = useReduxDispatch();

    // useEffect(() => {
    //     document.body.style.backgroundColor = "white";
    //     if (jwtToken) {
    //         dispatch(getRecipeList({ jwtToken, keywords: undefined, categoryId: undefined }));
    //     }
    // }, [jwtToken]);

    // const shoppingItems: JSX.Element[] = [];
    // if (shoppingList) {
    //     for (const r of shoppingList) {
    //         shoppingItems.push(<ShoppingItem loading={loading} shoppingItem={r} />)
    //     }
    // }

    return (
        <Layout>
            <Header className={styles["header"]}>
                <div className={styles["headerNav"]}>
                    <Link href="/">
                        <span>
                            <LeftOutline />
                        </span>
                    </Link>

                    <h1 className={styles.pageTitle}>What to buy?</h1>
                    <Link href="/edit">
                        <span className={styles["addNew"]}>
                        <DeleteOutline />
                        </span>
                    </Link>
                </div>
            </Header>
            <Content>
                <div className={styles.recipeList}>
                    {/* {shoppingItems} */}
                    <ShoppingItem />
                </div>
            </Content>
        </Layout>
    );
};

export default ShoppingList;
