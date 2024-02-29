import {ReactNode} from "react";

export interface TabComponentProps {
    tabsList:string[]
    handleSelect?: () => void
    children?: string | ReactNode
}