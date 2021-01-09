import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga"
import { rootReducer } from "./rootReducer";
import { rootSaga } from "./rootSaga";

type State = {}

const initialState: State = {}
export const configureStore = () => {

    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer, initialState, applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(rootSaga);
    return store

}