import React, { useEffect, useState } from 'react'
import Todo from './Todo';
import CompleteTodo from './CompleteTodo'

export default function App() {

  const [todo, setTodo] = useState("");
  const [completedTodo, setcompletedTodo] = useState(JSON.parse(localStorage.getItem("doneList")) || [])
  const [todoList, settodoList] = useState(JSON.parse(localStorage.getItem("dataList")) || [])

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: Math.floor(Math.random() * 10000),
      task: todo,
      status: false,
      time: new Date()
    }

    if (todo) {
      settodoList((list) => [...list, data])
      setTodo("")
    }

  }

  const deleteTodo = (todo) => {
    settodoList(
      todoList.filter((e) => {
        return (e !== todo)
      })
    )
    setcompletedTodo((list) => [...list, todo])
  }

  useEffect(() => {
    localStorage.setItem("dataList", JSON.stringify(todoList))
    console.log(todoList)
  }, [todoList])

  useEffect(() => {
    localStorage.setItem("doneList", JSON.stringify(completedTodo))
    console.log(completedTodo)
  }, [completedTodo])
  

  return (

    <div className='container'>

      <h1>Todo List</h1>

      <form onSubmit={handleSubmit}>
        <input type={'text'} value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button type={'submit'}>Add Task</button>
      </form>

      <div className='todos'>
        {todoList &&
          todoList
            .sort((a,b)=>{
              return new Date(b.time) - new Date(a.time)
            })
            .map((todo) => {
              return (
                <div key={todo.id}>
                  <Todo todo={todo} deleteTodo={deleteTodo} />
                </div>
              );
            })
        }
        {completedTodo &&
          completedTodo
          .sort((a,b)=>{
            return new Date(b.time) - new Date(a.time)
          })
            .map((todo) => {
              return (
                <div key={todo.id}>
                  <CompleteTodo todo={todo} />
                </div>
              );
            })
        }
      </div>
    </div>
  )
}
