import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import App1 from './app1.jsx'
import './index.css'


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//     <App1 />
//   </StrictMode>,
// )
// const name='rohan';
// const age=22;
// function AB(){
//   return(<h1 className='o'>hello abhi</h1>);
// }
// function CD(){
//   return(<h1>{name},{age}</h1>);
// }
// function L(){
//   return(<><CD />,<AB /></>
//   );
// }
// createRoot(document.getElementById('k')).render(<L />);
// props
//let name;
//let age;
// function Person(props){
//   return(<><f1 name='rohan'/>,<f2 age={20}/>
//   </>);
// }
// function f1(props){
//   return(
//   <><h1>hello{props.name} </h1>
//   <h1> age is {props.age}</h1></>
//   );
// }
// createRoot(document.getElementById('k')).render(<Person  />);
function Person(){
  return(
    <>
      <F1 name='rohan' age={20} >written by great man</F1>
      <F2 name='abhi' age={22} />
      <F3 name='rahul' age={25} >written accsesinng children in desturucting method</F3>
    </>
  );
}

function F1(props){
  return(
    <>
      <h1>hello {props.name}</h1>
      <h1>age is {props.age}</h1>
      <h2>{props.children}</h2>
    </>
  );
}
function F2({name,age}){
  return(<>
  <h1>name {name}</h1>
  <h2>age :{age}</h2></>)
}
function F3({name,age,children}){
  return(<>
  <h1>name {name}</h1>
  <h2>age :{age}</h2>
  <h3>{children}</h3>
  </>)
}
createRoot(document.getElementById('k')).render(<Person />);
function D(){
  function A(p){
    alert('hello abhi' +p);
  }
  return (<>
  <button onClick={() => A('rohan')}>click me</button></>)
}
createRoot(document.getElementById('d')).render(<D />);
function G(){
  return(
    <>
      <button className="g" onClick={() => alert("hi")}>Click me</button>
    </>
  )
}
createRoot(document.getElementById('g')).render(<G />);