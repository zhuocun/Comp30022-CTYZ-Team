import React from "react";
import { Button, Skeleton, Space, Table, BackTop } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useRouter } from "next/router";
import styles from "./index.module.css";


interface RecipeListProps {
    loading: boolean;
    recipeList: RecipeListRes[] | null;
}

export const RecipeList: React.FC<RecipeListProps> = ({
                                                                 loading,
                                                                 recipeList
                                                             }) => {
    const router = useRouter();
    const columns: ColumnsType<RecipeIntro> = [
        {
            title: "Preview",
            dataIndex: "pic",
            key: "pic",
            
        },
        {
            title: "Title",
            dataIndex: "title",
            key: "title"
        },
        {
            title: "Manage",
            key: "manage",
            render: (_, record) => (
                <Space size="small">
                    <Button
                        shape="round"
                        onClick={() => router.push(`/detail/${record.key}`)}
                    >
                        Enter
                    </Button>
                </Space>
            )
        }
    ];

    const recipeData: RecipeIntro[] = recipeList
        ? (recipeList.map((r, index) => ({
            key: index,
            id: r._id,
            picture: r.picture,
            title: r.title,
        }))) : [];

    return (
        <Skeleton loading={loading} active>
            <Table<RecipeIntro>
                columns={columns}
                dataSource={recipeData}
                showHeader={true}
                size="small"
                bordered={false}
                className = {styles["recipeList"]}
            />
            <BackTop />
        </Skeleton>
    );
};
