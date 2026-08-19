import './App.css';

function App() {
  const productNames = ['ノートPC', 'マウス', 'キーボード', 'タブレット'];

  return (
    <ul>
      {productNames.map((productName) => (
        <li key={productName}>{productName}</li>
      ))}
    </ul>
  )
}

export default App;
