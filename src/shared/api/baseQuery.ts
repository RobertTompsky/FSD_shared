import { fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { prepareHeaders } from './prepareHeaders';

export const baseQuery = fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}`,
    prepareHeaders: (
        headers,
        { getState }
    ) => prepareHeaders(headers, { getState }),
});

export const baseQueryWithRetry = retry(
    baseQuery,
    { maxRetries: 1 }
);