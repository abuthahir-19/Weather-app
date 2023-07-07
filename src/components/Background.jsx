import React from "react";
import WeatherImg from '../images/pexels-pixabay-53459.jpg';
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const Background = () => {
    return (
        <div className="h-[100%] w-full relative">
            <img className="h-[100%] object-cover" src= { WeatherImg } alt="Weather Imag" />
            <div className="flex h-full">
                <LeftPane />
                <RightPane />
            </div>
        </div>
    )
}

export default Background;