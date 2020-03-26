import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import axios from "axios";

class CreateStudent extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeStudentName = this.handleChangeStudentName.bind(this);
    this.handleChangeStudentEmail = this.handleChangeStudentEmail.bind(this);
    this.handleChangeStudentRollNo = this.handleChangeStudentRollNo.bind(this);
    this.onSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      rollNo: ""
    };
  }

  handleChangeStudentName(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleChangeStudentEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleChangeStudentRollNo(event) {
    this.setState({
      rollNo: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { name, email, rollNo } = this.state;

    const postObj = {
      name,
      email,
      rollNo
    };

    axios
      .post("http://localhost:4000/students/create-student", postObj)
      .then(res => {
        console.log("response", res);
      });

    this.setState({ name: "", email: "", rollNo: "" });
  };

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.name}
              onChange={this.handleChangeStudentName}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={this.state.email}
              onChange={this.handleChangeStudentEmail}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Roll No</Form.Label>
            <Form.Control
              type="text"
              value={this.state.rollNo}
              onChange={this.handleChangeStudentRollNo}
            />
          </Form.Group>

          <Button variant="danger" size="lg" block="block" type="submit">
            Create Student
          </Button>
        </Form>
      </div>
    );
  }
}

export default CreateStudent;
