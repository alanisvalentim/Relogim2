import React from "react";
import "./timer.css";


class Timer extends React.Component{
    render(){
        return <div class="timer">
            <span>{this.props.minuto}</span>
            <span>{this.props.segundo}</span>
        </div>
    }
}


export default Timer;