import React, { Dispatch, SetStateAction } from "react";
import { Input } from "antd";
import styles from "./index.module.css";

const Intro: React.FC<{ setIntro: Dispatch<SetStateAction<string>> }> = ({ setIntro }) => {
    return (
        <>
            <Input
                className={styles.intro}
                placeholder="Please Enter Introduction Here"
                maxLength={200}
                onChange={(e) => setIntro(e.target.value)}
            />
        </>
    );
};

export default Intro;

