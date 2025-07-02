import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { AddTaskModal } from "@/components/ui/module/AddTask";
import { deleteTask, selectTasks, toggleCompleteState } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Trash2 } from "lucide-react";

const Task = () => {
    const tasks = useAppSelector(selectTasks);
    // const filter = useAppSelector(selectFilter);

    const priorityColor = {
        HIGH: 'bg-red-500',
        MEDIUM: 'bg-yellow-500',
        LOW: 'bg-green-500',
    };
    const dispatch = useAppDispatch()
    return (
        <div className="space-y-4">

            <AddTaskModal />
            {tasks.map((task) => (
                <div
                    key={task.id}
                    className="p-4 rounded-2xl shadow-lg dark:bg-gray-900 text-white w-full max-w-full mx-auto"
                >
                    <div className="flex justify-between gap-4">
                        <div className=" flex items-start">

                            <span
                                className={` p-1 text-sm rounded-full ${priorityColor[task.priority] || 'bg-gray-500'
                                    }`}
                            >

                            </span>
                            <h2 className="text-xl font-semibold">{task?.title}</h2>
                        </div>

                        <div>
                            <Checkbox
                            checked={task.isCompleted} 
                            onClick={() => dispatch(toggleCompleteState(task.id))} />
                            <Button className="mx-2" onClick={() => dispatch(deleteTask(task.id))}>
                                <Trash2 />
                            </Button>
                        </div>

                    </div>
                    <p className="mt-2 text-sm text-gray-300">{task.description}</p>
                    <div className="mt-4 flex justify-between items-center text-sm">
                        <span className="text-gray-400">Due: {task?.dueDate?.toString()}</span>
                        <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${task.isCompleted ? 'bg-green-600' : 'bg-yellow-600'
                                }`}
                        >
                            {task.isCompleted ? 'Completed' : 'Pending'}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Task;
