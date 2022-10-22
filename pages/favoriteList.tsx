import { NextPage } from "next";
import { useReduxDispatch, useReduxSelector } from "../redux/hooks";
import { useEffect } from "react";
import { getRecipeList } from "../redux/reducers/recipeSlice";
import React from "react";
import { Layout } from "antd";
import styles from "../styles/list.module.css";
import recipesGenerator from "../components/recipeItem/recipesGenerator";

const { Header, Content } = Layout;

const FavoriteList: NextPage = () => {
    const jwtToken = useReduxSelector((s) => s.authentication.jwtToken);
    const loading = useReduxSelector((s) => s.recipe.loading);
    const recipeList = useReduxSelector((s) => s.recipe.recipeList);
    const favoriteList: IRecipeListRes[] = [];
    if (recipeList) {
        for (const r of recipeList) {
            r.favorite ? favoriteList.push(r) : null;
        }
    }
    const recipeItems: JSX.Element[] = recipesGenerator(favoriteList, loading, true);

    const dispatch = useReduxDispatch();

    useEffect(() => {
        document.body.style.backgroundColor = "white";
        if (jwtToken) {
            dispatch(getRecipeList({ jwtToken, keywords: undefined, categoryId: undefined }));
        }
    }, [jwtToken]);

    return (
        <Layout>
            <Header className={styles["header"]}>
                <div className={styles["headerNav"]}>
                    <h1 className={styles.pageTitle}>Favorite List 💝</h1>
                </div>
            </Header>
            <Content className={styles["content"]}>
                <div className={styles.recipeList}>
                    {recipeItems}
                </div>
            </Content>
        </Layout>
    );
};

export default FavoriteList;
