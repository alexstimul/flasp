import { combineReducers } from "@reduxjs/toolkit"
import { AuthState, AuthReducer } from "./auth/slice"

export interface RootState {
    auth: AuthState
}

export const createRootReducer = () =>
    // преобразует объект, значениями которого являются различные функции редьюсеры, в одну функцию редьюсер
    combineReducers({
        auth: AuthReducer
    })

export default createRootReducer