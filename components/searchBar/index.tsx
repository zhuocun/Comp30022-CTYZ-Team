import { Input } from "antd";
import React from "react";
import styles from "./index.module.css";
import { useRouter } from "next/router";

const { Search } = Input;


export const SearchBar: React.FC = () => {

    const router = useRouter();
    const onSearch = (keywords: string) => {
        for (let i = 0; i < keywords.length; i++) {
            if (keywords[i] !== " ") {
                router.push(`/search/${keywords}`).then();
                break;
            }
        }
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
