import React, {useState} from 'react';

function App() {
  const [numb, setNumb] = useState(0)
  const arr ={
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten' 
  }
  const handleIncrement = () =>{
    setNumb((prev)=>{
      if (prev < 11) {
        return prev +1
      }
      else{
        alert('Your maximum number is ten')
      }
    })
  }
  const handleDecrement = () =>{
    setNumb((prev)=>{
      if (prev>= 0) {
        return prev - 1
      }
      else{
        alert('Your minimum number is zero')
      }
    })
  }
  return (
    <>
      <h1>Your number is {numb && (numb <10 && numb > 0 ? numb : 'Your mother') }</h1>
      <h4>Your number is {arr[numb]}</h4>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

    </>
    )
}

export default App;
