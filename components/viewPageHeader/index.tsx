import React, { useState } from "react";
import styles from "./index.module.css";
import Link from "next/link";
import ECookLogo from "/public/logo.svg";
import { CarryOutOutlined, HeartOutlined } from "@ant-design/icons";
import { LeftOutline, FillinOutline } from "antd-mobile-icons";

import { Image, ImageViewer } from "antd-mobile";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import { updateRecipe } from "../../redux/reducers/recipeSlice";

const demoSrc =
    "https://cookingwithayeh.com/wp-content/uploads/2021/11/Spicy-Tuna-Crispy-Rice.jpg";
const ViewPageHeader: React.FC<{
    recipeId: string,
    title: string | undefined,
    picture: string | undefined,
    isFavorite: boolean | undefined,
    tagIds: string[] | undefined
}> = ({ title, picture, recipeId, isFavorite, tagIds }) => {
    const dispatch = useReduxDispatch();
    const tagList = useReduxSelector(s => s.recipe.tags);
    const jwtToken = useReduxSelector(s => s.authentication.jwtToken);
    const tagItems: string[] = [];
    if (tagList && tagIds) {
        for (const tagId of tagIds) {
            let targetTag: string = "";
            for (const t of Array.from(tagList)) {
                if (t._id === tagId) {
                    targetTag = t.name;
                    console.log(targetTag);
                    break;
                }
            }
            tagItems.push(targetTag);
        }
    }
    const onSetFavorite = () => {
        const recipe: IRecipe = {
            tags: tagItems,
            favorite: !isFavorite
        };
        dispatch(updateRecipe({ jwtToken, recipeId, recipe }));
        if(favorite == true){
            setFavorite(false);
        }else{
            setFavorite(true);
        }
        console.log(favorite)
    };
    const onSetHistory = () => {
        const recipe: IRecipe = {
            tags: tagItems,
            completed: new Date().toString()
        };
        dispatch(updateRecipe({ jwtToken, recipeId, recipe }));

        // if(history == true){
        //     setHistory(false);
        // }else{
        //     setHistory(true);
        // }
        // console.log(history)
   
    };

    const [visible, setVisible] = useState(false);
    const [favorite, setFavorite] = useState(() => (isFavorite == null) ? false : isFavorite)
    // const [history, setHistory] = useState((completed) => (completed == null) ? false : completed)


    return (
        <>
            <div className={styles["navigation"]}>
                <Link href="/">
                    <span className={styles["return"]}>
                        <LeftOutline />
                    </span>
                </Link>
                <ECookLogo />
                <Link href="/">
                    <span className={styles["update"]}>
                        <FillinOutline />
                    </span>
                </Link>
            </div>
            <div style={{ userSelect: "none" }} className={styles["img"]}>
                <Image
                    onClick={() => {
                        setVisible(true);
                    }}
                    src={picture ? picture : demoSrc}
                    className={styles["image"]}
                    width={"auto"}
                    height={260}
                    fit="cover"
                />
                <ImageViewer
                    image={picture ? picture : demoSrc}
                    visible={visible}
                    onClose={() => {
                        setVisible(false);
                    }}
                />
            </div>
            <div className={styles["functions"]}>
                <CarryOutOutlined
                    onClick={onSetHistory}
                    className={styles["complete"]}
                    twoToneColor="yellow"
                    style = {{color:favorite?"red":"black"}}
                />

                <div className={styles["title"]}>{title}</div>

                <HeartOutlined
                    onClick={onSetFavorite}
                    className={styles["favorite"]}
                    style = {{color:favorite?"red":"black"}}
                />
            </div>
        </>
    );
};

export default ViewPageHeader;
