import React from "react";
import { Checkbox, List } from "antd-mobile";
import CartItem from "./cartItem";
import { Spin } from "antd";
import { useReduxSelector } from "../../redux/hooks";


export const CartList: React.FC<{ cartItems: ICartItem[] | null }> = (
    {
        cartItems
    }
) => {

    const items: ICartItem[] = [];
    if (cartItems) {
        for (const c of cartItems) {
            items.push(c);
        }
    }

    return (
        <>
            <Checkbox.Group>
                <List>
                    {items.map((cartItem) => (
                        <CartItem key={cartItem._id} cartItem={cartItem} />
                    ))}
                </List>
            </Checkbox.Group>
        </>
    );
};
