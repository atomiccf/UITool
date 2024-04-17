import React from "react";

export interface InputComponentProps {
    mode:string
    labelText?:string
    placeHolder?:string
    handleChange?: (EO:React.ChangeEvent<HTMLInputElement>) => void
    required?:boolean
}