import './App.css';



function App() {

  const isGreen = false;
  return (
    <>
    <p className={isGreen ? 'green' : 'red'}>サンプルテキスト</p>
    {/* <p className='counter'>サンプルテキスト</p> */}
    </>
  )
}

export default App
