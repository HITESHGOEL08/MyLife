import { configureStore as createReduxStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

export const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createReduxStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
    });

    sagaMiddleware.run(rootSaga);
    return store;
};