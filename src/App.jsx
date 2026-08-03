import './App.css';
import {useState} from 'react';

function App() {
  const [text, setText] = useState('');

  return (
    <>
      <input 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder = "テキストを入力"
      />
      <p>入力: {text}</p>
    </>
  )
}

export default App;
