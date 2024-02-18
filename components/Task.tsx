import { ITask } from "@/Interfaces/ITask";
import React from "react";
import TaskCard from "./TaskCard";
import { useAppSelector } from "@/redux/hooks";
import { selectTasks } from "@/redux/features/taskSlice";

type Props = {};
// const tasks: ITask[] = [
//   { title: "task 1", description: "Home stuff", id: 1, isCompleted: false },
//   { title: "task 1", description: "Home stuff", id: 2, isCompleted: false },
//   { title: "task 1", description: "Home stuff", id: 3, isCompleted: false },
//   { title: "task 1", description: "Home stuff", id: 4, isCompleted: false },
//   { title: "task 1", description: "Home stuff", id: 5, isCompleted: false },
//   { title: "task 1", description: "Home stuff", id: 6, isCompleted: false },
// ];

const Tasks = (props: Props) => {
  const { items: tasks, error } = useAppSelector(selectTasks);
  console.log(tasks[0] ? tasks[0] : "no task");
  return (
    <div className="h-3/6 w-1/2 flex flex-col mx-auto space-y-3  ">
      <h1 className="text-2xl capitalize font-bold">Tasks</h1>
      {tasks[0] ? (
        <div className="h- overflow-y-scroll no-scrollbar snap">
          {tasks.map((task, index) => (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              isCompleted={task.isCompleted}
            />
          ))}
        </div>
      ) : (
        <div className="text-2xl text-white bg-gray-500 w-1/2 mx-auto uppercase text-center p-6 rounded-lg font-bold">
          No task
        </div>
      )}
    </div>
  );
};

export default Tasks;
