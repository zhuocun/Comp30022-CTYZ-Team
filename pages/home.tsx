import { NextPage } from "next";
import React, { useEffect } from "react";
import { SearchBar } from "../components/searchBar";
import { Layout } from "antd";
import styles from "../styles/homepage.module.css";
import Link from "next/link";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { useReduxDispatch, useReduxSelector } from "../redux/hooks";
import { getCategories } from "../redux/reducers/categorySlice";
import { getCart } from "../redux/reducers/cartSlice";
import TagBar from "../components/tagBar";
import categoryGenerator from "../components/category/categoryGenerator";
import { getAllTags } from "../redux/reducers/recipeSlice";

const { Header, Content } = Layout;

const Home: NextPage = () => {
    const jwtToken = useReduxSelector(s => s.authentication.jwtToken);
    const loading = useReduxSelector(s => s.category.loading);
    const categoryList = useReduxSelector(s => s.category.categoryList);
    const cartItems = useReduxSelector(s => s.cart.cartItems);
    const tags = useReduxSelector(s => s.recipe.tags);
    const categoryItem: JSX.Element[] = categoryGenerator(categoryList, loading);
    const dispatch = useReduxDispatch();
    useEffect(() => {
        document.body.style.backgroundColor = "#fff0cc";
        if (jwtToken) {
            dispatch(getCategories({ jwtToken }));
            dispatch(getCart(jwtToken));
            dispatch(getAllTags(jwtToken));
        }
    }, [jwtToken]);

    return (
        <div style={{ minHeight: "inherit" }} className={styles["body"]}>
            <Layout className={styles["fullPage"]}>
                <Header className={styles["header"]}>
                    <div className={styles["headerNav"]}>
                        <Link href="/logout">
                        <span className={styles["user"]}>
                            <UserOutlined />
                        </span>
                        </Link>
                        <h1 style={{ marginLeft: 17 }} className={styles.pageTitle}>What to eat?</h1>
                        <Link href="/cart">
                        <span className={styles["shoppingList"]}>
                            <ShoppingCartOutlined /> {cartItems?.length}
                        </span>
                        </Link>
                    </div>
                </Header>
                <Content className={styles["content"]}>
                    <div className={styles["searchBar"]}>
                        <SearchBar isHome={true} />
                        <TagBar tags={tags} />
                    </div>
                    <div className={styles["category"]}>
                        {categoryItem}
                    </div>
                </Content>
                {/* <Button onClick={() => router.push("./recipes")}>My Recipes</Button> */}
            </Layout>
        </div>
    );
};

export default Home;
