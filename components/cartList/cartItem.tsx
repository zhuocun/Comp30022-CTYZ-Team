import React, { FC, PropsWithChildren, useState } from "react";
import { Checkbox, List } from "antd-mobile";
import styles from "./index.module.css";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import { getCart, updateIngredient } from "../../redux/reducers/cartSlice";

const CartItem: FC<PropsWithChildren<{ cartItem: ICartItem }>> = ({
                                                                      cartItem
                                                                  }) => {
    const dispatch = useReduxDispatch();
    const jwtToken = useReduxSelector(s => s.authentication.jwtToken);
    const [checked, setChecked] = useState(cartItem.check);

    const toggleChecked = () => {
        setChecked(!checked);
        const newCartItem: ICartItem = {
            ...cartItem,
            check: checked
        };
        dispatch(updateIngredient({ jwtToken, cartItem: newCartItem }));
        dispatch(getCart(jwtToken));
    };

    return (
        <List.Item
            prefix={
                <div
                    onClick={(e) => e.stopPropagation()}
                >
                    <Checkbox
                        className={styles["checkbox"]}
                        value={cartItem.ingredient}
                        onChange={toggleChecked}
                        style={{ "--icon-size": "18px" }}
                        checked={checked}
                    />
                </div>
            }
            style={{
                textDecoration: checked ? "line-through" : "none"
            }}
            arrow={false}
        >
            {cartItem.ingredient}
        </List.Item>
    );
};

export default CartItem;
