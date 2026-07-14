import './App.css';

function Profile({name, age, isStudent, hometown}){
  return (
    <>
      <h2>{name}</h2>
      <p>年齢：{age}</p>
      <p>{isStudent ? '学生' : '社会人'}</p>
      <p>出身地：{hometown}</p>
    </>
  )
}

function App() {

  return (
    <>
      <Profile name="田中太郎" age={20} isStudent={true} hometown="東京"/>
      <Profile name="aaa" age={18} isStudent={false} hometown="大阪"/>
    </>
  )
}

export default App
