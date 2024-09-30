import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import AsyncState from "../../core/asyncState"
import { resetReducerState } from "../action"
import { loginFailed, loginProcess, loginSuccess } from "./actions"

export type AuthState = {
    login: AsyncState<string>
    logout: AsyncState<void>
}

const initialState: AuthState = {
    login: AsyncState.create(),
    logout: AsyncState.create()
}

/*
    {
        name: 'auth',
        actions : {
            logoutProcess,
            logoutSuccess,
            logoutFailed,
        },
        reducer
    }

    logoutFailed -> { type : 'auth/logoutFailed', payload : "ошибка"
*/
const auth = createSlice({
    // Название, используемое в качестве префикса в типах операции
    name: "auth",
    // Начальное состояние
    initialState,
    // Объект с "редукторами случая". Названия ключей используются для создания операций
    reducers: {
        logoutProcess(state) {
            state.logout = state.logout.toProcess()
        },
        logoutSuccess(state) {
            state.logout = state.logout.toSuccess()
        },
        logoutFailed(state, action: PayloadAction<string>) {
            state.logout = state.logout.toFailed(action.payload)
        }
    },
    // Функция "builder callback", используемая для добавления дополнительных редукторов
    // или дополнительный объект с "редукторами случая", ключи которого должны быть другими типами операции
    // Поскольку редукторы случая, определенные с помощью extraReducers, считаются обработчиками "внешних" операций, их операции не попадают в slice.actions.
    // Такие редукторы также передаются в createReducer() и могут безопасно "мутировать" их состояние.
    extraReducers(builder) {
        builder
            .addCase(resetReducerState, () => initialState)
            .addCase(loginProcess, state => {
                state.login = state.login.toProcess()
            })
            .addCase(loginSuccess, (state, action: PayloadAction<string>) => {
                state.login = state.login.toSuccess(action.payload)
            })
            .addCase(loginFailed, (state, action: PayloadAction<string>) => {
                state.login = state.login.toFailed(action.payload)
            })
    }
})

export const AuthReducer = auth.reducer

export const actions = auth.actions