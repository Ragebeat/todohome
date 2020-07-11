import React, { useReducer } from 'react'
import { appContext } from './appContext'
import { appReducer } from './appReducer'
import { FETCH_TASKS,SHOW_LOADER, ADD_TASK,REMOVE_TASK } from './types'
import axios from 'axios'

const AppState = ({children}) =>{
    const initialState = {
        tasks: [],
        loading: false
    }
    const [state, dispatch] = useReducer(appReducer, initialState)
    const fetchTasks = async () => {
        showLoader()
        const res = await axios.get(`https://todolist-a7eea.firebaseio.com/tasks.json`)
        if (res.data){
        let payload = Object.keys(res.data).map(key=>{
            return {
                ...res.data[key],
                id: key
            }
        })
        dispatch({type:FETCH_TASKS, payload})
    }else{
        dispatch({type:FETCH_TASKS, payload:{}})
    }
    }
    const addTask = async (payload) => {
        showLoader()
        const res = await axios.post(`https://todolist-a7eea.firebaseio.com/tasks.json`, payload)
        console.log(res.data)
        fetchTasks()
    }
    const removeTask = async (id) => {
        showLoader()
        const res = await axios.delete(`https://todolist-a7eea.firebaseio.com/tasks/${id}.json`)
        console.log(res.data)
        dispatch({type:REMOVE_TASK, payload:id})
    }
    const showLoader = ()=>{
        dispatch({type:SHOW_LOADER})
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