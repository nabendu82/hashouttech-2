import React from 'react'
import { useContext } from 'react'
import { CountContext } from '../App'

const GrandParent1 = () => {
    const countContext = useContext(CountContext)

    return (
        <div>
            <h2>GrandParent1 - {countContext.countState}</h2>
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default GrandParent1