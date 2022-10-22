import React from "react";
import { Button, Tag } from "antd";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const TagBar: React.FC<{ tags: ITag[] | null }> = ({ tags }) => {
    const tagButton: JSX.Element[] = [];
    const router = useRouter();
    const onSearch = (tagId: string) => {
        router.push(`tag/${tagId}`);
    };
    if (tags) {
        tags.map((t) => {
            tagButton.push(<Button size={"small"} type={"link"}
                                   onClick={() => onSearch(t._id)}>{"#" + t.name + " "}</Button>);
        });
    }

    if (tags) {
        return (
            <div className={styles["tags"]} style={{ marginLeft: 20 }}>
                {tagButton}
            </div>
        );
    } else {
        return <></>;
    }
};

export default TagBar;
