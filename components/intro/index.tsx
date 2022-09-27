import React, { Dispatch, SetStateAction } from "react";
import { Input } from "antd";
import styles from "./index.module.css";

const { TextArea } = Input;

const Intro: React.FC = () => {
    return (
        <>
            <TextArea
                className={styles.intro}
                placeholder="Please Enter Introduction Here"
                autoSize
                maxLength={200}
            />
        </>
    );
};

export default Intro;

