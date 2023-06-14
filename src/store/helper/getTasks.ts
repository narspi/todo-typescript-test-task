import { ToDoStore } from "../types"

export const getTasks = (state:ToDoStore) => {
    if (state.view === 'all') return state.tasks;
    if (state.view === 'active') return state.tasks.filter(task=>task.done === false);
    if (state.view === 'completed') return state.tasks.filter(task=>task.done === true);
    throw new Error('unknown status')
}