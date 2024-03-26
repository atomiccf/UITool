import React from "react";

export interface ButtonComponentProps  {
    mode?: string
    handleButton?: () =>  void
    handleSubmit?: () => Promise<void> | void
    children?: string | React.ReactNode
    size?: "sm" | "lg" | undefined
}