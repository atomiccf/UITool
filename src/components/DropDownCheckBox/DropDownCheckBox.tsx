import React, {useState} from "react";
import {DropdownButton,Dropdown,Form} from "react-bootstrap";
import {DropDownCheckProps} from "./DropDownCheckBox.types";

export const DropDownCheckBox: React.FC<DropDownCheckProps> = ({dropdownName,dropdownList}) => {
    const [checkedItems, setCheckedItems] = useState({});
    const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedItems({...checkedItems, [event.target.name]: event.target.checked});
    };
    return (
        <DropdownButton id="dropdown-basic-button" title={dropdownName}>
            {dropdownList.map((item, index) => (
                    <Form.Check
                        key={index}
                        type="checkbox"
                        id={`checkbox-${index}`}
                        label={item}
                        name={item}
                        checked={!!dropdownList[item]}
                        onChange={handleCheckChange}
                    />
            ))}
        </DropdownButton>
    )
}