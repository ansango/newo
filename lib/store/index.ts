import {
  configureStore,
  ThunkAction,
  Action,
  type ConfigureStoreOptions,
} from "@reduxjs/toolkit";
import { api } from "./api";
import auth from "./features/auth";

export const makeStore = (
  options?: ConfigureStoreOptions["preloadedState"] | undefined
) => {
  return configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      auth,
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
