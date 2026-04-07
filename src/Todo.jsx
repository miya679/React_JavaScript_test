import { useState } from 'react'
import './Todo.css'
import { InputTodo } from './components/InputTodo'
import { IncompleteTodos } from './components/IncompleteTodos'
import { CompleteTodos } from './components/CompleteTodos'

export const Todo = () => {
  const [todoText, setTodoText] = useState('')
  const [incompleteTodos, setIncompleteTodos] = useState(['Todo1', 'Todo2'])
  const [completeTodos, setCompleteTodos] = useState(['Todo3', 'Todo4'])

  const onChangedTodoText = (event) => {
    setTodoText(event.target.value)
  }

  const onClickedAdd = () => {
    if (todoText === '') return

    const newTodos = [...incompleteTodos, todoText]
    setIncompleteTodos(newTodos)
    setTodoText('')
  }

  const onClickedDelete = (index) => {
    const newTodos = [...incompleteTodos]
    newTodos.splice(index, 1)
    setIncompleteTodos(newTodos)
  }

  const onClickedComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos]
    newIncompleteTodos.splice(index, 1)

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]]

    setIncompleteTodos(newIncompleteTodos)
    setCompleteTodos(newCompleteTodos)
  }

  const onClickedBack = (index) => {
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]]

    const newCompleteTodos = [...completeTodos]
    newCompleteTodos.splice(index, 1)

    setIncompleteTodos(newIncompleteTodos)
    setCompleteTodos(newCompleteTodos)
  }

  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangedTodoText} onClick={onClickedAdd} />
      <IncompleteTodos incompleteTodos={incompleteTodos} onClickedComplete={onClickedComplete} onClickedDelete={onClickedDelete} />
      <CompleteTodos completeTodos={completeTodos} onClickedBack={onClickedBack} />
    </>
  )
}
