import { NextPage } from "next";
import { RecipeItem } from "../components/recipeItem";
import { useReduxDispatch, useReduxSelector } from "../redux/hooks";
import { useEffect } from "react";
import { getRecipeList } from "../redux/reducers/recipeSlice";
import React from "react";
import { SearchBar } from "../components/searchBar";
import { Layout } from "antd";
import styles from "../styles/recipes.module.css";
import Link from "next/link";
import { LeftOutline, EditSOutline } from "antd-mobile-icons";

const { Header, Content } = Layout;

const Recipes: NextPage = () => {
    const jwtToken = useReduxSelector((s) => s.authentication.jwtToken);
    const loading = useReduxSelector((s) => s.recipe.loading);
    const recipeList = useReduxSelector((s) => s.recipe.recipeList);
    const dispatch = useReduxDispatch();

    useEffect(() => {
        document.body.style.backgroundColor = "white";
        if (jwtToken) {
            dispatch(getRecipeList({ jwtToken, keywords: undefined, categoryId: undefined }));
        }
    }, [jwtToken]);

    const recipeItems: JSX.Element[] = [];
    if (recipeList) {
        for (const r of recipeList) {
            recipeItems.push(<RecipeItem loading={loading} recipeItem={r} isFavList={true}/>)
        }
    }

    return (
        <Layout>
            <Header className={styles["header"]}>
                <div className={styles["headerNav"]}>
                    <Link href="/">
                        <span>
                            <LeftOutline />
                        </span>
                    </Link>

                    <h1 className={styles.pageTitle}>What to eat?</h1>
                    <Link href="/edit">
                        <span className={styles["addNew"]}>
                            <EditSOutline />
                        </span>
                    </Link>
                </div>
            </Header>
            <Content>
                <div>
                    <SearchBar isHome={false} />
                </div>
                <div className={styles.recipeList}>
                    {recipeItems}
                </div>
            </Content>
        </Layout>
    );
};

export default Recipes;
