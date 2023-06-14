import { ToDoStore } from "../types";

export const countLengthLeft = (state:ToDoStore) => state.tasks.filter(task => task.done === false).length;