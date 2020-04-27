import React, { useState, useEffect } from 'react';
import './TimerManual.scss';


const TimerManual = ({time, autoplay, step}) => {
  const [isOn1, setIsOn1] = useState(autoplay); 
  const [timerMan, setTimerManual] = useState(time);
  const [width1, setWidth1] = useState(1000);

  const onReset1 = () => {
      setIsOn1(false);
      setTimerManual(time);
      setWidth1(1000);
  };

  useEffect(() => {
      let interval1;
      if (isOn1 && timerMan!==0) {
        console.log("Таймер 1. Осталось времени: " + timerMan);
        interval1 = setInterval(
          () => {
            setTimerManual(timerMan => timerMan - step) || setWidth1(width1 => width1 - step*100)
          },
          1000,
        );
      }
      else if(timerMan === 0){
        console.log("Таймер 1. Время вышло!");
      }
      return () => clearInterval(interval1);
  }, [isOn1, timerMan, step]);



  return (
    <>
      <div className="firstTimer mb-3">
      <br/>
        <div className="btn-group" role="group" aria-label="Basic example">
          { (
          <button type="button" className="btn btn-light btn-md" disabled={isOn1 === true} onClick={() => setIsOn1(true)}>
            Start
          </button> 
          )}
        <br/>
        { (
        <button type="button" className="btn btn-light btn-md" disabled={isOn1 === false} onClick={() => setIsOn1(false)}>
          Stop
        </button>
      )}
      <br/>
      <button type="button" className="btn btn-light btn-md" disabled={timerMan === time} onClick={onReset1}>
        Reset
      </button>
      </div>
      </div>
      <div className="rainbow-line mb-5" style={{width : width1+"px"}}>
        <div className="textContent"> 
          {timerMan}
        </div>
      </div>
    </>
  )
}

export default TimerManual