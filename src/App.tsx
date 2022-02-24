import { useState } from 'react'
import './App.css'
import DataGrid from './DataGrid';
import DataGridPro from './DataGridPro';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <DataGrid />
      <DataGridPro />
    </div>
  )
}

export default App
