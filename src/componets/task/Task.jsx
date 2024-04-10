import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import { UseCountdown } from '../timer/UseCountdown';

export const Task = ({task, taskList, setTaskList, index}) => {
    const handleDelete = (id) => {
        setTaskList(taskList.filter((task) => task.id !== id));
    };
    const timeLeft = UseCountdown(); 

  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div 
          className="taskBox"
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
        {timeLeft.value > 0 ? (
          <>
            <p className="taskText">{task.text}</p>
            <p>{timeLeft.value}{timeLeft.unit}</p>
            <button 
              className="taskTrashButton" 
              onClick={() => handleDelete(task.id)}
            >
                <i className="fas fa-trash-alt"></i>
            </button>
          </>
        ) : (
          <>
            <img src="/images/joge.jpg" alt="u are late..." style={{ width: '200px', height: 'auto' }}/>
            <button 
              className="taskTrashButton" 
              onClick={() => handleDelete(task.id)}
            >
            <i className="fas fa-trash-alt"></i>
            </button>
          </>
        )}
        </div>
      )}
      
    </Draggable>
  )
}
