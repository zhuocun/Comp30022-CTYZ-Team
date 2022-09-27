import { AudioOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React from "react";
import styles from "./index.module.css";

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

export const SearchBar: React.FC = () => {
    return (
        <>
            <Search
                className={styles.searchBar}
                placeholder="Search..."
                allowClear
                onSearch={onSearch}
            />
        </>
    );
};
