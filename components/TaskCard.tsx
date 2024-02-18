import React, { FormEvent } from "react";

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
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white text-slate-500 mb-3 p-3 w-full flex flex-col rounded-lg">
      <h3 className="font-bold text-xl">{title}</h3>
      <p className="text-slate-500">{description}</p>
      <div className="flex justify-between items-center mt-3">
        <button className="text-slate p-2 rounded-lg hover:bg-blue-300 hover:text-white">
          {isCompleted ? "Mark as not completed" : "Mark as completed"}
        </button>
        <button className="text-slate-500 p-2 rounded-lg hover:bg-red-300 hover:text-slate-600">
          Delete
        </button>
      </div>
    </form>
  );
};

export default TaskCard;
