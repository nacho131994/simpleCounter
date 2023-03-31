import React from "react";
import "../../styles/index.css";
import { useState, useEffect } from "react";

const Counter = () => {
    const [counterOne, setcounterOne] = useState(0);
    const [counterTwo, setcounterTwo] = useState(0);
    const [counterThree, setcounterThree] = useState(0);
    const [counterFour, setcounterFour] = useState(0);
    const [counterFive, setcounterFive] = useState(0);
    const [counterSix, setcounterSix] = useState(0);
    const [onOff, setOnOff] = useState(false)

    const Add = () => {
        setcounterOne(counterOne + 1);
    };

    useEffect(() => {
        let intervalId;
        if (onOff) {
            intervalId = setInterval(Add, 1000);
        }
        return () => clearInterval(intervalId);
    }, [counterOne, onOff]);

    if (counterOne === 10) {
        setcounterOne(0);
        setcounterTwo(counterTwo + 1);
    }
    if (counterTwo === 10) {
        setcounterTwo(0);
        setcounterThree(counterThree + 1);
    }
    if (counterThree === 10) {
        setcounterThree(0);
        setcounterFour(counterFour + 1);
    }
    if (counterFour === 10) {
        setcounterFour(0);
        setcounterFive(counterFive + 1);
    }
    if (counterFive === 10) {
        setcounterFive(0);
        setcounterSix(counterSix + 1);
    }

    const restartButton = () => {
        setcounterOne(0);
        setcounterTwo(0);
        setcounterThree(0);
        setcounterFour(0);
        setcounterFive(0);
        setcounterSix(0);
        setOnOff(false)
    };
    const switchButton = () => {
        setOnOff(!onOff)
    }
    return (
        <>
            <div className="container">
                <div className="clock">
                    <div className="card">
                        <div className="clockCard">
                            <i class="fa-solid fa-clock"></i>
                        </div>
                    </div>
                    <div className="card">
                        <div className="number">{counterSix}</div>
                    </div>
                    <div className="card">
                        <div className="number">{counterFive}</div>
                    </div>
                    <div className="card">
                        <div className="number">{counterFour}</div>
                    </div>
                    <div className="card">
                        <div className="number">{counterThree}</div>
                    </div>
                    <div className="card">
                        <div className="number">{counterTwo}</div>
                    </div>
                    <div className="card">
                        <div className="number">{counterOne}</div>
                    </div>
                </div>
            </div>
            <div className="buttons">
            <button className=" primero btn btn-success" onClick={switchButton}>Start / Stop</button>
                <button className=" segundo btn btn-danger" onClick={restartButton}>
                    Restart
                </button>
            
            </div>
        </>
    );
};

export default Counter;
