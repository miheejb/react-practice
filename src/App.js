
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  const [resourceType, setResourceType] = useState('posts');
  console.log('render');// console.log('reder') will be printed whenever the function App is rendered.

  useEffect(()=>{
    console.log('resourcetype changed')
  }, [resourceType]) // useEffect works whenever [resourceType] is changed


  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}> Posts</button>
        <button onClick={() => setResourceType("users")}> Users</button>
        <button onClick={() => setResourceType("comments")}> Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
  
}

export default App;
