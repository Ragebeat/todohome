import React, { useContext, useEffect } from 'react';
import { appContext } from '../../context/appContext';
import classes from './Content.module.css'
import AddTask from '../AddTask/AddTask';
import x from '../../assets/img/x.png'

const Content = () =>{
    const {tasks, fetchTasks, removeTask} = useContext(appContext)
    useEffect(()=>{
        if(tasks.length === 0){
      fetchTasks()
    }
      // eslint-disable-next-line
    },[])
    return(
        <div className={classes.wrapper}>
            <AddTask/>                    
            {tasks.length ? 
        <table>
            <tbody>
            {tasks.map(task =>{
                let mycolor = ""
                switch (task.importance){
                    case "1":
                        mycolor = "red"                        
                        break
                        case "2":
                        mycolor = "orange"                        
                        break
                        case "3":
                        mycolor = "lightgreen"                        
                        break
                        case "4":
                        mycolor = "lightblue"                        
                        break
                        case "5":
                        mycolor = "lightgray"                        
                        break
                }
        return(
              <tr key={task.id}>
                <td>
                  {task.description}
                </td>
                <td style={{backgroundColor:mycolor}}>
                  {task.importance}
                </td>
                <td className={classes.delete}>
                <img src={x} alt="" onClick={() => removeTask(task.id) } />
                </td>
              </tr>
              )
            })}
            </tbody>            
          </table>:null  }
          </div>
    )
}

export default Content