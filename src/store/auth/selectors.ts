import { RootState } from "../rootReducer"

export const selectLoginState = (state: RootState) => state.auth.login
export const selectLogoutState = (state: RootState) => state.auth.logout