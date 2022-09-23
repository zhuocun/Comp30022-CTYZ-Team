import { Input } from "antd";
import React from "react";
import classes from "./index.module.css";

const onChange = (e) => {
    console.log("Change:", e.target.value);
};


function titleEditor() {

    return (
        <>
            <Input size="large"
                   onChange={onChange}
                   placeholder="Insert Recipe Name" allowClear
                   className={classes.editTitle}
            />
            <br />
        </>
    );
}

export default titleEditor;