import React from "react";
import { List } from "antd-mobile";
import CartItem from "./cartItem";

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
        <List>
            {items.map((cartItem) => (
                <CartItem key={cartItem._id} cartItem={cartItem} />
            ))}
        </List>
    );
};
