import React from "react";
import ReactDom from 'react-dom'




const root  = document.getElementById('root')


let value ;

const myUseState= (initialValue)=>{
    value  =(value === undefined) ? initialValue : value
    const setValue =(newValue)=>{
        value = newValue
        render()
    }
    return [value,setValue]
}

const render = ()=>{
    ReactDom.render(<App/>, root)
}

const App =()=>{
    const [n,setN] = myUseState(0)

    const addN = ()=>{
        setN(n+1)
    }

    return( <div>
        {n}
        <button onClick={addN}>+1</button>
    </div>)
}


render()
