import React from "react";
import { Skeleton, BackTop } from "antd";
import { List, SwipeAction, Toast, Dialog } from "antd-mobile";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import { Image } from "antd-mobile";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import { deleteRecipe, getRecipeList, updateRecipe } from "../../redux/reducers/recipeSlice";
import { addToCart } from "../../redux/reducers/cartSlice";
import { TAxiosRes } from "../../interfaces/axiosRes";
import openNotification from "../../utils/Notification";

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
    const tagList = useReduxSelector(s => s.recipe.tags);
    const tagIds = recipeItem?.tags;
    const tagItems: string[] = [];
    if (tagList && tagIds) {
        for (const tagId of tagIds) {
            let targetTag: string = "";
            for (const t of Array.from(tagList)) {
                if (t._id === tagId) {
                    targetTag = t.name;
                    break;
                }
            }
            tagItems.push(targetTag);
        }
    }
    const onDelete = () => {
        dispatch(deleteRecipe({ jwtToken, recipeId })).then(() => dispatch(getRecipeList({
                jwtToken,
                keywords: undefined,
                categoryId
            }))
        );
    };

    const onAddToCart = () => {
        dispatch(addToCart({
            jwtToken,
            recipeId
        })).then((r: TAxiosRes) => {
                r.payload ? openNotification("Operation successful! :)", "success") :
                    openNotification("Operation Failed! :(", "error");
            }
        )
        ;
    };

    const onRemove = () => {
        const recipe: IRecipe = {
            tags: tagItems,
            favorite: false
        };
        dispatch(updateRecipe({
            jwtToken,
            recipeId: recipeItem?._id,
            recipe
        })).then(() => dispatch(getRecipeList({ jwtToken, keywords: undefined, categoryId: undefined })));
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
                            color: "warning",
                            onClick: onRemove
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
