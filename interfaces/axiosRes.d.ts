import { PayloadAction, SerializedError } from "@reduxjs/toolkit";

type TAxiosRes =
    PayloadAction<any, string, {
        arg: any,
        requestId: string,
        requestStatus: "fulfilled"
    }, never> |
    PayloadAction<unknown, string, {} | unknown, SerializedError>;
