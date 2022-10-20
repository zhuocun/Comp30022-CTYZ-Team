import { PayloadAction, SerializedError } from "@reduxjs/toolkit";

type TAxiosRes =
    PayloadAction<any, string, {
        arg: { jwtToken: string | null, recipeId: string | undefined },
        requestId: string,
        requestStatus: "fulfilled"
    }, never> |
    PayloadAction<unknown, string, {} | unknown, SerializedError>
