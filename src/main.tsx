import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
// import axios from 'axios'
import './index.css'

function App() {
  const [url, setUrl] = useState("nothing")
  const [comment, setComment] = useState("")
  const getUrl = () => {
    chrome.runtime.sendMessage({ action: "getLastAccessedUrl"}, response => {
      if (response.url) {
        setUrl(response.url)
      } else {
        setUrl("No URL found")
      }
    })
  }
  const addInNotion = () => {
    chrome.runtime.sendMessage({ action: "addInNotion", comment: comment}, response => {
      console.log(response)
    })
  }
  return (
    <>
      <button onClick={getUrl}>Get URL{url}</button>
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
