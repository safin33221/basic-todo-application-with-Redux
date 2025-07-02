import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    tasks: ITask[],
    filter: "ALL" | "HIGH" | "MEDIUM" | "LOW"
}
const initialState: InitialState = {
    tasks: [
        {
            "id": "hy_979YXuqtlHqImvCmPK",
            "isCompleted": false,
            "title": "Optio ea dolore ali",
            "description": "Qui in blanditiis po",
            "priority": "LOW",
            "dueDate": "2025-07-17T18:00:00.000Z",
        }
    ],
    filter: "ALL"
}



type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">

const createTask = (taskData: DraftTask): ITask => {
    return { id: nanoid(), isCompleted: false, ...taskData }
}
const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            const task = createTask(action.payload)
            state.tasks.push(task)
        },
        toggleCompleteState: (state, action: PayloadAction<string>) => {
            state.tasks.forEach((task) => task.id === action.payload ? task.isCompleted = !task.isCompleted : task)
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        }
    }
})


export const selectTasks = (state: RootState) => {
    return state.todos.tasks
}
export const selectFilter = (state: RootState) => {
    return state.todos.tasks
}

export const { addTask, toggleCompleteState,deleteTask } = taskSlice.actions

export default taskSlice.reducer

