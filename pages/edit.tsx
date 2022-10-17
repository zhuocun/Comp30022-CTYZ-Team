import { Button, Layout } from "antd";
import React, { useState } from "react";
import TagEditor from "../components/tagEditor";
import TitleEditor from "../components/titleEditor";
import PicUploader from "../components/picUploader";
import IngredientAdder from "../components/ingredientsAdder";
import MethodAdder from "../components/methodAdder";
import styles from "../styles/recipeEditor.module.css";
import { NextPage } from "next";
import { CheckOutline, CloseOutline } from "antd-mobile-icons";
import ECookLogo from "../public/logo.svg";
import { useReduxDispatch, useReduxSelector } from "../redux/hooks";
import { createRecipe } from "../redux/reducers/recipeSlice";
import TimeEstimate from "../components/timeEstimate";
import ServingSuggestion from "../components/servingSuggestion";
import Intro from "../components/intro";
import { useRouter } from "next/router";

const { Header, Content, Footer } = Layout;

const RecipeEditor: NextPage = () => {
    const [picture, setPicture] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [time, setTime] = useState<number>();
    const [serving, setServing] = useState<number>();
    const [tags, setTags] = useState<string[]>([]);
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [methods, setMethods] = useState<string[]>([]);

    const jwtToken = useReduxSelector(s => s.authentication.jwtToken);

    const dispatch = useReduxDispatch();

    const router = useRouter();

    const recipe: IRecipe = {
        id: "",
        picture: picture,
        title: title,
        tags: tags,
        ingredients: ingredients,
        methods: methods,
        category: "63302ddf7b1ea4c130f10c21"
    };

    const onSubmit = () => {
        console.log(recipe.ingredients);
        dispatch(createRecipe({ jwtToken, recipe }));
        router.push("/");
    };

    return (
        <Layout>
            <Header className={styles.header}>
                <div className={styles.navigation}>
                    <Button
                        style={{ background: "transparent", border: "0px" }}
                        icon={<CloseOutline style={{ fontSize: "28px" }} />}
                        onClick={() => router.push("/")}
                    >
                    </Button>
                    <ECookLogo />
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
                        <PicUploader setPic={setPicture} />
                        <TitleEditor setTitle={setTitle} />
                    </div>
                    <div className={styles.servings}>
                        <TimeEstimate setTime={setTime} />
                        <ServingSuggestion setServing={setServing} />
                    </div>
                    <div>
                        <TagEditor setTag={setTags} />
                    </div>
                    <div className={styles.intro}><Intro /></div>
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
