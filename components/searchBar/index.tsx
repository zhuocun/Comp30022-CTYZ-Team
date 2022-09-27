import { Input } from "antd";
import React from "react";
import styles from "./index.module.css";

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

interface PropsType {
    isHome: boolean;
}

export const SearchBar: React.FC<PropsType> = (props) => {
    return (
        <>
            <Search
                placeholder="Search..."
                allowClear
                onSearch={onSearch}
                className={props.isHome === true ? styles["homeSearchBar"] : styles["listSearchBar"]}
            />
        </>
    );
};
