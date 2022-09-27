import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface categoriesState {
    loading: boolean;
    error: string | null;
    categories: ICategory[] | null;
}

const initialState: categoriesState = {
    loading: false,
    error: null,
    categories: null
};

export const getCategories = createAsyncThunk(
    "recipe/getCategories",
    async (
        jwtToken: string | null
    ) => {
        const axiosResponse = await axios.get(
            `https://itproject-online-cookbook.herokuapp.com/api/v1/category`,
            {
                headers: {
                    Authorization: `Bearer ${jwtToken}`
                }
            }
        );
        return axiosResponse.data;
    }
);

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: {
        [getCategories.pending.type]: (state) => {
            state.loading = true;
        },
        [getCategories.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.categories = action.payload;
        },
        [getCategories.rejected.type]: (
            state,
            action
        ) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});
