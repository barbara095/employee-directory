import React, { Component } from "react";
import Search from '../components/search/index';
import Table from '../components/employeeTable/index';
import Container from '../components/container/index';
import Row from '../components/row/index';
import API from '../utils/API';
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

    componentDidMount() {
        API.populateEmployees()
        .then(res => this.setState({ results: res.data.results }))
        .catch((err) => console.log(err));
      }

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
        const result = this.state.results.filter(
            (result) => 
            result.name.first()
        )
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
                <Container style={{ minHeight: "100vh" }}>
                <Row>
                    <Search />
                    <Table />

                </Row>
                </Container>
            </div>
        );
    }
}

export default Directory;