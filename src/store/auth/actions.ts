import { createAction } from "@reduxjs/toolkit"

export const loginProcess = createAction("auth/loginProcess")
export const loginSuccess = createAction<string>("auth/loginSuccess")
export const loginFailed = createAction<string>("auth/loginFailed")