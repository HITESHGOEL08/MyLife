import { combineReducers } from "redux";

// Stub reducer — replace with real reducers as the app grows
const _appReducer = (state = {}) => state;

export const rootReducer = combineReducers({
    _app: _appReducer,
})

export type RootState = ReturnType<typeof rootReducer>