import React,{useState, ChangeEvent} from 'react';
import {Input,message} from 'antd';
import List from './List';
import {PlusOutlined} from '@ant-design/icons'

export interface Todo {
    id:number,
    value:string,
    isEdit:boolean,
    done: boolean
}

const TodoList:React.FC = () => {
    const [todo, setTodo] = useState<Todo[]>([])
    const [value, setValue] = useState<string>('')
    const [newValue, setNewValue] = useState<string>('')
    const  handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    const addTask = () => {
        setTodo([...todo, { id: new Date().getTime(), value: value, isEdit: false, done:false }]) 
        setValue('')
    }
    const deleteItem = (id:number) =>{
        setTodo(todo.filter(el=>el.id!==id))
    }
    const setDone = (id: number) => {
        setTodo((prevTodo) =>
          todo.map((item) =>
            item.id === id ? { ...item, done: !item.done } : item
          )
        );
      };

      const setEdit =(id: number)=>{
        setTodo((prevTodo) =>
          todo.map((item) =>
            item.id === id ? { ...item, isEdit: !item.isEdit } : item
          )
        );
      }
      const changeList =(id: number, value:string)=> {
        console.log(id, value )
        setTodo((prevTodo) =>
        todo.map((item) =>
          item.id === id ? { ...item, value: value, isEdit: !item.isEdit } : item
        )
      );
      }

  return (
    <div>
        <h1>TODO LIST</h1>

        <div className='menu'>
            <Input className='input'value={value} onChange={handleChange} />
            <PlusOutlined className='btn-add' onClick={()=>value==''?message.error('Вы ничего не ввели!'): addTask()}/>
        </div>

        <div className='content-list'>
            {todo.map((list, index)=><List list={list} index={index} deleteItem={deleteItem} setDone={setDone} setEdit={setEdit} setNewValue={setNewValue} changeList={changeList} newValue={newValue}/>)}
        </div>

    </div>
  )
}

export default TodoList