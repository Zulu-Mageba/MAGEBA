import logo from './logo.svg';
import react from 'react'
// import React from 'react';
import './App.css';
import Home from './Components/Home';
// import './App.css';
import Counter from './Counter';

function App() {
  return (
   
    <>
    <div className='App'>
      <Counter />
      <Home />
    </div>
    <div>
      <h1>Bad Influence<br></br>
        It's Not a Crime 
        Its A Life-Style
      </h1>
      </div> 
    </>
  );
};

export default App;



// const App = () => {
//   return (
//     <div className="App">
//       <Home />
//     </div>
//   );
// };

