import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)
  console.log("active get")
  document.addEventListener('DOMContentLoaded', () => {
    console.log('Popup loaded');
  });
  // chrome.tabs.onActivated.addListener((activeInfo) => {
  //   console.log("hello")
  //   console.log(activeInfo.tabId)
  //   chrome.tabs.get(activeInfo.tabId, (tab) => {
  //     console.log(tab.url);
  //   });
  // });
  return (
    <>
      <button onClick={() => setCount(count + 1)}>count is: {count}</button>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
