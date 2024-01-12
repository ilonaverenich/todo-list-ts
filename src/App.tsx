import React from 'react';
import './App.css';
import TodoList from './TODO/TodoList';


const  App: React.FC = () => {
  return (
    <div className="conteiner">
      <TodoList/>
    </div>
  );
}

export default App;
