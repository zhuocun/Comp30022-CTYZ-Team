import React, { Dispatch, SetStateAction } from "react";
import { TagsInput } from "react-tag-input-component";
import styles from "./index.module.css";

const TagEditor: React.FC<{ setTag: Dispatch<SetStateAction<string[]>> }> =
    ({ setTag }) => {
        return (
            <div className={styles.editTags}>
                <TagsInput
                    onChange={(e) => setTag(e)}
                    name="tags"
                    placeHolder="➕Tags"
                />
            </div>
        );
    };
export default TagEditor;


