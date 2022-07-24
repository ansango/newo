import {
  configureStore,
  ThunkAction,
  Action,
  type ConfigureStoreOptions,
} from "@reduxjs/toolkit";
import { api } from "./api";

export const makeStore = (
  options?: ConfigureStoreOptions["preloadedState"] | undefined
) => {
  return configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    ...options,
  });
};

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
