import React, { Component } from "react";
import "./style.css";

class Directory extends Component {
    // Setting the component's initial state
    state = {
        firstName: "",
        lastName: "",
        employeeID: Number,
        age: Number,
        role: "",
        department: "",
        yearsActive: Number,
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        // if (!search) {
        //     return;
        //   }

        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        alert(`Successfully added ${this.state.firstName} ${this.state.lastName} to the Directory!`);
        this.setState({
            firstName: "",
            lastName: "",
            employeeID: Number,
            age: Number,
            role: "",
            department: "",
            yearsActive: Number,
        });
    }

    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <div>
                <form className="form">
                    <input
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="First Name"
                    />
                    <input
                        value={this.state.lastName}
                        name="lastName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Last Name"
                    />
                    <input
                        value={this.state.age}
                        name="age"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Age"
                        maxLength={15}
                    />
                    <input
                        value={this.state.role}
                        name="role"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Role"
                        maxLength={15}
                    />
                    <input
                        value={this.state.department}
                        name="department"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Department"
                        maxLength={15}
                    />
                    <input
                        value={this.state.yearsActive}
                        name="years"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Years Active"
                        maxLength={50}
                    />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Directory;