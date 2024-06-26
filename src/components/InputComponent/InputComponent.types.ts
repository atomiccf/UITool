import React from "react";

export interface InputComponentProps {
    type:"text" | "email" | "password";
    labelText?:string
    placeHolder?:string
    handleChange?: (EO:React.ChangeEvent<HTMLInputElement>) => void
    required?:boolean
}