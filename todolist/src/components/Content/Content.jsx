import React, { useContext, useEffect } from 'react';
import { appContext } from '../../context/appContext';
import classes from './Content.module.css'
import AddTask from '../AddTask/AddTask';

const Content = () =>{
    const {tasks, fetchTasks} = useContext(appContext)
    useEffect(()=>{
      fetchTasks()
      // eslint-disable-next-line
    },[])
    return(
        <div>
            <AddTask/>
        <table>
            <tbody>
            {tasks.map(task =>{
        return(
              <tr key={task.id}>
                <td>
                  {task.id}
                </td>
                <td>
                  {task.description}
                </td>
                <td>
                  {task.importance}
                </td>
              </tr>
              )
            })}
            </tbody>            
          </table>  
          </div>
    )
}

export default Content