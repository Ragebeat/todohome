import React, { useContext, useEffect } from 'react';
import './App.css';
import { appContext } from './context/appContext';
import Loader from './components/Loader/Loader'

function App() {
  const {tasks, loading,fetchTasks} = useContext(appContext)
  useEffect(()=>{
    // eslint-disable-next-line 
    fetchTasks()
    
  }, [])
  return (
    <div className="App">  
    <h1>From pc</h1>   
    {loading ? <Loader/>:
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
        }        
    </div>
          )
}

export default App;
