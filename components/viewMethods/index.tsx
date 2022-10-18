import React from "react";
import styles from "./index.module.css";

const viewMethods: React.FC<{ methods: string[] | undefined }> = ({ methods }) => {

    const methodItems: JSX.Element[] = [];
    if (methods) {
        for (const m of methods) {
            methodItems.push(<li className={styles["box"]}>{m}</li>);
        }
    }

    return (
        <>
            <div className={styles["ingredients"]}>
                <h1>Method</h1>
                <ol>
                    {methodItems}
                </ol>
            </div>
        </>
    );
};

export default viewMethods;
