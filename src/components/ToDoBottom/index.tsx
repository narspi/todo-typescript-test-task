import useToDoStore from "../../store/useTodoStore";
import { countLengthLeft } from "../../store/helper/countLengthLeft";
import clsx from "clsx";
import { useState } from "react";

const ToDoBottom = () => {
  const countLeft = useToDoStore(countLengthLeft);
  const deleteCompletedTasks = useToDoStore(
    (state) => state.deleteCompletedTasks
  );
  const view = useToDoStore((state) => state.view);
  const setView = useToDoStore((state) => state.setView);

  const handleDeleteCompleted = () => {
    deleteCompletedTasks();
  };

  return (
    <div className="bottom">
      <div className="bottom__count-left">{countLeft} items left</div>
      <div className="bottom__sort">
        <button
          className={clsx("bottom__sort-btn", view === "all" && "active")}
          disabled={view === 'all'}
          onClick={()=>{setView('all')}}
        >
          All
        </button>
        <button
          className={clsx("bottom__sort-btn", view === "active" && "active")}
          disabled={view === 'active'}
          onClick={()=>{setView('active')}}
        >
          Active
        </button>
        <button
          className={clsx("bottom__sort-btn", view === "completed" && "active")}
          disabled={view === 'completed'}
          onClick={()=>{setView('completed')}}
        >
          Completed
        </button>
      </div>
      <button className="bottom__btn-clear" onClick={handleDeleteCompleted}>
        Clear completed
      </button>
    </div>
  );
};

export default ToDoBottom;
