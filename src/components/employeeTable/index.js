import React from "react";
import "./style.css";

function Table(props) {
    return (
        <tr>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
            <td>{props.phone}</td>
            <td>{props.city}</td>
        </tr>
    )
};

export default Table;