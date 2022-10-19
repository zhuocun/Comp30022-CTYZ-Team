import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface CartState {
    loading: boolean;
    error: string | null;
    cartItems: ICartItem[] | null;
}

const initialState: CartState = {
    loading: false,
    error: null,
    cartItems: null
};

export const addToCart = createAsyncThunk(
    "cart/addToCart",
    async (parameters: { jwtToken: string | null, recipeId: string | undefined }) => {
        const axiosResponse = await axios.post(
            `https://itproject-online-cookbook.herokuapp.com/api/v1/cart/${parameters.recipeId}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${parameters.jwtToken}`
                }
            }
        );
        return axiosResponse.data;
    }
);

export const deleteCartItem = createAsyncThunk(
    "cart/deleteCartItem",
    async (parameters: {
        jwtToken: string | null, cartItemId: string
    }) => {
        const axiosResponse = await axios.delete(
            `https://itproject-online-cookbook.herokuapp.com/api/v1/cart/`,
            {
                headers: {
                    Authorization: `Bearer ${parameters.jwtToken}`
                }
            }
        );
        return axiosResponse.data;
    }
);

export const getCart = createAsyncThunk(
    "cart/getCart",
    async (jwtToken: string | null) => {
        const axiosResponse = await axios.get(
            `https://itproject-online-cookbook.herokuapp.com/api/v1/cart`,
            {
                headers: {
                    Authorization: `Bearer ${jwtToken}`
                }
            }
        );
        return axiosResponse.data;
    }
);

export const updateIngredient = createAsyncThunk(
    "cart/updateIngredient",
    async (parameters: { jwtToken: string | null, cartItem: ICartItem }) => {
        const axiosResponse = await axios.patch(
            `https://itproject-online-cookbook.herokuapp.com/api/v1/cart/${parameters.cartItem._id}`,
            {
                _id: parameters.cartItem._id,
                user: parameters.cartItem.user,
                ingredient: parameters.cartItem.ingredient,
                check: parameters.cartItem.check
            },
            {
                headers: {
                    Authorization: `Bearer ${parameters.jwtToken}`
                }
            }
        );
        return axiosResponse.data;
    }
);

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: {
        [addToCart.pending.type]: (state) => {
            state.loading = true;
        },
        [addToCart.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.cartItems = action.payload;
        },
        [addToCart.rejected.type]: (
            state,
            action: PayloadAction<string | null>
        ) => {
            state.loading = false;
            state.error = action.payload;
        },
        [getCart.pending.type]: (state) => {
            state.loading = true;
        },
        [getCart.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.cartItems = action.payload;
        },
        [getCart.rejected.type]: (
            state,
            action: PayloadAction<string | null>
        ) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});
