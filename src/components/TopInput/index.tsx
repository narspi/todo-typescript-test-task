import { KeyboardEvent, ChangeEvent, useState } from "react";
import { TbSquareRoundedArrowDown } from "react-icons/tb";
import useToDoStore from "../../store/useTodoStore";
import clsx from "clsx";

const TopInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (event:ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const createTask = useToDoStore((state) => state.createTask);
  
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.trim().length > 0 ) {
      createTask(inputValue);
      setInputValue('');
    }
  };

  return (
    <label className="add">
      <TbSquareRoundedArrowDown className={clsx('add__icon', inputValue.trim().length > 0 && 'active')} />
      <input
        className='add__input'
        type="text"
        placeholder="What needs to be done?"
        value={inputValue}
        onChange={handleOnChange}
        onKeyUp={handleKeyPress}
      />
    </label>
  );
};

export default TopInput;
