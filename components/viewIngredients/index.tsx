import React, { FC } from "react";
import styles from "./index.module.css";

const ViewIngredients: React.FC<{ingredients: string[]}> = ({ingredients}) => {

    const ingItems: JSX.Element[] = [];
    for (const i of ingredients) {
        ingItems.push(<li className= {styles["box"]} >{i}</li>);
    }
    return (
        <>
            <div className= {styles["ingredients"]}>
                <h1>Ingredients</h1>
                <ul>
                    {ingItems}
                </ul>
            </div>
        </>
    );
};

export default ViewIngredients;
