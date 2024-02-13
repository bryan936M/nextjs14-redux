import { configureStore } from "@reduxjs/toolkit";

const store =  configureStore({
  reducer: {
    // Add reducers here
    task:
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;