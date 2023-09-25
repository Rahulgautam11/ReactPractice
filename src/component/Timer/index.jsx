import React from "react";
import './Timer.scss'
import { useState } from "react";
import { useEffect } from "react";

const Timer = () => {

    const time = new Date().toLocaleTimeString()
    const HourCheck = new Date().getHours()
    const [currentTime, setCurrentTime] = useState(time)


    useEffect(() => {

        const TimeOut = setInterval(() => {
            UpdatedTime()
            const UpdatedTime = () => {
                setCurrentTime(time)
            }
        }, 1000);
        return clearInterval(TimeOut)

    },[])

    return (
        <div className="timerContainer">
            <h1 className="timer">
                {currentTime} {HourCheck < 12 ? "AM" : "PM"}
            </h1>
            <h1 className="timer">
                {HourCheck < 12 ? "Good Morning 🙂" : HourCheck >= 12 && HourCheck < 18 ? "Good Afternoon 🙂" : HourCheck >= 18 && HourCheck < 21 ? "Good Evening 🙂" : "Good Night 🙂"}
            </h1>

        </div>
    )
}

export default Timer;