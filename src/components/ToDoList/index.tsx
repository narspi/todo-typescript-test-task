import useToDoStore from "../../store/useTodoStore";
import ToDoItem from "./ToDoItem";
import { getTasks } from '../../store/helper/getTasks';

const ToDoList = () => {
  const tasks = useToDoStore(getTasks);

  return (
    <ul className="spicok">
      {tasks.length ? (
        tasks.map((task) => (
          <ToDoItem key={task.id} id={task.id} title={task.title} done={task.done}/>
        ))
      ) : (
        <div className="no-spicok">No one task</div>
      )}
    </ul>
  );
};

export default ToDoList;
