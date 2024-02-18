'use client'
import { FormEvent } from "react";
import Tasks from "../components/Task";

export default function Home() {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <main className="h-full flex flex-col justify-center space-y-5">
      {/*tas input form */}
      <form onSubmit={handleSubmit} className="max-w-min mx-auto space-y-2">
        <h1 className="font-extrabold text-2xl text-slate-200">Task</h1>
        <div className="flex space-x-3">
          <input
            type="text"
            name="task_input"
            id="task_input"
            className="bg-slate-600 h-full p-3 rounded-lg text-2xl text-slate-300"
          />
          <button
            type="submit"
            className="bg-black text-white text-2xl p-3 rounded-lg"
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
