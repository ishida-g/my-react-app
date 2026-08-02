import './App.css';
import {useState} from 'react';

function App() {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
  };

  return (
    <>
      <button onClick={handleClick}>メッセージを表示</button>
      {showMessage && <p>こんにちは！</p>}
    </>
  )
}

export default App
