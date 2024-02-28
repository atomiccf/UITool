import React from 'react'
import {Button} from "react-bootstrap";

interface ButtonComponentProps  {
    type: string
    label: string;
    handleButton?: () => void
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({type,handleButton, label}) => {
    return (
        <>
            {type === 'light' && <Button onClick={handleButton} variant="primary">{label}</Button> }
            {type === 'fullwidth' && <Button onClick={handleButton} variant="primary" size="lg">{label}</Button>}
        </>)
}