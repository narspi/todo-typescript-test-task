import { create } from "zustand";
import uniqid from 'uniqid';

interface Task {
    id: string;
    title: string;
    done: boolean;
}

interface ToDoStore {
    tasks: Task[];
    view: 'all' | 'acitve' | 'completed';
    createTask: (title: string) => void;
    updateTaskDone: (id:string) => void;
   
}

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
    }
}));

export default useToDoStore;