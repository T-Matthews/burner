import Navbar from './components/Navbar';
import './css/App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home'
import About from './views/About'

import Zipcode from './components/Zip';

function App() {
  const [count,setCount] = useState(0);
  const [students,setStudents] = useState(['Sven','Donovan','Tyler','Craig'])

  useEffect(() =>{
    const fetchData = async () =>{
      const result =await fetch
    }

  })
 

  const changeCounter = () => {
    setCount(count + 1)
  } 
  const shuffleStudents = () => {
    // TO MUTATE A LIST, YOU MUST MAKE A COPY AS FOLLOWS, AND MUTATE THAT
    let tempStudents = [...students]; 
    tempStudents.sort(() => Math.random() -0.5);
    setStudents(tempStudents);

  }

  
 

  return (
  <>
    <Navbar studentsFromApp={students}/>
    <Zipcode/>

    <div className="App">
      {console.log('Hello, Foxes')}
      <h1>{count}</h1>
      <button onClick={changeCounter}>Change Count</button>
      <h1>{students}</h1>
      <button onClick={shuffleStudents}>Shuffle Students</button>
      <Routes>
        <Route children path="/" element={<Home />}/>
        <Route children path="/about" element={<About />}/>
      </Routes>
    </div>
  </>
  );
}

export default App;
