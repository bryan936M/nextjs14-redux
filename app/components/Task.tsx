import { useAppDispatch, useAppSelector } from '@/redux/helpers/hooks'
import { selectTasks, taskActions } from '@/redux/slices.ts/taskSlice'
import React from 'react'

type Props = {}

const Tasks = (props: Props) => {

  const dispatch = useAppDispatch()
  const {items, error} = useAppSelector(selectTasks)

  return <div>
    <h1>Task Manager</h1>
    <input type="text" name="task_input" id="task_input" />
    <form>
      <div>
        <p>task 1</p>
        <button type="button">edit</button>
        <button type="button">Delete</button>
      </div>
    </form>
  </div>;
}

export default Tasks