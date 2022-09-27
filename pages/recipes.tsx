import { NextPage } from "next";
import { RecipeList } from "../components/recipeList";
import { useReduxDispatch, useReduxSelector } from "../redux/hooks";
import { useEffect } from "react";
import { getRecipeList } from "../redux/reducers/recipeSlice";
import React from "react";
import { SearchBar } from "../components/searchBar";
import { Layout } from "antd";
import styles from "../styles/recipes.module.css";
import Link from "next/link";
import { LeftOutline } from "antd-mobile-icons";

const { Header, Content, Footer } = Layout;

const Recipes: NextPage = () => {
    const jwtToken = useReduxSelector((s) => s.authentication.jwtToken);
    const loading = useReduxSelector((s) => s.recipe.loading);
    const recipeList = useReduxSelector((s) => s.recipe.recipeList);
    const dispatch = useReduxDispatch();

    useEffect(() => {
        if (jwtToken) {
            dispatch(getRecipeList({ jwtToken, keywords: undefined }));
        }
    }, [jwtToken]);

    return (
        <Layout>
            <Header className={styles.header}>
                <div>
                    <Link href="/">
                        <span className={styles["navBar"]}>
                            <LeftOutline />
                        </span>
                    </Link>
                </div>
                <h1 className={styles.pageTitle}>
                    What to eat?
                </h1>
            </Header>
            <Content>
                <div>
                    <SearchBar />
                </div>
                <div className={styles.recipeList}>
                    <RecipeList loading={loading} recipeList={recipeList} />
                </div>
            </Content>
        </Layout>
    );
};

export default Recipes;
