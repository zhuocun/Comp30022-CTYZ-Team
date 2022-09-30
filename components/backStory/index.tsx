import React, { FC } from "react";
import styles from "./index.module.css";
import BackStoryLogo from "/public/backStory.svg";


const BackStory: FC = () => {
    return (
        <>
            <div className= {styles["ingredients"]}>
                <BackStoryLogo/>
            </div>
        </>
    );
};

export default BackStory;
