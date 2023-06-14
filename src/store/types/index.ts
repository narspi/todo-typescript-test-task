export interface Task {
    id: string;
    title: string;
    done: boolean;
}

export interface ToDoStore {
    tasks: Task[];
    view: 'all' | 'active' | 'completed';
    createTask: (title: string) => void;
    updateTaskDone: (id:string) => void;   
    deleteCompletedTasks: () => void;
    setView: (view: 'all' | 'active' | 'completed') => void
}