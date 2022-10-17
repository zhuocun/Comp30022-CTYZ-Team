import React from "react";
import { Skeleton, BackTop, Image, Rate } from "antd";
import { List, SwipeAction } from "antd-mobile";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import { Action } from "antd-mobile/es/components/swipe-action";

const demoSrc = "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png";

interface RecipeListProps {
    recipeItem: IRecipeListRes | null;
    loading: boolean;
}

export const RecipeItem: React.FC<RecipeListProps> = ({
                                                          loading,
                                                          recipeItem
                                                      }) => {
    const router = useRouter();
    const leftActions: Action[] = [
        {
            key: "pin",
            text: "delete",
            color: "primary"
        }
    ];

    return (
        <div>
            <SwipeAction
                leftActions={leftActions}
            >
                <Skeleton loading={loading} active style={{ padding: "10px" }}>
                    <List.Item
                        className={styles["recipeList"]}
                        key={recipeItem?._id}
                        prefix={
                            <Image
                                className={styles.img}
                                src={recipeItem?.picture ? recipeItem?.picture : demoSrc}
                                width={150}
                                height={100}
                                alt="logo"
                            />
                        }
                        onClick={() => router.push(`/detail/${recipeItem?._id}`)}
                    >
                        <h1 className={styles.recipeName}>
                            {recipeItem?.title}
                        </h1>
                    </List.Item>
                </Skeleton>
            </SwipeAction>
            <BackTop />
        </div>
    );
};
