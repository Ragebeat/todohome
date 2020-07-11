import React, { useContext, useEffect,useState } from 'react';
import { appContext } from '../../context/appContext';

const AddTask = () => {
    const [description, setDescription] = useState('')
    const context = useContext(appContext)
    const submitHandler = event =>{
        event.preventDefault({})
        context.addTask({description: event.target[0].value, importance:event.target[1].value})
    }

    return(
        <form onSubmit={submitHandler}>
            <input type="text"/>
            <select name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <input type="submit" value="Add"/>
        </form>
    )
}

export default AddTask