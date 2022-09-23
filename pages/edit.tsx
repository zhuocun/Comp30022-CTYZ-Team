import { Layout } from "antd";
import React from "react";
import EditorNavBar from "../components/editorNavBar";
import TagEditor from "../components/tagEditor";
import TitleEditor from "../components/titleEditor";
import PicUploader from "../components/picUploader";
import AddIngredients from "../components/ingredientsAdder";
import AddMethod from "../components/methodAdder";
import styles from "../styles/recipeEditor.module.css";
import { NextPage } from "next";

const { Header, Content, Footer } = Layout;

const RecipeEditor: NextPage = () => {
    return (
        <Layout>
            <Header className={styles.header}>
                <EditorNavBar />
            </Header>

            <Content className={styles.content}>
                <div>
                    <div className={styles.components}>
                        <PicUploader />
                        <TitleEditor />
                    </div>
                    <div>
                        <TagEditor />
                    </div>
                    <div className={styles.ingredients}>
                        <AddIngredients />
                    </div>
                    <div className={styles.methods}>
                        <AddMethod />
                    </div>
                </div>
            </Content>
            <Footer className={styles.footer}></Footer>
        </Layout>
    );
};

export default RecipeEditor;
