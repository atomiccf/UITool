import React from "react";

export interface InputDateProps {
    type:"text" | "date" ;
    labelText?:string
    placeHolder?:string
    handleChange?: (EO:React.ChangeEvent<HTMLInputElement>) => void
    required?:boolean
}