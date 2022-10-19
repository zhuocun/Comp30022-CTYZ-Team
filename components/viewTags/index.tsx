import React, { useEffect } from "react";
import { Row, Col } from "antd";
import styles from "./index.module.css";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import { getAllTags } from "../../redux/reducers/recipeSlice";

const viewTags: React.FC<{ tagIds: string[] | undefined }> = ({ tagIds }) => {

    const dispatch = useReduxDispatch();
    const tagList = useReduxSelector(s => s.recipe.tags);
    const jwtToken = useReduxSelector(s => s.authentication.jwtToken);
    const tagItems: JSX.Element[] = [];
    if (tagList && tagIds) {
        for (const tagId of tagIds) {
            let targetTag: string = "";
            for (const t of Array.from(tagList)) {
                if (t._id === tagId) {
                    targetTag = t.name;
                    console.log(targetTag);
                    break;
                }
            }
            tagItems.push(<Col className={styles["tags"]}>#{targetTag}</Col>);
        }
    }
    useEffect(() => {
        dispatch(getAllTags(jwtToken));
    }, [dispatch, jwtToken]);
    return (
        <>
            <Row className={styles["row"]}>
                {tagItems}
            </Row>
        </>
    );
};

export default viewTags;
