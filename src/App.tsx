import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";

type TaskType = {
  id: string
  title: string
  isDone: boolean
}

type TaskAssocType = {
  [key: string]: TaskType[]
}

function App() {

  const todoListId1 = v1();
  const todoListId2 = v1();

  const [tasks, setTasks] = useState<TaskAssocType>({
    [todoListId1]: [
      {id: v1(), title: "HTML/CSS", isDone: true},
      {id: v1(), title: "React", isDone: false},
      {id: v1(), title: "JS", isDone: false}
    ],
    [todoListId2]: [
      {id: v1(), title: "Meat", isDone: true},
      {id: v1(), title: "Wine", isDone: false},
      {id: v1(), title: "Fruits", isDone: false}
    ]
  })
  const addTask = (todoListId: string, newTaskTitle: string) => {
    const newTask = {id: v1(), title: newTaskTitle, isDone: false};
    setTasks({...tasks, [todoListId]:[newTask, ...tasks[todoListId]]})
  }

  const removeTask = (todoListId:string, taskId:string)=> {
    setTasks({...tasks, [todoListId]:tasks[todoListId].filter(task=> task.id!==taskId)})
  }

  const changeTaskStatus = (todoListId:string, taskId:string, newTaskStatus:boolean)=> {
    setTasks({...tasks, [todoListId]:tasks[todoListId].map(task=>task.id===taskId
          ? {...task, isDone:newTaskStatus}
          : task)})
  }

  const changeTaskTitle = (todoListId:string, taskId:string, newTaskTitle:string)=> {
    setTasks({...tasks, [todoListId]:tasks[todoListId].map(task=>task.id===taskId ?
          {...task, title: newTaskTitle}
          : task)})
  }
  return (
      <div className="App">

      </div>
  );

}

export default App;
