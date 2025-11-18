import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./authslice.js";
import JobSlice from "./jobSlice.js";
import JobReducer from "./jobSlice.js";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { companyslice } from "./companyslice.js";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const rootreducer = combineReducers({
  auth: authSlice,
  job: JobSlice,
  jobs:JobReducer,
  company: companyslice,
});

const persistedReducer = persistReducer(persistConfig, rootreducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
