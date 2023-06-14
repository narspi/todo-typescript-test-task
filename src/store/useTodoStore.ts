import { create } from "zustand";
import uniqid from 'uniqid';
import { ToDoStore } from "./types";

const useToDoStore = create<ToDoStore>((set,get) => ({
    tasks: [],
    view: 'all',
    createTask: (title) => {
        const { tasks } = get();
        const newTask = {
            id: uniqid(),
            title: title,
            done: false
        }

        set({
            tasks: [newTask].concat(tasks)
        })
    },
    updateTaskDone: (id) => {
        const { tasks } = get();
       
        set({
            tasks: tasks.map((task)=>({
                ...task,
                done: task.id === id? true : task.done
            }))
        })
    },
    deleteCompletedTasks: () => {
        const { tasks } = get();

        set({
            tasks: tasks.filter((task)=>task.done === false)
        })
    },
    setView: (view) => {
        console.log('click')
        set({
            view: view
        })
    }
}));

export default useToDoStore;