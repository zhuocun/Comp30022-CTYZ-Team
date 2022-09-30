import React, { Dispatch, SetStateAction } from "react";
import styles from "./index.module.css";

interface PropsType {
    title: String|undefined;
    picture: string|undefined;
}


export const View: React.FC< PropsType > = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <img src = {props.picture} alt =""/>
        </div>
    );
};
