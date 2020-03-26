import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

class EditStudent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      rollNo: ""
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeRollNo = this.onChangeRollNo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.props.match, "match");
    axios
      .get(
        "http://localhost:4000/students/edit-student/" +
          this.props.match.params.id
      )
      .then(res => {
        console.log(res, "res");
        this.setState({
          name: res.data.name,
          email: res.data.email,
          rollNo: res.data.rollNo
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onChangeName(event) {
    this.setState({ name: event.target.value });
  }
  onChangeEmail(event) {
    this.setState({ email: event.target.value });
  }
  onChangeRollNo(event) {
    this.setState({ rollNo: event.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const studentObject = {
      name: this.state.name,
      email: this.state.email,
      rollNo: this.state.rollNo
    };

    axios
      .put(
        "http://localhost:4000/students/update-student/" +
          this.props.match.params.id,
        studentObject
      )
      .then(res => {
        console.log(res.data);
        console.log("student successfully updated");
      })
      .catch(err => {
        console.log("Error", err);
      });

    this.props.history.push("/student-list");
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={this.state.email}
              onChange={this.onChangeEmail}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Roll No</Form.Label>
            <Form.Control
              type="number"
              value={this.state.rollNo}
              onChange={this.onChangeRollNo}
            />
          </Form.Group>
          <Button variant="danger" size="lg" block="block" type="submit">
            Update Student
          </Button>
        </Form>
      </div>
    );
  }
}

export default EditStudent;
