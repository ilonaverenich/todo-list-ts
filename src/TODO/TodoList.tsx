import React,{useState, ChangeEvent} from 'react';
import {Input, Button} from 'antd'

interface Todo {
    id:number,
    value:string,
    isEdit:boolean
}

const TodoList:React.FC = () => {
    const [todo, setTodo] = useState<Todo[]>([])
    const [value, setValue] = useState<string>('')
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const  handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const addTask = () => {
        console.log(todo)
        setTodo([...todo, { id: todo.length + 1, value: value, isEdit: false }]) 
        setValue('')
    }
 
  return (
    <div>
        <h1>TODO LIST</h1>

        <div className='menu'>
            <Input className='input'value={value} onChange={handleChange} />
            <Button onClick={()=>addTask()}> Добавить </Button>
        </div>

        <div className='content-list'>
            {todo.map((list, index)=> <p>{index+1}.{list.value}</p> )}
        </div>

    </div>
  )
}

export default TodoList