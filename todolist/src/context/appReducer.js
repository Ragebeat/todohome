import { FETCH_TASKS, SHOW_LOADER, ADD_TASK, REMOVE_TASK } from './types'

const handlers = {
    [ADD_TASK]: (state,{payload}) =>({
        ...state,
        tasks: [...state.tasks,payload],
        loading: false
    }),
    [FETCH_TASKS]: (state,{payload}) =>({
        ...state,
        tasks: payload,
        loading: false
    }),
    [SHOW_LOADER]: state =>({
        ...state,
        loading: true
    }),
    [REMOVE_TASK]: (state,{payload}) =>({
        ...state,
        tasks: state.tasks.filter(task => task.id !== payload),
        loading: false
    }),
    DEFAULT: state => state
}

export const appReducer = (state,action) =>{
    const handle = handlers[action.type] || handlers.DEFAULT
    let x = handle(state,action)
    //debugger
    return x
}