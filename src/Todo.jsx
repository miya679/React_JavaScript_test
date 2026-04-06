import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './Todo.css'

export const Todo = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["Todo1", "Todo2"]);
  const [completeTodos, setCompleteTodos] = useState(["Todo3", "Todo4"]);
  return (
    <>
      <div className="input_area">
        <input placeholder="Todoを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete_area">
        <p className="title">未完了のTodo</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className="list_row">
                  <p className="todo_item">{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="complete_area">
        <p className="title">完了のTodo</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className="list_row">
                  <p className="todo_item">{todo}</p>
                  <button>戻す</button>
                </div>
              </li>
            )
          })}

        </ul>
      </div>
    </>
  )
}
