import { Layout } from "antd";
import React from "react";
import EditorNavBar from "../components/editorNavBar";
import tagEditor from "../components/tagEditor";
import titleEditor from "../components/titleEditor";
import PicUploader from "../components/picUploader";
import AddIngredients from "../components/ingredientsAdder";
import AddMethod from "../components/methodAdder";
import styles from "../styles/recipeEditor.module.css";

const { Header, Content, Footer } = Layout;

const RecipeEditor = () => {
    return (
        <Layout>
            <Header className={styles.header}>
                <EditorNavBar />
            </Header>

            <Content className={styles.content}>
                <div>
                    <div className={styles.components}>
                        <PicUploader />
                        <titleEditor />
                    </div>
                    <div>
                        <tagEditor />
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
