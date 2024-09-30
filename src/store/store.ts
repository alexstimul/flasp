import { configureStore } from "@reduxjs/toolkit";
import createRootReducer from "./rootReducer";


const store = configureStore({
    reducer: createRootReducer(),
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
    devTools: true // убрать в релизе
})

export type Store = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store