import { Input } from "antd";
import React, { Dispatch, SetStateAction } from "react";
import styles from "./index.module.css";

const TitleEditor: React.FC<{ setTitle: Dispatch<SetStateAction<string>> }> =
    ({ setTitle }) => {

        return (
            <>
                <Input
                    size="large"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Recipe Name" allowClear
                    className={styles.editTitle}
                />
                <br />
            </>
        );
    };

export default TitleEditor;