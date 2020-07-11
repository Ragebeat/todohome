import React, { useReducer } from 'react'
import { appContext } from './appContext'
import { appReducer } from './appReducer'
import { FETCH_TASKS,SHOW_LOADER, ADD_TASK,REMOVE_TASK } from './types'
import axios from 'axios'

const url = process.env.DB_URL
console.log(url)
const AppState = ({children}) =>{
    const initialState = {
        tasks: [
            {id:1, description: "firsty task", importance:1},
            {id:2, description: "second task", importance:2},
            {id:3, description: "third task", importance:3},
            {id:4, description: "third task", importance:3}],
            loading: false
    }
    const [state, dispatch] = useReducer(appReducer, initialState)
    const fetchTasks = async () => {
        showLoader()
        const res = await axios.get(`https://todolist-a7eea.firebaseio.com/tasks.json`)
        console.log(res.data)
        dispatch({FETCH_TASKS, payload:{}})
    }
    const addTask = async (payload) => {
        showLoader()
        const res = await axios.post(`https://todolist-a7eea.firebaseio.com/tasks.json`, payload)
        console.log(res.data)
        dispatch({ADD_TASK, payload:{}})
    }
    const removeTask = async (id) => {
        showLoader()
        const res = await axios.delete(`https://todolist-a7eea.firebaseio.com/tasks/${id}.json`)
        console.log(res.data)
        dispatch({REMOVE_TASK, payload:id})
    }
    const showLoader = ()=>{
        dispatch({SHOW_LOADER})
    }
    return(
        <appContext.Provider value={{
            fetchTasks,addTask, removeTask, showLoader,
            tasks:state.tasks,
            loading: state.loading
        }}>
            {children}
        </appContext.Provider>
    )
}

export default AppState