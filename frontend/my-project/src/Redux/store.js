import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./authslice.js";
import jobSlice from "./jobSlice.js";
import jobReducer from "./jobSlice.js";

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
import companyReducer, { companyslice } from "./companyslice.js";
import  applicationSlice  from "./applicationSlice.js";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const rootreducer = combineReducers({
  auth: authReducer,
  job: jobSlice,
  jobs: jobReducer,
  company: companyReducer,
  company:companyslice,
  application:applicationSlice,
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
