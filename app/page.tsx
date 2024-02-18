'use client'
import { FormEvent, useState } from "react";
import Tasks from "../components/Task";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectTasks, taskActions } from "@/redux/features/taskSlice";
import { it } from "node:test";

export default function Home() {
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskDesc, setTaskDesc] = useState<string>("");
  const dispatch = useAppDispatch();
  const { items, error } = useAppSelector(selectTasks);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (items.length === 0) {
      dispatch(
        taskActions.addTask({
          id: 1,
          title: taskTitle,
          description: taskDesc,
          isCompleted: false,
        })
      );

      return;
    }
    const lastTask = items[items.length - 1];
    dispatch(
      taskActions.addTask({
        id: lastTask.id + 1,
        title: taskTitle,
        description: taskDesc,
        isCompleted: false,
      })
    );
  }

  return (
    <main className="h-full flex flex-col justify-end py-5 space-y-5">
      {/*tas input form */}
      <form onSubmit={handleSubmit} className="w-1/2 mx-auto space-y-2">
        <h1 className="font-extrabold text-2xl text-slate-200">Task</h1>
        <div className="flex space-x-3">
          <div className="flex space-x-3">
            <input
              type="text"
              name="task_title"
              id="task_title"
              placeholder="Task title"
              onChange={(e) => setTaskTitle(e.target.value)}
              className="bg-slate-600 w-3/4 h-full p-3 rounded-lg text-2xl text-slate-300 outline-none focus:ring-2 focus:ring-slate-500 transition-all duration-300 ease-in-out"
            />
            <input
              type="text"
              name="task_desc"
              id="task_desc"
              placeholder="Task description"
              onChange={(e) => setTaskDesc(e.target.value)}
              className="bg-slate-600 w-3/4 h-full p-3 rounded-lg text-2xl text-slate-300 outline-none focus:ring-2 focus:ring-slate-500 transition-all duration-300 ease-in-out"
            />
          </div>

          <button
            type="submit"
            className="w-1/4 bg-black text-white text-2xl p-3 rounded-lg hover:bg-slate-700 focus:ring-2 focus:ring-slate-500 transition-all duration-300 ease-in-out"
          >
            Add
          </button>
        </div>
      </form>

      {/* tasks list */}
      <Tasks />
    </main>
  );
}
