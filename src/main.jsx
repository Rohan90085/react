import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import App1 from './app1.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <App1 />
  </StrictMode>,
)
function AB(){
  return(<h1 className='o'>hello abhi</h1>);
}
function CD(){
  return(<h1>hello cd</h1>);
}
function L(){
  return(<><CD />,<AB /></>
  );
}
createRoot(document.getElementById('k')).render(<L />);