import React, { FC } from "react";
import styles from "./index.module.css";

const viewMethods: FC = () => {
    return (
        <>
            <div className= {styles["ingredients"]}>
                <h1>Method</h1>
                <ol>
                    <li className= {styles["box"]} >100mL milk</li>
                </ol>
            </div>
        </>
    );
};

export default viewMethods;
