
import { useState } from 'react';

import DeleteTask from './DeleteTask';
import './App.css';

function App() {

  const [todoList,setTodoList]=useState([]);
  const [newTask,setNewTask]=useState();

  const handleChange=(event)=>{
    setNewTask(event.target.value); //value of the input
  }

  const addTask=()=>{    
    //adding id so each todo can diffentiate 
    //add a object with id and add task into that
    const task ={
      id:todoList.length===0 ? 1: todoList[todoList.length-1].id+1,
      taskName :newTask,
      finished:false
    }
      //adding task object into todlist array 
    setTodoList([...todoList,task])
  }
  const deleteTask=(id)=>{ //how to know which element we want to delete
    
      //same logic shorted
      // if(task===taskName)
      // {
      //   return false
      // }
      // else {
      //   return true
      // }
    
    setTodoList((todoList.filter((task)=> task.id!==id ))); //delete using id
   
  }

  const updateTask=(id)=>{

    setTodoList((todoList.map((task)=>{
    if(task.id===id)
    {
      return {...task,finished:true}
    }
    else {
      return task;
    }
    })))


  }

  return (
    <div className='App'>
      <h1>To do List</h1>
      <div className='addTask'>
        <input type="text" 
          onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
    {todoList.map ((item)=>{ //loop through todolist items and return values
      return <DeleteTask 
              taskName={item.taskName} 
              id={item.id} 
              finished={item.finished}
              deleteTask={deleteTask}
              updateTask={updateTask}/>
    })}
      </div>
    </div>
  );

  }




       
       
          
  

export default App;
