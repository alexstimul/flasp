import { LoginRequest } from "../../models/login";
import { ActionResult, Dispatch } from "../../models/store";
import { loginFailed, loginProcess, loginSuccess } from "./actions";
import { actions } from "./slice";

export const login = 
    (loginData: LoginRequest): ActionResult<Promise<void>> => 
    async (dispatch: Dispatch) => {
        try {
            dispatch(loginProcess())

            // запрос на получение пользователя

            dispatch(loginSuccess(loginData.login))
        } catch (error) {
            dispatch(loginFailed("Login error"))
        }
    }

export const logout = (): ActionResult<Promise<void>> => async (dispatch: Dispatch) => {
    dispatch(actions.logoutProcess()) 
    
    try {
        // запрос на логаут пользователя

        dispatch(actions.logoutSuccess())
    } catch (error) {
        dispatch(loginFailed("Login error"))
    }
}