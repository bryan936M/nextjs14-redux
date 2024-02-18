import React, { MouseEvent } from "react";

type Props = {};

const TaskCard = ({
  id,
  title,
  description,
  isCompleted,
}: {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}) => {
  function handleCompleted(event: MouseEvent<HTMLButtonElement>): void {
    throw new Error("Function not implemented.");
  }

  function handleDeleteTask(event: MouseEvent<HTMLButtonElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="bg-white text-slate-500 mb-3 p-3 w-full flex flex-col rounded-lg hover:bg-slate-100 transition-all duration-300 ease-in-out">
      <h3 className="font-bold text-xl">{title}</h3>
      <p className="text-slate-500">{description}</p>
      <div className="flex justify-between items-center mt-3">
        <button
          onClick={handleCompleted}
          className="text-slate p-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-300 hover:text-white"
        >
          {isCompleted ? "Mark as not completed" : "Mark as completed"}
        </button>
        <button
          onClick={handleDeleteTask}
          className="text-slate-500 p-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-red-300 hover:text-slate-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
