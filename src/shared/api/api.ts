import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithRetry } from "./baseQuery";

export const api = createApi({
    reducerPath: 'splitApi',
    baseQuery: baseQueryWithRetry,
    tagTypes: [],
    refetchOnMountOrArgChange: true,
    endpoints: () => ({})
});