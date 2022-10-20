import { Button, Layout } from "antd";
import React, { useState } from "react";
import TagEditor from "../../../components/tagEditor";
import TitleEditor from "../../../components/titleEditor";
import PicUploader from "../../../components/picUploader";
import IngredientAdder from "../../../components/ingredientsAdder";
import MethodAdder from "../../../components/methodAdder";
import styles from "../../../styles/recipeEditor.module.css";
import { NextPage } from "next";
import { CheckOutline, CloseOutline } from "antd-mobile-icons";
import { useReduxDispatch, useReduxSelector } from "../../../redux/hooks";
import { createRecipe } from "../../../redux/reducers/recipeSlice";
import TimeEstimate from "../../../components/timeEstimate";
import ServingSuggestion from "../../../components/servingSuggestion";
import Intro from "../../../components/intro";
import { useRouter } from "next/router";
import openNotification from "../../../utils/Notification";

const { Header, Content, Footer } = Layout;

const RecipeEditor: NextPage = () => {
    const [pic, setPic] = useState<{ src: string, imageId: string } | undefined>(undefined);
    const [title, setTitle] = useState<string>("");
    const [intro, setIntro] = useState<string>("");
    const [cookTime, setCookTime] = useState<number>();
    const [serve, setServe] = useState<number>();
    const [tags, setTags] = useState<string[]>([]);
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [methods, setMethods] = useState<string[]>([]);

    const jwtToken = useReduxSelector(s => s.authentication.jwtToken);

    const dispatch = useReduxDispatch();
    const router = useRouter();
    let { categoryId } = router.query;

    const recipe: IRecipe = {
        picture: pic ? pic.src : "",
        imageId: pic ? pic.imageId : "",
        title: title,
        tags: tags,
        ingredients: ingredients,
        methods: methods,
        category: typeof categoryId === "string" ? categoryId : undefined,
        favorite: false,
        cookTime: cookTime,
        serve: serve,
        introduction: intro
    };

    const onSubmit = () => {
        dispatch(createRecipe({ jwtToken, recipe })).then((r: any) => {
            try {
                if (!r.error) {
                    openNotification("Creating successful! :)", "success");
                    router.push("/");
                } else {
                    openNotification("Creating Failed :(", "error");
                }
            } catch (err) {
                openNotification("Creating Failed :(", "error");
            }
        });
    };

    return (
        <Layout>
            <Header className={styles.header}>
                <div className={styles.navigation}>
                    <Button
                        style={{ background: "transparent", border: "0px" }}
                        icon={<CloseOutline style={{ fontSize: "28px" }} />}
                        onClick={() => router.back()}
                    >
                    </Button>
                    <h1 className={styles.pageTitle}>What to eat?</h1>
                    <Button
                        style={{ background: "transparent", border: "0px" }}
                        icon={<CheckOutline style={{ fontSize: "28px" }} />}
                        onClick={onSubmit}>
                    </Button>
                </div>
            </Header>

            <Content className={styles.content}>
                <div>
                    <div className={styles.components}>
                        <PicUploader setPic={setPic} />
                        <TitleEditor setTitle={setTitle} />
                    </div>
                    <div className={styles.servings}>
                        <TimeEstimate setCookTime={setCookTime} />
                        <ServingSuggestion setServing={setServe} />
                    </div>
                    <div>
                        <TagEditor setTag={setTags} />
                    </div>
                    <div className={styles.intro}><Intro setIntro={setIntro} /></div>
                    <div className={styles.ingredients}>
                        <IngredientAdder setIngredient={setIngredients} />
                    </div>
                    <div className={styles.methods}>
                        <MethodAdder setMethod={setMethods} />
                    </div>
                </div>
            </Content>
            <Footer className={styles.footer}></Footer>
        </Layout>
    );
};

export default RecipeEditor;
