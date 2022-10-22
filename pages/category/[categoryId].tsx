import { NextPage } from "next";
import { useRouter } from "next/router";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import React, { useEffect } from "react";
import { getRecipeList } from "../../redux/reducers/recipeSlice";
import styles from "../../styles/recipes.module.css";
import Link from "next/link";
import { EditSOutline, LeftOutline } from "antd-mobile-icons";
import { Layout } from "antd";
import recipesGenerator from "../../components/recipeItem/recipesGenerator";

const { Header } = Layout;
const Category: NextPage = () => {
    const recipeList = useReduxSelector(s => s.recipe.recipeList);
    const loading = useReduxSelector(s => s.recipe.loading);
    const jwtToken = useReduxSelector(s => s.authentication.jwtToken);
    const dispatch = useReduxDispatch();
    useEffect(() => {
        document.body.style.backgroundColor = "white";
        if (jwtToken) {
            dispatch(getRecipeList({ jwtToken, keywords: undefined, categoryId }));
        }
    }, [jwtToken]);
    const recipeItems: JSX.Element[] = recipesGenerator(recipeList, loading, false);
    const router = useRouter();
    const { categoryId } = router.query;
    const editRoute = "/category/" + categoryId + "/create";
    return (
        <>
            <Header className={styles["header"]}>
                <div className={styles["headerNav"]}>
                    <Link href="/">
                        <span>
                            <LeftOutline />
                        </span>
                    </Link>

                    <h1 className={styles.pageTitle}>What to eat?</h1>
                    <Link href={editRoute}>
                        <span className={styles["addNew"]}>
                            <EditSOutline />
                        </span>
                    </Link>
                </div>
            </Header>
            {recipeItems}
        </>
    );
};

export default Category;
