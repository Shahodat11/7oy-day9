import React from 'react'
import useStore from '../../context/Store'

const Hero = () => {
  let handleInc = useStore(state => state.inc)
  let handleReset = useStore(state => state.reset)
  let handleDec = useStore(state => state.dec)
  let str = useStore(state => state.text)
  let changeLan = useStore(state => state.changeLan)
  let bears = useStore()
  return (
    <div>
        <h2>Hero {str}</h2>
        <button onClick={()=>handleInc(1)}>Increment 1</button>
        <button onClick={()=>handleInc(10)}>Increment 10</button>
        <button onClick={()=>handleInc(100)}>Increment 100</button>
        <button onClick={() =>handleDec(1)}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        <br />
        <button onClick={changeLan}>change language</button>
    </div>
  )
}

export default Hero