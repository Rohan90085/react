// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import React,{UseState} from 'react';
// import App from './App.jsx'
// import App1 from './app1.jsx'
 import './index.css'
// import { StrictMode, useState } from 'react'


// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     <App />
// //     <App1 />
// //   </StrictMode>,
// // )
// // const name='rohan';
// // const age=22;
// // function AB(){
// //   return(<h1 className='o'>hello abhi</h1>);
// // }
// // function CD(){
// //   return(<h1>{name},{age}</h1>);
// // }
// // function L(){
// //   return(<><CD />,<AB /></>
// //   );
// // }
// // createRoot(document.getElementById('k')).render(<L />);
// // props
// //let name;
// //let age;
// // function Person(props){
// //   return(<><f1 name='rohan'/>,<f2 age={20}/>
// //   </>);
// // }
// // function f1(props){
// //   return(
// //   <><h1>hello{props.name} </h1>
// //   <h1> age is {props.age}</h1></>
// //   );
// // }
// // createRoot(document.getElementById('k')).render(<Person  />);
// function Person(){
//   return(
//     <>
//       <F1 name='rohan' age={20} >written by great man</F1>
//       <F2 name='abhi' age={22} />
//       <F3 name='rahul' age={25} >written accsesinng children in desturucting method</F3>
//     </>
//   );
// }

// function F1(props){
//   return(
//     <>
//       <h1>hello {props.name}</h1>
//       <h1>age is {props.age}</h1>
//       <h2>{props.children}</h2>
//     </>
//   );
// }
// function F2({name,age}){
//   return(<>
//   <h1>name {name}</h1>
//   <h2>age :{age}</h2></>)
// }
// function F3({name,age,children}){
//   return(<>
//   <h1>name {name}</h1>
//   <h2>age :{age}</h2>
//   <h3>{children}</h3>
//   </>)
// }
// createRoot(document.getElementById('k')).render(<Person />);
// function D(){
//   function A(p){
//     alert('hello abhi' +p);
//   }
//   return (<>
//   <button onClick={() => A('rohan')}>click me</button></>)
// }
// createRoot(document.getElementById('d')).render(<D />);
// function G(){
//   return(
//     <>
//       <button className="g" onClick={() => alert("hi")}>Click me</button>
//     </>
//   )
// }
// createRoot(document.getElementById('g')).render(<G />);
// function Change(){
//   const[initial, setInitial] = useState("hello");
//   function Update(){
//     setInitial("welcome to react");
//   }
//   return(
//     <>
//       <h1>{initial}</h1>
//       <button onClick={Update}>click</button>
//     </>
//   );
// }
// createRoot(document.getElementById('c')).render(<Change />);
//---------------------------------------------------------------------------------------------------------------
import { StrictMode, useState, useEffect, use } from "react";
import { createRoot } from "react-dom/client";

// ------ PROPS EXAMPLES ------
function Person() {
  return (
    <>
      <F1 name="rohan" age={20}>written by great man</F1>
      <F2 name="abhi" age={22} />
      <F3 name="rahul" age={25}>written accessing children in destructuring</F3>
    </>
  );
}

function F1(props) {
  return (
    <>
      <h1>hello {props.name}</h1>
      <h1>age is {props.age}</h1>
      <h2>{props.children}</h2>
    </>
  );
}

function F2({ name, age }) {
  return (
    <>
      <h1>name: {name}</h1>
      <h2>age: {age}</h2>
    </>
  );
}

function F3({ name, age, children }) {
  return (
    <>
      <h1>name: {name}</h1>
      <h2>age: {age}</h2>
      <h3>{children}</h3>
    </>
  );
}

createRoot(document.getElementById("k")).render(<Person />);

// ------ EVENT EXAMPLE ------
function D() {
  function A(p) {
    alert("hello " + p);
  }
  return <button onClick={() => A("rohan")}>Click Me</button>;
}

createRoot(document.getElementById("d")).render(<D />);

// ------ SIMPLE EVENT ------
function G() {
  return (
    <>
      <button onClick={() => alert("hi")}>Click me</button>
    </>
  );
}

createRoot(document.getElementById("g")).render(<G />);

// ------ STATE EXAMPLE ------
// function Change() {
//   const [initial, setInitial] = useState("hello");

//   function Update() {
//     if(initial=="w"){
//     setInitial("welcome to react");}
//     else{setInitial("else");}
//   }

//   return (
//     <>
//       <h1>{initial}</h1>
//       <button onClick={Update}>click</button>
//     </>
//   );
// }

// createRoot(document.getElementById("c")).render(<Change />);
// const user=[{name:'jdd',age:20},{name:'kdd',age:22},
// {name:'ldd',age:25}];
// function U(){
//   const [initial,setInitial]=useState(user);
//   return (
//     <>
//       {initial.map((value, index) => (
//         <ul key={index}>
//           <li>{value.name}</li>
//           <li>{value.age}</li>
//         </ul>
//       ))}
//     </>
//   );
// }
// createRoot(document.getElementById("user")).render(<U />);
//user effect

// function Usefct(){
//   const [count,setcount]=useState(0);
//   useEffect(()=>{
//     if(count>3){
//     console.log("hello abhi");
//   }
//   },[count])//second parameter is dependency array
//   function Incresev(){
//     setcount(count+1);
//   }
//   return(
//     <>
//     <h1>{count}</h1>
//     <button onClick={Incresev}>click me</button>
//     </>
//   )
// }
// createRoot(document.getElementById("userefct")).render(<Usefct />);
//--------------------------------------------------------------------------------------
//fetching url data
// const url='https://api.github.com/users';
// function Gt(){
//   const[users,setuser]=useState([]);
//   async function getdata(){
//     const response=await fetch(url);
//     const data=await response.json();
//     console.log(data);
//     setuser(data);
//   }
//   // useEffect(()=>{
    
//   // },[]);
//   getdata();
  
//   return (
//     <ul>
//       {users.map(user=>{
//         return(<li key={user.id}>{user.login}</li>);
//       })}
//     </ul>
//   );
// }
// createRoot(document.getElementById("gt")).render(<Gt />);
//--------------------------------------------------------------------------------------
//multiple returns
function MultiRetrn(){
  const[t,f]=useState(0);
  
  
  if(t){
    return <h1>its true</h1>
  }
  else{
    return <h1>its false</h1>}


}
createRoot(document.getElementById("mretrun")).render(<MultiRetrn />);
//--------------------------------------------------------------------------------------
//shortcircuit evaluation
// function ShortCirEvl(){
 
//   const[name,setname]=useState("");
//   //  const firsttname=name && "kumar";
//   //  const secndname=name||"guest";
// function Tmoggle(){
//   setname(!name);
// }

// return(
//   <>
//     {name ? <h1>hello {name}</h1> : <h1>welcome guest</h1>}
//     <button onClick={Tmoggle}>click me</button>
//   </>
// );
//  }
//  createRoot(document.getElementById("scevl")).render(<ShortCirEvl />);  
//--------------------------------------------------------------------------------------
//controlled input
function ControlledInput(){
const [name,setname]=useState("");
const [age,setage]=useState("");
  function clickk(event){
    event.preventDefault();
    
    console.log(name);
    console.log(age);
    
  }
// useEffect(()=>{
//   console.log(name);
//   console.log(age);
// },[]);
return(<>
<form onSubmit={clickk}>
<label>name:</label>
<input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
<br />
<label>age:</label>
<input type="number" value={age} onChange={(e)=>setage(e.target.value)}/>
<br />
<button type="submit">submit</button>
</form>
{name && age?<h1>hello {name} , your age is {age}</h1>:<h1>please enter both details</h1>}
</>
);
}
createRoot(document.getElementById("f")).render(<ControlledInput />); 