import React,{useState, ChangeEvent} from 'react';
import {Input, Button} from 'antd';
import List from './List'

export interface Todo {
    id:number,
    value:string,
    isEdit:boolean,
    done: boolean
}

const TodoList:React.FC = () => {
    const [todo, setTodo] = useState<Todo[]>([])
    const [value, setValue] = useState<string>('')
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [done, setTodoDone] = useState<boolean>(false)
    const  handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const addTask = () => {
        console.log(todo)
        setTodo([...todo, { id: todo.length + 1, value: value, isEdit: false, done:false }]) 
        setValue('')
    }
    const deleteItem = (id:number) =>{
        console.log(id)
        setTodo(todo.filter(el=>el.id!==id))
    }
    const setDone = (id: number) => {
        setTodo((prevTodo) =>
          todo.map((item) =>
            item.id === id ? { ...item, done: !item.done } : item
          )
        );
      };


  return (
    <div>
        <h1>TODO LIST</h1>

        <div className='menu'>
            <Input className='input'value={value} onChange={handleChange} />
            <Button onClick={()=>addTask()}> Добавить </Button>
        </div>

        <div className='content-list'>
            {todo.map((list, index)=><List list={list} index={index} deleteItem={deleteItem} setDone={setDone}/>)}
        </div>

    </div>
  )
}

export default TodoList