import './App.css';
import {useState, useEffect} from 'react';


function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log(`countが${count}に変わりました`);
  }, [count]);

  return (
    <>
      <div>
        <p>現在のカウント: {count}</p>
        <button onClick={() => setCount(count + 1)}>カウントアップ</button>
      </div>

      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="テキストを入力"
        />
        <p>入力: {text}</p>
      </div>
    </>
  )
}

export default App;
