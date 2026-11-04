import './App.css'
import { useState } from 'react'

function App() {
  const [touched, setTouched] = useState(false);
  return (
    <main className="home">
      <div className='card'>
        <h1>Aplicación Gestión Fitness</h1>
        <p className='subtitle'>{touched ? '¡Bienvenido! Muy pronto vas a poder ingresar' : 'Gestión para Personal Trainers y sus alumnos'}</p>
        <button onClick={() => setTouched(true)}>
          Comenzar
        </button>
      </div>
    </main>
  )
}

export default App