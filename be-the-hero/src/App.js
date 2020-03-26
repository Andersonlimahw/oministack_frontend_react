import React, { useState } from 'react';
import './global.css';

import Logon from './pages/Logon';

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
    console.log(counter);
  }
  return (
    <>
      <Logon />
    </>
  );
}
export default App;
