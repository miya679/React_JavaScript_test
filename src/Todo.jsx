import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './Todo.css'

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["Todo1", "Todo2"]);
  const [completeTodos, setCompleteTodos] = useState(["Todo3", "Todo4"]);

  const onChangedTodoText = (event) => {
    setTodoText(event.target.value);
  }

  const onClickedAdd = () => {
    const newTodos = [...incompleteTodos, todoText];
    setCompleteTodos(newTodos);
    setTodoText("");
  }

  const onClickedDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }

  const onClickedComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  const onClickedBack = (index) => {
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  return (
    <>
      <div className="input_area">
        <input placeholder="Todoを入力" value={todoText} onChange={onChangedTodoText} />
        <button onClick={onClickedAdd()}>追加</button>
      </div>
      <div className="incomplete_area">
        <p className="title">未完了のTodo</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list_row">
                  <p className="todo_item">{todo}</p>
                  <button onClick={() => { onClickedComplete(index) }}>完了</button>
                  <button onClick={() => { onClickedDelete(index) }}>削除</button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="complete_area">
        <p className="title">完了のTodo</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list_row">
                  <p className="todo_item">{todo}</p>
                  <button onClick={() => { onClickedBack(index) }}>戻す</button>
                </div>
              </li>
            )
          })}

        </ul>
      </div>
    </>
  )
}
