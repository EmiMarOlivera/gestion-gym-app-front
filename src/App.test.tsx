import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'
import userEvent from '@testing-library/user-event'

describe('App', () => {
  it('muestra el subtítulo inicial', () => {
    render(<App />)
    expect(screen.getByText('Gestión para Personal Trainers y sus alumnos')).toBeInTheDocument()
  })

  it('muestra la bienvenida al tocar comenzar', async () => {
    render(<App />)
    await userEvent.click(screen.getByText('Comenzar'))
    expect(screen.getByText('¡Bienvenido! Muy pronto vas a poder ingresar')).toBeInTheDocument()
  })
});