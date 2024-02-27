import React from 'react'
import {ButtonProps} from "../../types/types";


export const Button: React.FC<ButtonProps> = ({classname,handleButton, label}) => {
    return <button className={classname} onClick={handleButton}>{label}</button>
}