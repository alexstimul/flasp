import { ThunkAction, ThunkDispatch } from "@reduxjs/toolkit"
import { RootState } from "../store/store"
import { Action } from "redux"

type DefaultExtraArg = undefined

export type ActionResult<Result> = ThunkAction<Result, RootState, DefaultExtraArg, Action>
export type Dispatch = ThunkDispatch<RootState, DefaultExtraArg, Action>