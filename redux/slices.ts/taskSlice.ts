import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ITask {
  id: number;
  title: string;
  description: string;
  notes: string;
}

interface CartState {
  items: ITask[];
  error: string | null;
}

const initialState: CartState = {
  items: [],
  error: null,
};

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
