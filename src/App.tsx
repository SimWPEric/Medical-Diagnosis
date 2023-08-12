import { useState } from 'react';
import { LoginForm } from "./components/LoginForm"
import { Questions } from './components/Questions';

function App() {
  const [login, setLogin] = useState<boolean>(false);
  return (
    <div className="h-screen flex items-center justify-center">
      {!login ? <LoginForm setLogin={setLogin}/> : <Questions />} 
    </div>
  )
}

export default App
