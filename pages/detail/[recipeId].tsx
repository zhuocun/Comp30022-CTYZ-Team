import { NextPage } from "next";
import { useReduxSelector } from "../../redux/hooks";
import { useRouter } from "next/router";
import { Col, Layout } from "antd";
import styles from "../../styles/viewPage.module.css";
import ViewPageHeader from "../../components/viewPageHeader";
import ViewTags from "../../components/viewTags";
import TimeAndServing from "../../components/timeAndServing";
import ViewIngredients from "../../components/viewIngredients";
import ViewMethods from "../../components/viewMethods";
import BackStory from "../../components/backStory";
import React, { useEffect } from "react";

const { Header, Content, Footer } = Layout;

const RecipeDetail: NextPage = () => {
    useEffect(() => {
        document.body.style.backgroundColor = "#fff0cc";
    });
    const router = useRouter();
    const { recipeId } = router.query;
    const recipeList = useReduxSelector((s) => s.recipe.recipeList);
    let recipe: IRecipeListRes | null = null;
    if (recipeList) {
        for (const r of recipeList) {
            r._id === recipeId ? recipe = r : null;
        }
    }

    if (recipe) {
        return (
            <Layout>
                <Header className={styles["header"]}>
                    <ViewPageHeader title={recipe.title} picture={recipe.picture} recipeId={recipe._id}
                                    isFavorite={recipe.favorite} tagIds={recipe.tags}
                                    isCompleted={recipe.completed?.length !== 0} />
                </Header>
                <Content className={styles.content}>
                    <ViewTags tagIds={recipe.tags} />
                    <div className={styles["timeAndServing"]}>
                        <TimeAndServing time={recipe.cookTime} servings={recipe.serve} />
                    </div>
                    <ViewIngredients ingredients={recipe.ingredients} />
                    <ViewMethods methods={recipe.methods} />
                    <div className={styles["backStory"]}>
                        <BackStory backStory={recipe.introduction} />
                    </div>
                </Content>
                <Footer className={styles.footer}></Footer>
            </Layout>
        );
    } else {
        return <>null</>;
    }
};

export default RecipeDetail;
