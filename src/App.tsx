import "./App.css";
import TopInput from "./components/TopInput";
import ToDoList from "./components/ToDoList";
import ToDoBottom from "./components/ToDoBottom";

const App = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <TopInput />        
        <ToDoList />
        <ToDoBottom />
      </div>
    </div>
  );
};

export default App;
