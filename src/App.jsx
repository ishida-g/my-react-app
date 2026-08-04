import './App.css';
import {useState} from 'react';

function App() {
  console.log('レンダリング');
  const [count, setCount] = useState(0);

  return (
    <>
      <p>現在のカウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>カウントアップ</button>
    </>
  )
}

export default App;
