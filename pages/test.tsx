import { NextPage } from "next";
import { RecipeItem } from "../components/recipeItem";
import { useReduxDispatch, useReduxSelector } from "../redux/hooks";
import { useEffect } from "react";
import { getRecipeList } from "../redux/reducers/recipeSlice";
import React from "react";
import { Layout } from "antd";
import styles from "../styles/list.module.css";

const { Header, Content } = Layout;

const HistoryList: NextPage = () => {
    return (
        <img src="/homeImg.jpg" />
    );
};

export default HistoryList;
