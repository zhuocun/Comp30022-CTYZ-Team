import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface RecipeState {
    loading: boolean;
    error: string | null;
    recipe: Recipe | null;
    recipeList: Recipe[] | null;
    recipeCache: Recipe | null;
}

const initialState: RecipeState = {
    loading: false,
    error: null,
    recipe: null,
    recipeList: null,
    recipeCache: null
};

export const createRecipe = createAsyncThunk(
    "recipe/createRecipe",
    async (parameters: {
        jwtToken: string | null, recipe: Recipe | null
    }) => {
        const axiosResponse = await axios.post(
            ``,
            {
                recipe: parameters.recipe
            },
            {
                headers: {
                    tokens: `${parameters.jwtToken}`
                }
            }
        );
        return axiosResponse.data.token;
    }
);

export const getRecipeList = createAsyncThunk(
    "recipe/getRecipeList",
    async (
        jwtToken: string | null
    ) => {
        const axiosResponse = await axios.get(
            ``,
            {
                headers: {
                    tokens: `${jwtToken}`
                }
            }
        );
        return axiosResponse.data.token;
    }
);

export const searchForRecipe = createAsyncThunk(
    "recipe/searchForRecipe",
    async (
        parameters: {
            jwtToken: string | null, keywords: string | string[] | undefined
        }
    ) => {
        const axiosResponse = await axios.get(
            ``,
            {
                headers: {
                    tokens: `${parameters.jwtToken}`
                }
            }
        );
        return axiosResponse.data.token;
    }
);

export const updateRecipe = createAsyncThunk(
    "recipe/updateRecipe",
    async (parameters: {
        jwtToken: string | null, recipeId: string | null, recipe: Recipe | null
    }) => {
        const axiosResponse = await axios.put(
            ``,
            {
                recipeId: parameters.recipeId,
                recipe: parameters.recipe
            },
            {
                headers: {
                    tokens: `${parameters.jwtToken}`
                }
            }
        );
        return axiosResponse.data.token;
    }
);

export const deleteRecipe = createAsyncThunk(
    "recipe/deleteRecipe",
    async (parameters: {
        jwtToken: string | null, recipeId: string | null
    }) => {
        const axiosResponse = await axios.delete(
            ``,
            {
                headers: {
                    tokens: `${parameters.jwtToken}`
                }
            }
        );
        return axiosResponse.data.token;
    }
);

export const recipeSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        logout: (state) => {
            state.loading = false;
            state.error = null;
            state.recipe = null;
        }
    },
    extraReducers: {
        [createRecipe.pending.type]: (state) => {
            state.loading = true;
        },
        [createRecipe.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.recipe = action.payload;
        },
        [createRecipe.rejected.type]: (
            state,
            action: PayloadAction<Recipe | null>
        ) => {
            state.loading = false;
            state.recipe = action.payload;
        },
        [updateRecipe.pending.type]: (state) => {
            state.loading = true;
        },
        [updateRecipe.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.recipe = action.payload;
        },
        [updateRecipe.rejected.type]: (
            state,
            action: PayloadAction<Recipe | null>
        ) => {
            state.loading = false;
            state.recipe = action.payload;
        },
        [deleteRecipe.pending.type]: (state) => {
            state.loading = true;
        },
        [deleteRecipe.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.recipe = action.payload;
        },
        [deleteRecipe.rejected.type]: (
            state
        ) => {
            state.loading = false;
            state.recipe = null;
        },
        [getRecipeList.pending.type]: (state) => {
            state.loading = true;
        },
        [getRecipeList.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.recipe = action.payload;
        },
        [getRecipeList.rejected.type]: (
            state,
            action: PayloadAction<Recipe[] | null>
        ) => {
            state.loading = false;
            state.recipeList = action.payload;
        },
        [getRecipeList.pending.type]: (state) => {
            state.loading = true;
        },
        [getRecipeList.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.recipe = action.payload;
        },
        [getRecipeList.rejected.type]: (
            state,
            action: PayloadAction<Recipe[] | null>
        ) => {
            state.loading = false;
            state.recipeList = action.payload;
        }

    }
});
