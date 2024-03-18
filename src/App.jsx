import { useState } from 'react'
import './App.css'

function App() {

  const[counter, setCounter] = useState(1) ;
  const [currentGame, setCurrentGame] = useState([]);
  const [colors, setColor] = useState([]);

  




  const minusFunction = () => {
    setCounter(counter - 1);
  }

  const plusFunction = () => {
    setCounter(counter + 1);
  }

  const changeColors = (wantedColor) => {
    setColor(wantedColor)
  }


  return (
    <>

      <div className='colorS'>
        <button className='blue'  style={{backgroundColor: "blue"}} onClick={() => changeColors("blue")}></button>
        <button className='red' style={{backgroundColor: "red"}} onClick={() => changeColors("red")}></button>
        <button className='green' style={{backgroundColor: "green"}} onClick={() => changeColors("green")}></button>
        <button className='yellow' style={{backgroundColor: "yellow"}} onClick={() => changeColors("yellow")}></button>
      </div>

      <div className='displayer'>

        <button className='minus'
        onClick={minusFunction}> - </button>

        <label className='cont'>
          {counter}
        </label>

        <button className='plus'
        onClick={plusFunction}> + </button>


      </div>
      <div className='results' >

        <label className='first' style={{backgroundColor:colors}}>3 + {counter} = {3+counter}</label>
        <label className='second' style={{backgroundColor:colors}}>3 - {counter} = {3-counter}</label>
        <label className='third' style={{backgroundColor:colors}}>3 x {counter} = {3*counter}</label>
        <label className='fourth' style={{backgroundColor:colors}}>3 / {counter} = {parseFloat(3/counter).toFixed(2)}</label>

      </div>

    </>
  )
}

export default App
