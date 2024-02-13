import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: any = [
  { id: 1, title: "Task 1", description: "Description 1", notes: "Notes 1" },
]; // Initial state

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<any>) => {
      // Add task to state
    },
    removeTask: (state, action: PayloadAction<any>) => {
      // Remove task from state
    },
    updateTask: (state, action: PayloadAction<any>) => {
      // Update task in state
    },
  },
  extraReducers(builder) {
    // Add extra reducers here
  },
});

export const selectTasks = (state: RootState) => state.task; // Selectors
export const taskActions = taskSlice.actions;

export default taskSlice.reducer;
