import React, { useState, useEffect } from 'react';
import './TimerAuto.scss';


const TimerAuto = ({time, autoplay, step}) => {
    const [isOn2, setIsOn2] = useState(autoplay); 
    const [timerA, setTimerA] = useState(time);
    const [width2, setWidth2] = useState(1000);

    useEffect(() => {
        let interval2;
        if (isOn2 && timerA!==0) {
          console.log("Таймер 2. Осталось времени: " + timerA);
          interval2 = setInterval(
            () => {
              setTimerA(timerA => timerA - step ) || setWidth2(width2 => width2 - step*10)
            },
            1000,
          );
        }
        else if(timerA === 0){
          console.log("Таймер 2. Время вышло!");      
        }
        return () => clearInterval(interval2) ;
    }, [isOn2, timerA, step, width2]);

    const onReset2 = () => {
        setIsOn2(false);
        setTimerA(time);
        setWidth2(1000);
    };

    return (
        <div>
          <div className="secondTimer mb-3">
          <br/>
          <div className="btn-group" role="group" aria-label="Basic example">
          { (
            <button type="button" className="btn btn-light btn-md" disabled={isOn2 === true} onClick={() => setIsOn2(true)}>
              Start
            </button> 
          )}
          <br/>
          { (
            <button type="button" className="btn btn-light btn-md" disabled={isOn2 === false} onClick={() => setIsOn2(false)}>
              Stop
            </button>
          )}
          <br/>
          <button type="button" className="btn btn-light btn-md" disabled={timerA === time} onClick={onReset2}>
            Reset
          </button>
          </div>
        </div>
        <div className="color-flash-line" style={{width : width2+"px"}} >
          <div className="textContent" >
            {timerA}
          </div>
        </div>
      </div>
    )
}

export default TimerAuto