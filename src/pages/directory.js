import React, { Component } from "react";
import Search from '../components/search/index';
import Table from '../components/employeeTable/index';
import Container from '../components/container/index';
import Row from '../components/row/index';
import Col from '../components/col/index';
import API from '../utils/API';
import "./style.css";

class Directory extends Component {
    // Setting the component's initial state
    state = {
        search: "",
        employees: [],
        results: []
    };

    componentDidMount() {
        API.populateEmployees()
        .then(res => {
            console.log(res);
            this.setState({ 
                employees: res.data.results.map((employee, information) => ({
                    key: information,
                    firstName: employee.name.first,
                    lastName: employee.name.last,
                    email: employee.email,
                    age: employee.age,
                    phone: employee.phone,
                    city: employee.location.city,
                })),
            });
        })
        .catch((err) => console.log(err));
    };

    searchByName = (filter) => {
        const filteredName = this.state.employees.filter((employee) => {
            let values = Object.values(employee).join("").toLocaleLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });
        this.setState({ employees: filteredName});
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
        this.searchByName(this.state.search)
        .then(res => {
            if (res.data.status === "error") {
                throw new Error(res.data.message);
              }
              this.setState({ employees: res.data.message, error: "" });
        })
        .catch(err => this.setState({ error: err.message }));
    }

    render() {
        return (
            <div>
                <Container style={{ minHeight: "100vh" }}>
                <Row>
                    <Col />
                    <Search 
                      value = {this.state.search}
                      handleInputChange = {this.handleInputChange}
                      handleFormSubmit = {this.handleFormSubmit}
                      />
                    <Table />

                </Row>
                </Container>
            </div>
        );
    }
}

export default Directory;