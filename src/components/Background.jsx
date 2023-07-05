import React from "react";
import WeatherImg from '../images/weather-bg.jpg';
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const Background = () => {
    return (
        <div className="object-cover h-3/4 w-full">
            {/* <img src= { WeatherImg } alt="Weather Imag" /> */}
            <LeftPane />
        </div>
    )
}

export default Background;