import React, { useEffect, useRef } from "react";
import { Button, Skeleton, Space, BackTop, Image, Rate } from "antd";
import { List, SwipeAction, Dialog, Toast } from "antd-mobile";
import type { ColumnsType } from "antd/es/table";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import { Action, SwipeActionRef } from "antd-mobile/es/components/swipe-action";

const demoSrc =
    "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png";

interface RecipeListProps {
    recipeList: IRecipeListRes[] | null;
    loading: boolean;
}

export const RecipeList: React.FC<RecipeListProps> = ({ recipeList, loading }) => {
    const router = useRouter();
    const columns: ColumnsType<IRecipeIntro> = [
        {
            title: "Preview",
            dataIndex: "pic",
            key: "pic"
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

    const recipeData: IRecipeIntro[] = recipeList
        ? recipeList.map((r, index) => ({
              key: index,
              id: r._id,
              picture: r.picture,
              title: r.title
          }))
        : [];

    // const [loading, setLoading] = useState(false);

    const loadMoreData = () => {
        if (loading) {
            return;
        }
        // setLoading(true);
        fetch("https://randomuser.me/api/?results=10&inc=title,picture")
            .then((res) => res.json())
            .then((body) => {
                // setLoading(false);
            })
            .catch(() => {
                // setLoading(false);
            });
    };

    useEffect(() => {
        loadMoreData();
    }, []);

    function handleClick() {}

    const ref = useRef<SwipeActionRef>(null)

    return (
        // <Skeleton loading={loading} active>
        //     <Table<IRecipeIntro>
        //         columns={columns}
        //         dataSource={recipeData}
        //         showHeader={true}
        //         size="small"
        //         bordered={false}
        //         className = {styles["recipeList"]}
        //     />
        //     <BackTop />
        // </Skeleton>
        <div>
            <SwipeAction
                // key={item}

                rightActions={[
                    {
                        key: "delete",
                        text: "delete",
                        color: "danger",
                        
                        onClick: async () => {
                            await Dialog.confirm({
                                content: "Are u sure to delete😧",
                                cancelText: "Cancel",
                                confirmText: "Confirm",
                        onConfirm: async () => {
                        Toast.show({
                          icon: 'success',
                          content: 'Delete Successfully',
                          position: 'center',
                        })
                            ref.current?.close();
                        }
                    })
                    
                }
            }
                ]}
            >
                <Skeleton loading={loading} active style={{ padding: "10px" }}>
                    <List.Item
                        className={styles["recipeList"]}
                        // key={item}
                        prefix={
                            <Image
                                className={styles.img}
                                src={demoSrc}
                                width={150}
                                height={100}
                                alt="logo"
                            />
                        }
                        onClick={handleClick}
                    >
                        <h1 className={styles.recipeName}>
                            {/* {recipeList.title} */}
                            Title
                        </h1>

                        <Rate allowHalf defaultValue={2.5} />
                    </List.Item>
                </Skeleton>
            </SwipeAction>
            <BackTop />
        </div>
    );
};
