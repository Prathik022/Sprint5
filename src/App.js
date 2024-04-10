
import React, { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);
   
  function hello() {
    setCount(count +1);
  }
  return (
    <div className="App">
      <h1>Count : {count} </h1>
      <button onClick={hello}>Click here</button>
    </div>
  );
}

export default App;
