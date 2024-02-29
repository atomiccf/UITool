import React from "react";
import {DropDownComponentProps} from "./DropDownComponent.types";
import {Dropdown} from "react-bootstrap";


export const DropDownComponent:React.FC<DropDownComponentProps> = ({dropdownList}) => {
    return (
        <Dropdown data-bs-theme="dark">
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                Links
            </Dropdown.Toggle>
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
             </Dropdown.Toggle>
            <Dropdown.Menu>
                {dropdownList.map((item) => (<Dropdown.Item key={item} >{item}</Dropdown.Item>))}
              </Dropdown.Menu>
        </Dropdown>
    )

}