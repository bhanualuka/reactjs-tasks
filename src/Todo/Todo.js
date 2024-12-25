import { useDispatch, useSelector } from "react-redux";
import {
  addSearch,
  addTodo,
  DeleteTodo,
} from "../reduxToolkit/slices/TodoSlice";
import "./Todo.css";

const Todo = () => {
  const { search, todos } = useSelector((state) => state.Todo);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Todo</h1>
      <div className="Todo-container">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            dispatch(addSearch(e.target.value));
          }}
        />
        <button
          onClick={() => {
            search !== "" && dispatch(addTodo());
          }}
        >
          ADD
        </button>
      </div>

      <div className="content">
        {todos.map((item, index) => {
          return (
            <div>
              <h3>
                {item}
                <button
                  onClick={() => {
                    DeleteTodo(dispatch(DeleteTodo(index)));
                  }}
                >
                  {" "}
                  del{" "}
                </button>
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
