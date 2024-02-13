import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slices.ts/taskSlice";

const store =  configureStore({
  reducer: {
    // Add reducers here
    task: taskReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;