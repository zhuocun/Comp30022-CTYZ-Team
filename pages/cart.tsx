import { NextPage } from "next";
import { CartList } from "../components/cartList";
import { useEffect } from "react";
import React from "react";
import { Layout } from "antd";
import styles from "../styles/recipes.module.css";
import Link from "next/link";
import { LeftOutline, DeleteOutline } from "antd-mobile-icons";
import { useReduxDispatch, useReduxSelector } from "../redux/hooks";
import { deleteCartItem, getCart } from "../redux/reducers/cartSlice";
import openNotification from "../utils/Notification";
import { TAxiosRes } from "../interfaces/axiosRes";

const { Header, Content } = Layout;

const ShoppingCart: NextPage = () => {
    const jwtToken = useReduxSelector((s) => s.authentication.jwtToken);
    const cartItems = useReduxSelector((s) => s.cart.cartItems);
    const dispatch = useReduxDispatch();
    const onDelete = () => {
        if (cartItems) {
            for (const c of cartItems) {
                c === cartItems[cartItems.length - 1] ? dispatch(deleteCartItem({
                        jwtToken,
                        cartItemId: c._id
                    })).then((r: TAxiosRes) => {
                        dispatch(getCart(jwtToken));
                        !r.payload.error ?
                            openNotification("Deleting Successful! :)", "success") :
                            openNotification("Deleting Failed :(", "error");
                    }) :
                    dispatch(deleteCartItem({ jwtToken, cartItemId: c._id }));
            }
        }
    };
    useEffect(() => {
        document.body.style.backgroundColor = "white";
        if (jwtToken) {
            dispatch(getCart(jwtToken));
        }
    }, [jwtToken]);

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
                    <span className={styles["addNew"]}>
                        <DeleteOutline onClick={onDelete} />
                    </span>
                </div>
            </Header>
            <Content>
                <div className={styles.recipeList}>
                    <CartList cartItems={cartItems} />
                </div>
            </Content>
        </Layout>
    );
};

export default ShoppingCart;
