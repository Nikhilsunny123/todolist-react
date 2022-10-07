import React from 'react'

function DeleteTask(props) {
    return ( 
        <div>
          <br/>
          <span style={{backgroundColor:props.finished ? "green" :"white"}}>{props.taskName}</span> 
          <button onClick={()=>{
                    props.updateTask(props.id)
                }}>Complete</button>
          <button onClick={()=>{
                  props.deleteTask(props.id) }}> Delete</button>
        </div> 
        )
}

export default DeleteTask