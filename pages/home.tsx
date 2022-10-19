import { NextPage } from "next";
import React, { useEffect } from "react";
import { SearchBar } from "../components/searchBar";
import { Col, Layout, Row } from "antd";
import styles from "../styles/homepage.module.css";
import Link from "next/link";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import CategoryItem from "../components/category";
import { useReduxDispatch, useReduxSelector } from "../redux/hooks";
import { getCategories } from "../redux/reducers/categorySlice";
import { getCart } from "../redux/reducers/cartSlice";

const { Header, Content } = Layout;

const Home: NextPage = () => {
    const jwtToken = useReduxSelector(s => s.authentication.jwtToken);
    const loading = useReduxSelector(s => s.category.loading);
    const categoryList = useReduxSelector(s => s.category.categoryList);
    const cartItems = useReduxSelector(s => s.cart.cartItems);
    const categoryItem: JSX.Element[] = [];
    if (categoryList) {
        let count = 0;
        for (let i = 0; i < categoryList.length; i++) {
            if (i + 1 < categoryList.length) {
                categoryItem.push(
                    <Row>
                        <Col span={11} style={{ marginLeft: "auto", marginTop: "7%" }}>
                            <CategoryItem loading={loading} categoryItem={categoryList[i]} />
                        </Col>
                        <Col span={11} style={{ marginRight: "auto", marginTop: "7%" }}>
                            <CategoryItem loading={loading} categoryItem={categoryList[i + 1]} />
                        </Col>
                    </Row>
                );
                i++;
            } else {
                categoryItem.push(
                    <Row>
                        <Col span={11} style={{ marginLeft: "auto", marginTop: "7%" }}>
                            <CategoryItem loading={loading} categoryItem={categoryList[i]} />
                        </Col>
                    </Row>
                );
            }
        }
        count++;
    }
    const dispatch = useReduxDispatch();
    useEffect(() => {
        document.body.style.backgroundColor = "#fff0cc";
        if (jwtToken) {
            dispatch(getCategories({ jwtToken }));
            dispatch(getCart(jwtToken));
        }
    }, [jwtToken]);

    return (
        <div style={{ minHeight: "inherit" }} className={styles["body"]}>
            <Layout className={styles["fullPage"]}>
                <Header className={styles["header"]}>
                    <div className={styles["headerNav"]}>
                        <Link href="/intro">
                        <span className={styles["user"]}>
                            <UserOutlined />
                        </span>
                        </Link>
                        <h1 className={styles.pageTitle}>What to eat?</h1>
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
