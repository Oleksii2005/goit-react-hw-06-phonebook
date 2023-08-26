import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from 'redux/store'

export const Layout = () => { 
    const value = useSelector(state => state.myValue)
    const dispatch = useDispatch();
    
    return(
        <div>
            <button onClick={()=> dispatch(decrement(1))}>Decrement</button>
            {value}
            <button onClick={()=> dispatch(increment(1))}>Increment</button>
        </div>
    )
 }