import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const BASE_URL = 'https://gemini-clone-backend-cteo.onrender.com'

  const [promptText, setPromptText] = useState('')
  const [responseText, setResponsetext] = useState('')

  function handleChange(event) {
    setPromptText(event.target.value)
  }
  async function handleClick() {
    const res = await axios.post(`${BASE_URL}/generate`, {
      text: promptText
    })
    setResponsetext(res.data.response)
  }

  return(
    <div className="container">
      <h1>Gemini Clone</h1>
      <textarea placeholder='Enter the prompt' onChange={handleChange} />
      <button onClick={handleClick}>Generate</button>
      <p className='response-box'>{responseText}</p>
    </div>
  )
}

export default App