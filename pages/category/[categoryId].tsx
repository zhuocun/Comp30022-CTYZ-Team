import { NextPage } from "next";
import { useRouter } from "next/router";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import React, { useEffect } from "react";
import { RecipeList } from "../../components/recipeList";
import { getRecipeList } from "../../redux/reducers/recipeSlice";
import styles from "../../styles/recipes.module.css";
import Link from "next/link";
import { EditSOutline, LeftOutline } from "antd-mobile-icons";
import { Layout } from "antd";
import { useParams } from "react-router";

const { Header } = Layout;
const Category: NextPage = () => {
    const recipeList = useReduxSelector(s => s.recipe.recipeList);
    const loading = useReduxSelector(s => s.recipe.loading);
    const jwtToken = useReduxSelector(s => s.authentication.jwtToken);
    const dispatch = useReduxDispatch();
    useEffect(() => {
        if (jwtToken) {
            dispatch(getRecipeList({ jwtToken, keywords: undefined, categoryId }));
        }
    }, [jwtToken]);
    const router = useRouter();
    const { categoryId } = router.query;
    const editRoute = "/category/" + categoryId + "/edit";
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
            <RecipeList loading={loading} recipeList={recipeList} />
        </>
    );
};

export default Category;
