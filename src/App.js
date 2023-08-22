import './App.css';
import './index.css'
import React, {useState} from 'react'
 
function App() {
 
  // state
  const [num1,setNum1] = useState(0)
  const [num2,setNum2] = useState(0)
  const [sum,setSum] = useState('')
 
  let calculator = (event) => {
    //prevent submitting to the server
    event.preventDefault()
 
    if (num1 === 0 || num2 === 0) {
      alert('Please enter a valid weight and height')
    }
    else {
      let sum = parseInt(num1) + parseInt(num2);
      setSum(sum.toFixed(1))
    }
  }
  let reload = () => {
    window.location.reload()
  }
 
  return (
    <div className="app">
    <div className='container'>
      <h2 className='center'>Sum Calculator</h2>
      <form onSubmit={calculator}>
 
        <div>
          <label>num1</label>
          <input value={num1} onChange={(e) => setNum1(e.target.value)} />
        </div>
 
        <div>
          <label>num2</label>
          <input value={num2} onChange={(event) => setNum2(event.target.value)} />
        </div>
 
        <div>
          <button className='btn' onClick={calculator}>Add</button>
          <button className='btn btn-outline' onClick={reload}>Reload</button>
        </div>
      </form>
 
      <div className='center'>
        <h3>Your Summation is: {sum}</h3>
        
      </div>
    </div>
  </div>
  );
}
 
export default App;