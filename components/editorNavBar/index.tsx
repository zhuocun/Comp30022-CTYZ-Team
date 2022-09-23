import React from "react";
import { CloseOutline, CheckOutline } from "antd-mobile-icons";
import ECookLogo from "/public/logo.svg";
import classes from "./index.module.css";

const EditorNavBar: React.FC = () => {
    return (
        <div className={classes.navigation}>
            <CloseOutline style={{ fontSize: "28px" }} />
            <ECookLogo />
            <CheckOutline style={{ fontSize: "28px" }} />
        </div>
    );
}

export default EditorNavBar;
