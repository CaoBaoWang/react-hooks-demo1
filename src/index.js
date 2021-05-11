import React from "react";
import ReactDom from 'react-dom'




const root  = document.getElementById('root')


let _state = []
let index = 0

const myUseState= (initialValue)=>{
    const currentIndex = index
    _state[currentIndex] =(_state[currentIndex] === undefined) ? initialValue : _state[currentIndex]

    const setState =(newValue)=>{
        _state[currentIndex] = newValue
        render()
    }
    index ++
    return [_state[currentIndex],setState]
}

const render = ()=>{
    index =0

    ReactDom.render(<App/>, root)
}

const App =()=>{
    const [n,setN] = myUseState(0)
    const [m,setM] = myUseState(0)

    console.log(`_state=${_state}`)

    const addN = ()=>setN(n+1)
    const addM = ()=>setM(m+1)


    return( <div>
        {n} <br/>
        {m}
        <button onClick={addN}>n+1</button>
        <button onClick={addM}>m+1</button>
    </div>)
}


render()
