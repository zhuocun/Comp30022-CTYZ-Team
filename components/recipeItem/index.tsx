import React from "react";
import { Skeleton, BackTop } from "antd";
import { List, SwipeAction, Toast, Dialog } from "antd-mobile";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import { Image } from "antd-mobile";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import { deleteRecipe, getRecipeList } from "../../redux/reducers/recipeSlice";
import { addToCart } from "../../redux/reducers/cartSlice";

const demoSrc =
    "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png";

interface RecipeListProps {
    recipeItem: IRecipeListRes | null;
    loading: boolean;
    isFavList: boolean;
}

export const RecipeItem: React.FC<RecipeListProps> = ({
                                                          loading,
                                                          recipeItem,
                                                          isFavList
                                                      }) => {
    const dispatch = useReduxDispatch();
    const jwtToken = useReduxSelector((s) => s.authentication.jwtToken);
    const router = useRouter();
    const recipeId = recipeItem?._id;
    const { categoryId } = router.query;
    const onDelete = () => {
        dispatch(deleteRecipe({ jwtToken, recipeId }));
        dispatch(getRecipeList({ jwtToken, keywords: undefined, categoryId }));
    };

    const onAddToCart = () => {
        dispatch(addToCart({ jwtToken, recipeId }));
    };

    const removeFromCart = () => {
        dispatch(addToCart({ jwtToken, recipeId }));
    };


    return (
        <div>
            <List>
                <SwipeAction
                    className={styles["delete"]}
                    leftActions={isFavList ? [
                        {
                            key: "remove",
                            text: "Remove",
                            color: "light",
                            onClick: removeFromCart
                        }
                    ] : []}

                    rightActions={[
                        {
                            key: "cart",
                            text: "Add to cart",
                            color: "light",
                            onClick: onAddToCart
                        },
                        {
                            key: "delete",
                            text: "Delete",
                            color: "danger",
                            onClick: async () => {
                                await Dialog.confirm({
                                    content: "Are u sure to delete😧",
                                    cancelText: "Cancel",
                                    confirmText: "Confirm",
                                    onConfirm: async () => {
                                        onDelete();
                                        Toast.show({
                                            icon: "success",
                                            content: "Delete Successfully",
                                            position: "center"
                                        });
                                    }
                                });
                            }
                        }
                    ]}
                >
                    <Skeleton
                        loading={loading}
                        active
                        style={{ padding: "10px" }}
                    >
                        <List.Item
                            className={styles["recipeList"]}
                            key={recipeItem?._id}
                            prefix={
                                <Image
                                    className={styles.img}
                                    src={
                                        recipeItem?.picture
                                            ? recipeItem?.picture
                                            : demoSrc
                                    }
                                    width={150}
                                    height={107}
                                    alt="logo"
                                    fit="cover"
                                />
                            }
                            onClick={() =>
                                router.push(`/detail/${recipeItem?._id}`)
                            }
                        >
                            {recipeItem?.title}
                        </List.Item>
                    </Skeleton>
                </SwipeAction>
            </List>

            <BackTop />
        </div>
    );
};
