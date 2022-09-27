import { Input } from "antd";
import React from "react";
import styles from "./index.module.css";
import { useRouter } from "next/router";

const { Search } = Input;


export const SearchBar: React.FC = () => {

    const router = useRouter();
    const onSearch = (value: string) => {
        router.push(`/search/${value}`);
    };

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
