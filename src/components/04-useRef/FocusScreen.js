import React, {useRef} from 'react'
import '../02-useEfect/efects.css'

export const FocusScreen = () => {

    const inputRef = useRef()

    const handleClick = () => {
        inputRef.current.select()
    }

    return (
        <div>
            <h1>focus screen</h1>
            <hr />
            <input 
                className="form-control" 
                placeholder="su nombre"  
                ref={inputRef}
            />
            <button 
                className="btn btn-outline-info mt-5"
                onClick={handleClick}
            >
                focus
            </button>
        </div>
    )
}
