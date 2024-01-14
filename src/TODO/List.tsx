import { message, Input } from 'antd';
import React from 'react';
import { Todo } from './TodoList';
import {CloseOutlined,EditOutlined,SaveOutlined} from '@ant-design/icons'


interface ListProps {
  list: Todo;
  index:number,
  deleteItem: (item:number)=>void;
  setDone: (id: number) => void;
  setEdit: (id:number)=>void;
  setNewValue: (value:string)=> void;
  changeList: (id:number, value:string)=> void;
  newValue:string;
}


const List:React.FC<ListProps> = ({list,index,deleteItem,setDone,setEdit, setNewValue,changeList, newValue}) => {
  console.log(newValue)
  return (
    <div className='container-item' >
     <div >
     <b >{index+1}.</b><span  
      className={list.done?'item item-active':'item'}>
         {list.isEdit?<Input className='change-input' onChange={(e)=>setNewValue(e.target.value)}/> :<span onClick={() => setDone(list.id)}>{list.value}</span>}
      </span> 
     </div>
      <div className='box-btn'>
      <CloseOutlined className='btn' onClick={()=>deleteItem(list.id)}/>
        {list.isEdit? <SaveOutlined className='btn' onClick={()=>newValue!==''?changeList(list.id, newValue):message.error('Вы ничего не ввели!')}/>: <EditOutlined className='btn' onClick={()=>setEdit(list.id)}/>}</div>
    </div>
  )
}

export default List