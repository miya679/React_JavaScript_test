import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

export const Todo = () => {
  return (
    <>
    <div>
      <input placeholder="Todoを入力" />
      <button>追加</button>
    </div>
    <div>
      <p>未完了のTodo</p>
      <ul>
        <li>
          <p>Todo1</p>
          <button>完了</button>
          <button>削除</button>
        </li>
        <li>
          <p>Todo2</p>
          <button>完了</button>
          <button>削除</button>
        </li>
      </ul>
    </div>
    <div>
      <p>完了のTodo</p>
      <ul>
        <li>
          <p>Todo3</p>
          <button>戻す</button>
        </li>
      </ul>
    </div>
    </>
  )
}
