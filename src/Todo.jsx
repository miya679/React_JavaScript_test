import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './Todo.css'

export const Todo = () => {
  return (
    <>
      <div className="input_area">
        <input placeholder="Todoを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete_area">
        <p className="title">未完了のTodo</p>
        <ul>
          <li>
            <div className="list_row">
              <p className="todo_item">Todo1</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
          <li>
            <div className="list_row">
              <p className="todo_item">Todo2</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        </ul>
      </div>
      <div className="complete_area">
        <p className="title">完了のTodo</p>
        <ul>
          <li>
            <div className="list_row">
              <p className="todo_item">Todo3</p>
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}
