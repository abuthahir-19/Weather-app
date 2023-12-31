import React from "react";
import prevIcon from '../icons/prev.svg';
import nextIcon from '../icons/next.svg';
import Sunny from '../icons/sunny.svg';

const Temperature = ({ temp }) => {
    return (
        <div>
            <div className="flex justify-between items-center p-6">
                <img className="cursor-pointer" src={ prevIcon } alt="prevIcon" />
                <h1 className=" text-[100px]">{`${temp}\u00b0`}</h1>
                <img className="cursor-pointer" src={ nextIcon } alt="nextIcon" />
            </div>
            <div className="flex items-center w-[30%] mx-auto">
                <img src={ Sunny } alt="Sunny" />
                <h2 className="text-xl ml-2 font-medium">Sunny</h2>
            </div>
        </div>
    );
}

export default Temperature;