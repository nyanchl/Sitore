import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
// import axios from 'axios'
import './index.css'

function App() {
  const [comment, setComment] = useState("")
  const addInNotion = () => {
    chrome.runtime.sendMessage({ action: "addInNotion", comment: comment }, response => {
      console.log("hoge",response)
    })
  }
  return (
    <>
      <input value={comment} onChange={e => setComment(e.target.value)} />
      <button onClick={addInNotion}>Add in Notion</button>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
