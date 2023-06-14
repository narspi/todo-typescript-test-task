import useToDoStore from "../../store/useTodoStore";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  const tasks = useToDoStore((state) => state.tasks);

  console.log(tasks)

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
