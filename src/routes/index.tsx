import App from "@/App";
import Task from "@/Pages/Task";
import User from "@/Pages/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: '/',
        // element: <App/>,
        Component: App,
        children: [
            {
                path: '/users',
                Component: User
            },
            {
                index: true,
                // path: '/task',
                Component: Task
            }
        ]
    }
])
export default router