import React from "react";
import PlusIcon from '../icons/plus.svg';
import Toggle from "./Toggle";

const Header = () => {
    return (
        <div className=" p-7 w-full flex justify-between">
            <img className="cursor-pointer text-white" src={ PlusIcon } alt="PlusIcon" />
            <div className="flex items-center text-white font-medium">
                <span>{'\u00b0'}C</span>
                <Toggle />
                <span>{'\u00b0'}F</span>
            </div>
        </div>
    );
}

export default Header;