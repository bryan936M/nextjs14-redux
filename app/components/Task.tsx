import { useAppDispatch, useAppSelector } from '@/redux/helpers/hooks'
import { selectTasks, taskActions } from '@/redux/slices.ts/taskSlice'
import React from 'react'

type Props = {}

const Tasks = (props: Props) => {

  const dispatch = useAppDispatch()
  const {items, error} = useAppSelector(selectTasks)

  return (
    <div>Tasks</div>
  )
}

export default Tasks