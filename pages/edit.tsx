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
import ECookLogo from "/public/logo.svg";
import { useReduxDispatch, useReduxSelector } from "../redux/hooks";
import { createRecipe } from "../redux/reducers/recipeSlice";

const { Header, Content, Footer } = Layout;

const RecipeEditor: NextPage = () => {
    const [title, setTitle] = useState<string>("");
    const [tags, setTags] = useState<string[]>([]);
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [methods, setMethods] = useState<string[]>([]);

    const jwtToken = useReduxSelector(s => s.authentication.jwtToken);

    const dispatch = useReduxDispatch();

    const recipe: Recipe = {
        pic: "",
        title: title,
        tags: tags,
        ingredients: ingredients,
        methods: methods,
        category: ""
    };

    const onSubmit = () => {
        console.log(recipe);
        dispatch(createRecipe({ jwtToken, recipe }));
    };

    return (
        <Layout>
            <Header className={styles.header}>
                <div className={styles.navigation}>
                    <CloseOutline style={{ fontSize: "28px" }} />
                    <ECookLogo />
                    <Button icon={<CheckOutline style={{ fontSize: "28px" }} />} onClick={onSubmit}></Button>
                </div>
            </Header>

            <Content className={styles.content}>
                <div>
                    <div className={styles.components}>
                        <PicUploader />
                        <TitleEditor setTitle={setTitle} />
                    </div>
                    <div>
                        <TagEditor setTag={setTags} />
                    </div>
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
