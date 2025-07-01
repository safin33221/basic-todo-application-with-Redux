
import { Button } from "@/components/ui/button";

import {

    Dialog,

    DialogContent,

    DialogFooter,

    DialogHeader,

    DialogTitle,

    DialogTrigger,

} from "@/components/ui/dialog";



import { useForm } from "react-hook-form";





import { cn } from "@/lib/utils";

import { CalendarIcon } from "lucide-react";



import { format } from "date-fns";

import { useAppDispatch } from "@/redux/hooks";

import { addTask } from "@/redux/features/task/taskSlice";


import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../select";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { Calendar } from "../calendar";
import { Input } from "../input";
import { Textarea } from "../textarea";
import type { ITask } from "@/types";



export function AddTaskModal() {

    const [open, setOpen] = useState(false);

    const form = useForm();

    const dispatch = useAppDispatch();

    // const users = useAppSelector(selectUsers);



    const onSubmit = (data: ITask) => {

        dispatch(addTask(data));

        setOpen(false);

        form.reset();

    };



    return (

        <Dialog open={open} onOpenChange={setOpen}>

            <form>

                <DialogTrigger asChild>

                    <Button variant="outline">Add Task</Button>

                </DialogTrigger>

                <DialogContent className="sm:max-w-[425px]">

                    <DialogHeader>

                        <DialogTitle>Edit profile</DialogTitle>

                    </DialogHeader>



                    <Form {...form}>

                        <form onSubmit={form.handleSubmit(onSubmit)}>

                            <FormField

                                control={form.control}

                                name="title"

                                render={({ field }) => (

                                    <FormItem>

                                        <FormLabel>Title</FormLabel>

                                        <FormControl>

                                            <Input {...field} value={field.value || " "} />

                                        </FormControl>

                                    </FormItem>

                                )}

                            />



                            <FormField

                                control={form.control}

                                name="description"

                                render={({ field }) => (

                                    <FormItem className="my-2">

                                        <FormLabel>Description</FormLabel>

                                        <FormControl>

                                            <Textarea {...field} value={field.value || " "} />

                                        </FormControl>

                                    </FormItem>

                                )}

                            />



                            <FormField

                                control={form.control}

                                name="priority"

                                render={({ field }) => (

                                    <FormItem className="w-full">

                                        <FormLabel>Priority</FormLabel>

                                        <Select

                                            onValueChange={field.onChange}

                                            defaultValue={field.value}

                                        >

                                            <FormControl>

                                                <SelectTrigger className="w-full">

                                                    <SelectValue placeholder="Select a level of priority" />

                                                </SelectTrigger>

                                            </FormControl>

                                            <SelectContent>

                                                <SelectItem value="High">High</SelectItem>

                                                <SelectItem value="Medium">Medium</SelectItem>

                                                <SelectItem value="Low">Low</SelectItem>

                                            </SelectContent>

                                        </Select>



                                    </FormItem>

                                )}

                            />



                            <FormField

                                control={form.control}

                                name="dueDate"

                                render={({ field }) => (

                                    <FormItem className="flex flex-col my-2">

                                        <FormLabel>Due Date</FormLabel>

                                        <Popover>

                                            <PopoverTrigger asChild>

                                                <FormControl>

                                                    <Button

                                                        variant={"outline"}

                                                        className={cn(

                                                            "w-full pl-3 text-left font-normal",

                                                            !field.value && "text-muted-foreground"

                                                        )}

                                                    >

                                                        {field.value ? (

                                                            format(field.value, "PPP")

                                                        ) : (

                                                            <span>Pick a date</span>

                                                        )}

                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />

                                                    </Button>

                                                </FormControl>

                                            </PopoverTrigger>

                                            <PopoverContent className="w-auto p-0" align="start">

                                                <Calendar

                                                    mode="single"

                                                    selected={field.value}

                                                    onSelect={field.onChange}

                                                    disabled={(date) =>

                                                        date > new Date() || date < new Date("1900-01-01")

                                                    }

                                                    captionLayout="dropdown"

                                                />

                                            </PopoverContent>

                                        </Popover>



                                    </FormItem>

                                )}

                            />



                            {/* <FormField

                                control={form.control}

                                name="assignedTo"

                                render={({ field }) => (

                                    <FormItem className="w-full">

                                        <FormLabel>Assign To</FormLabel>

                                        <Select

                                            onValueChange={field.onChange}

                                            defaultValue={field.value}

                                        >

                                            <FormControl>

                                                <SelectTrigger className="w-full">

                                                    <SelectValue placeholder="Select a level of priority" />

                                                </SelectTrigger>

                                            </FormControl>

                                            <SelectContent>

                                                {users.map((user) => (

                                                    <SelectItem value={user.id}>{user.name}</SelectItem>

                                                ))}

                                            </SelectContent>

                                        </Select>

                                        <FormMessage />

                                    </FormItem>

                                )}

                            /> */}



                            <DialogFooter className="mt-3">

                                <Button variant="outline">Submit</Button>

                            </DialogFooter>

                        </form>

                    </Form>

                </DialogContent>

            </form>

        </Dialog>

    );

}



