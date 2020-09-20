import React from "react";
import "./style.css";

function Table(props) {
    return (
        <tr>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.id}</td>
            <td>{props.age}</td>
            <td>{props.role}</td>
            <td>{props.department}</td>
            <td>{props.yearsActive}</td>
        </tr>
    )
};

export default Table;