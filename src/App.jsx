import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CalendarTabs from './CalendarTabs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CalendarTabs minYear={2023} maxYear={2025} />
    </>
  )
}

export default App
