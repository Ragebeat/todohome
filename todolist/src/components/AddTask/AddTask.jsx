import React, { useContext, useEffect } from 'react';
import { appContext } from '../../context/appContext';

const AddTask = () => {
    return(
        <div>
            <input type="text"/>
            <select name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
    )
}

export default AddTask