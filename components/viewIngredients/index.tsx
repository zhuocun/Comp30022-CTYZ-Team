import React, { FC } from "react";
import styles from "./index.module.css";

const ViewIngredients: FC = () => {
    return (
        <>
            <div className= {styles["ingredients"]}>
                <h1>Ingredients</h1>
                <ul>
                    <li className= {styles["box"]} >100mL milk</li>
                </ul>
            </div>
        </>
    );
};

export default ViewIngredients;
