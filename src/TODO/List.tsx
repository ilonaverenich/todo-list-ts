import { Button } from 'antd';
import React from 'react';
import { Todo } from './TodoList';

interface ListProps {
  list: Todo;
  index:number,
  deleteItem: (item:number)=>void;
  setDone: (id: number) => void;
}


const List:React.FC<ListProps> = ({list,index,deleteItem,setDone}) => {
  console.log(list)
  return (
    <div className='container-item' onClick={() => setDone(list.id)}>
      <b>{index+1}.</b><span className={list.done?'item item-active':'item'}>{list.value}</span> <Button className='btn' onClick={()=>deleteItem(list.id)}>X</Button>
    
    </div>
  )
}

export default List