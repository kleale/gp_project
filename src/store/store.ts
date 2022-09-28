import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/themeSlice";
import registrationReducer from "./reducers/registrationSlice";
import organizationInfoReducer from "./reducers/organizationInfoSlice";
import feedbackFormReducer from "./reducers/feedbackFormSlice";
import organizationUsersReduser from "./reducers/organizationUsersSlice";

const rootReducer = combineReducers({
  themeReducer,
  registrationReducer,
  organizationInfoReducer,
  organizationUsersReduser,
  feedbackFormReducer,
});
export function setupStore() {
  return configureStore({ reducer: rootReducer });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
