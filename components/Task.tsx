import { ITask } from "@/Interfaces/ITask";
import React from "react";
import TaskCard from "./TaskCard";

type Props = {};
const tasks: ITask[] = [
  { title: "task 1", description: "Home stuff", id: 1, isCompleted: false },
  { title: "task 1", description: "Home stuff", id: 2, isCompleted: false },
  { title: "task 1", description: "Home stuff", id: 3, isCompleted: false },
  { title: "task 1", description: "Home stuff", id: 3, isCompleted: false },
  { title: "task 1", description: "Home stuff", id: 3, isCompleted: false },
  { title: "task 1", description: "Home stuff", id: 3, isCompleted: false },
];

const Tasks = (props: Props) => {
  return (
    <div className="h-3/6 w-1/2 mx-auto space-y-3  ">
      <h1 className="text-2xl capitalize font-bold">Tasks</h1>
      <div className="h-3/4 overflow-y-scroll no-scrollbar snap">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            isCompleted={task.isCompleted}
          />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
