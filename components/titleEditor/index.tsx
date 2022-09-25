import { Input } from "antd";
import React from "react";
import styles from "./index.module.css";

const onChange = (e) => {
    console.log("Change:", e.target.value);
};


const TitleEditor: React.FC = () => {

    return (
        <>
            <Input size="large"
                   onChange={onChange}
                   placeholder="Insert Recipe Name" allowClear
                   className={styles.editTitle}
            />
            <br />
        </>
    );
};

export default TitleEditor;