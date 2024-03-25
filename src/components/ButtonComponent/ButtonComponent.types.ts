import React from "react";

export interface ButtonComponentProps  {
    mode?: string
    handleButton?: () => void | string
    children?: string | React.ReactNode
    size?: "sm" | "lg" | undefined
}