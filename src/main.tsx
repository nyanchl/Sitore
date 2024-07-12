import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)
  const [url, setUrl] = useState("")
  // function getCurrentTab() {
  //   const queryOptions = { active: true, lastFocusedWindow: true };
  //   // `tab` will either be a `tabs.Tab` instance or `undefined`.
  //   const tab = chrome.tabs.query(queryOptions);
  //   console.log(tab);
  // }
  console.log("active get")
  document.addEventListener('DOMContentLoaded', () => {
    console.log('Popup loaded');
  });
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
      <button onClick={() => setCount(count + 1)}>count is: {count}</button>
      <button onClick={getUrl}>Get URL{url}</button>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
