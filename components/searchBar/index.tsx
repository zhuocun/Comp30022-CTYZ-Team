import { AudioOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React from "react";

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

export const SearchBar: React.FC = () => {
    return (
        <>
            <Search
                placeholder="Search..."
                allowClear
                onSearch={onSearch}
            />
        </>
    );
};
