import { getItemFromLocalStorage } from "../lib/utils";
import { RootState } from "../lib/types";

export const prepareHeaders = (
    headers: Headers,
    { getState }: { getState: () => RootState }
) => {
    const token =
        (getState() as RootState).auth.user?.token
        || getItemFromLocalStorage('token');

    if (token && token !== null) {
        headers.set('Authorization', `Bearer ${token}`);
    }
};
