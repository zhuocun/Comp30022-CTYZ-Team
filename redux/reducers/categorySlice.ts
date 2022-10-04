import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface categoriesState {
    loading: boolean;
    error: string | null;
    categoryList: ICategory[] | null;
}

const initialState: categoriesState = {
    loading: false,
    error: null,
    categoryList: null
};

export const getCategories = createAsyncThunk(
        "recipe/getCategories",
        async (
            parameters: { jwtToken: string | null }
        ) => {
            const axiosResponse = await axios.get(
                `https://itproject-online-cookbook.herokuapp.com/api/v1/category`,
                {
                    headers: {
                        Authorization: `Bearer ${parameters.jwtToken}`
                    }
                }
            );
            return axiosResponse.data.categories;
        }
    )
;

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
            state.categoryList = action.payload;
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
