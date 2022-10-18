import React, { FC, PropsWithChildren, useRef, useState } from "react";
import { Checkbox, List } from "antd-mobile";
// import { CheckboxRef } from "../checkbox";
import styles from "./index.module.css";

const items = ["Apple", "Orange", "Banana"];

const ListItemWithCheckbox: FC<
    PropsWithChildren<{
        item: string
    }>
> = (props) => {
    // const checkboxRef = useRef < CheckboxRef > null;

    const [checked, setChecked] = useState(false);

    const toggleChecked = () => {
        setChecked(!checked);
    };

    return (
        <List.Item
            prefix={
                <div
                    onClick={(e) => e.stopPropagation()}
                >
                    <Checkbox
                        className={styles["checkbox"]}
                        value={props.item}
                        // ref={checkboxRef}
                        onChange={toggleChecked}
                        style={{'--icon-size': '18px'}}
                    />
                    
                </div>
            }
                                    style={{
                            textDecoration: checked ? "line-through" : "none"
                            
                        }}
            // onClick={checkboxRef.current?.toggle()}
            arrow={false}
        >
            {props.item}
        </List.Item>
    );
};

export const ShoppingItem: React.FC = (
    {
        // loading,
        // recipeItem
    }
) => {
    return (
        <>
            <Checkbox.Group>
                <List>
                    {items.map((item) => (
                        <ListItemWithCheckbox key={item} item={item} />
                    ))}
                </List>
            </Checkbox.Group>
        </>
    );
};
