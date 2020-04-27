import React from 'react';
import TimerManual from './components/TimerManual/TimerManual';
import TimerAuto from './components/TimerAuto/TimerAuto';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  
  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-5 py-3 text-white text-shadow">Методы жизненного цикла и хуки</h1>
        <TimerManual time={10} autoplay={false} step={1}/> 
        <TimerAuto time={100} autoplay step={2}/>
      </div>
    </div>  
  );
}

export default App;