import React from "react";

export interface ButtonComponentProps  {
    mode?: string
    handleButton?: () => void
    children?: string | React.ReactNode
    size?:string
}