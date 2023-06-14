import useToDoStore from "../../store/useTodoStore";
import { RxCircle, RxCheckCircled } from "react-icons/rx";
import { MdDelete } from "react-icons/md";
import clsx from "clsx";

const ToDoItem = ({ id, title, done }: { id: string; title: string, done: boolean }) => {
  const [updateTaskDone] = useToDoStore(state=>[state.updateTaskDone]);
  const handleChangeDone = () => {
    updateTaskDone(id);
  }
  return (
    <li className={clsx("spicok__elem",done && 'bg-green')}>
      <button className={clsx("spicok__btn-done",done && 'green')} onClick={handleChangeDone} disabled={done}>
        {done? <RxCheckCircled /> : <RxCircle />}
      </button>
      <span className={clsx("spicok__elem-title",done && 'decoration')}>{title}</span>
    </li>
  );
};

export default ToDoItem;
