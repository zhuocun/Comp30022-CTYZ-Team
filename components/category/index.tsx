import React from "react";
import Snack from "/public/snack.svg";
import Dessert from "/public/dessert.svg";
import Breakfast from "/public/breakfast.svg";
import Lunch from "/public/lunch.svg";
import Dinner from "/public/dinner.svg";
import Vegetarian from "/public/vegetarian.svg";
import styles from "./index.module.css";
import { ColumnsType } from "antd/es/table";
import Link from "next/link";
import { Skeleton, Space, Table } from "antd";

interface CategoryIntro extends ICategory {
    key: number;
}

interface PropsType {
    categoryList: ICategory[] | null,
    loading: boolean
}

const Category: React.FC<PropsType> = ({ categoryList, loading }) => {

    const columns: ColumnsType<CategoryIntro> = [
        {
            title: "Category",
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    <Link href={`category/${record._id}`} replace={true}>{record.name}</Link>
                </Space>
            )
        }
    ];
    console.log(categoryList);
    const categoryData: CategoryIntro[] = categoryList
        ? (categoryList.map((c, index) => ({
            key: index,
            ...c
        }))) : [];

    console.log(categoryData);

    return (
        <>
            <Skeleton loading={loading} active>
                <Table<CategoryIntro>
                    columns={columns}
                    dataSource={categoryData}
                    showHeader={true}
                    size="small"
                    bordered={false}
                />
            </Skeleton>
            <div className={styles["categories"]}>
                <Snack className={styles["category"]} />
                <Dessert className={styles["category"]} />
                <Breakfast className={styles["category"]} />
                <Lunch className={styles["category"]} />
                <Dinner className={styles["category"]} />
                <Vegetarian className={styles["category"]} />
            </div>
        </>
    );
};

export default Category;
