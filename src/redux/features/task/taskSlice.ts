import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
interface InitialState {
    tasks: ITask[],
    filter: "ALL" | "HIGH" | "MEDIUM" | "LOW"
}
const initialState: InitialState = {
    tasks: [],
    filter: "ALL"
}

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            const id = uuidv4()
            const task = {
                ...action.payload,
                id,
                isCompleted: false
            }
            state.tasks.push(task)
        }
    }
})


export const selectTasks = (state: RootState) => {
    return state.todos.tasks
}
export const selectFilter = (state: RootState) => {
    return state.todos.tasks
}

export const { addTask } = taskSlice.actions

export default taskSlice.reducer

