import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import './index.css'

function App() {
  const [url, setUrl] = useState("nothing")
  const getUrl = () => {
    chrome.runtime.sendMessage({ action: "getLastAccessedUrl"}, response => {
      if (response.url) {
        setUrl(response.url)
      } else {
        setUrl("No URL found")
      }
    })
  }
  return (
    <>
      <button onClick={getUrl}>Get URL{url}</button>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
