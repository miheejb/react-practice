
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  const [windowWidth , setWindowWidth] = useState(window.innerWidth);
  const handleResize = () =>{
    setWindowWidth(window.innerwidth)
  }
 
  useEffect(()=> {
    window.addEventListener('resize', handleResize)
    return ()=>{
      window.removeEventListener('resize', handleResize)
    }
  },[])



  return (
    <>
      <div> {windowWidth}

      </div>
     
    </>
  );
  
}

export default App;
