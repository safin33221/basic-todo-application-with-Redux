import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    tasks: ITask[],
    filter: "ALL" | "HIGH" | "MEDIUM" | "LOW"
}
const initialState: InitialState = {
    tasks: [

        {
            id: 'adsdf',
            title: "herrolo",
            description: 'lorem skdfj;sdjf;kl lkkjsdjfsd',
            dueDate: '2025-11',
            isCompleted: false,
            priority: "HIGH"

        },
        {
            id: 'adsdf',
            title: "herrolo",
            description: 'lorem skdfj;sdjf;kl lkkjsdjfsd',
            dueDate: '2025-11',
            isCompleted: false,
            priority: "LOW"

        },


    ],
    filter: "ALL"
}

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {}
})


export const selectTasks = (state: RootState) => {
    return state.todos.tasks
}
export const selectFilter = (state: RootState) => {
    return state.todos.tasks
}

export default taskSlice.reducer

