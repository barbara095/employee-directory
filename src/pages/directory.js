import React, { Component } from "react";
import Search from '../components/search/index';
import Table from '../components/employeeTable/index';
import Container from '../components/container/index';
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
                        phone: employee.phone,
                        age: employee.dob.age,
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
        this.setState({ employees: filteredName });
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
        this.searchByName(this.state.search);
    }

    refreshPage = event => {
        event.window.location.reload(false);
      }

    render() {
        return (
             <Container style={{ minHeight: "100vh" }}>
               
                      <Col size="md-12" >
                        <Search
                            value={this.state.search}
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                            refreshPage={this.refreshPage}
                        />
                        </Col>
                   

                    <Col size="md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone number</th>
                                <th>Age</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        {[...this.state.employees].map((object) => (
                            <Table
                                firstName={object.firstName}
                                lastName={object.lastName}
                                email={object.email}
                                phone={object.phone}
                                age={object.age}
                                city={object.city}
                                key={object.key}
                            />
                        ))}
                    </table>
                </Col>
        </Container >
        );
    };
};

export default Directory;