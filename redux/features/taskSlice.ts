import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IState } from "../../Interfaces/IState";

const initialState: IState = {
  items: [],
  error: null,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<any>) => {
      // Add task to state
      state.items.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<any>) => {
      // Remove task from state
      state.items.filter((val) => val != action.payload);
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
