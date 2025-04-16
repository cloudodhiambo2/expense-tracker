import { useState } from 'react'
import Form from './components/form.jsx'
import Table from './components/table.jsx'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
        <Form/>
        <Table/>
    </div>
      
  )
}

export default App
