'use client'
import { FormEvent } from "react";
import Tasks from "../components/Task";

export default function Home() {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <main className="h-full flex flex-col justify-end py-5 space-y-5">
      {/*tas input form */}
      <form onSubmit={handleSubmit} className="w-1/2 mx-auto space-y-2">
        <h1 className="font-extrabold text-2xl text-slate-200">Task</h1>
        <div className="flex space-x-3">
          <input
            type="text"
            name="task_input"
            id="task_input"
            className="bg-slate-600 w-3/4 h-full p-3 rounded-lg text-2xl text-slate-300"
          />
          <button
            type="submit"
            className="w-1/4 bg-black text-white text-2xl p-3 rounded-lg hover:bg-slate-700 transition-all duration-300 ease-in-out"
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
