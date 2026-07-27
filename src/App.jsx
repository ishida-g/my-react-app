import './App.css';
import { useState } from 'react';

function Counter({initialValue, maxValue}) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    if(count < maxValue){
      setCount(count + 1);
    }
  }

  return (
    <>
      <p>
        カウント： {count} / {maxValue}
      </p>
      <button onClick={increment}>カウントアップ</button>
    </>
  )
}

function App() {

  return (
    <>
      <Counter initialValue={10} maxValue={20}/>
      <Counter initialValue={0} maxValue={5}/>
    </>
  )
}

export default App
