import { Layout } from "antd";
import React, { useState } from "react";
import EditorNavBar from "../components/editorNavBar";
import TagEditor from "../components/tagEditor";
import TitleEditor from "../components/titleEditor";
import PicUploader from "../components/picUploader";
import IngredientsAdder from "../components/ingredientsAdder";
import MethodAdder from "../components/methodAdder";
import styles from "../styles/recipeEditor.module.css";
import { NextPage } from "next";

const { Header, Content, Footer } = Layout;

const RecipeEditor: NextPage = () => {
    const [title, setTitle] = useState<string>("");
    const [tag, setTag] = useState<string[]>([]);
    const [ingredient, setIngredient] = useState<string[]>([]);

    return (
        <Layout>
            <Header className={styles.header}>
                <EditorNavBar />
            </Header>

            <Content className={styles.content}>
                <div>
                    <div className={styles.components}>
                        <PicUploader />
                        <TitleEditor setTitle={setTitle} />
                    </div>
                    <div>
                        <TagEditor setTag={setTag} />
                    </div>
                    <div className={styles.ingredients}>
                        <IngredientsAdder setIngredient={setIngredient} />
                    </div>
                    <div className={styles.methods}>
                        <MethodAdder />
                    </div>
                </div>
            </Content>
            <Footer className={styles.footer}></Footer>
        </Layout>
    );
};

export default RecipeEditor;
