import React, { useState } from 'react';
import './App.css';
function App(){
  const [color, setColor] = useState('')
  
  return(
      <div className={ `react-root ${color}` }>
        
        <div className='centered'>
          <img src="/woman.png" alt="" />
          <h1>My wonderful color picker</h1>
          <button className='red bn' onClick={ () => setColor('red') }>RED</button>
          <button className='blue bn' onClick={ () => setColor('blue') }>BLUE</button>
          <button className='yellow bn' onClick={ () => setColor('yellow') }>YELLOW</button>
        </div>
      </div>
  );

}
export default App;