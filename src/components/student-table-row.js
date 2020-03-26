import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";

class StudentTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.deleteStudent = this.deleteStudent.bind(this);
  }

  deleteStudent() {
    axios
      .delete(
        "http://localhost:4000/students/delete-student/" + this.props.obj._id
      )
      .then(res => {
        console.log("res", res);
        console.log("successfully deleted ");
      })
      .catch(err => {
        console.log("error", err);
      });
  }

  render() {
    const { obj } = this.props;

    console.log("obj", obj._id);
    return (
      <tr>
        <td>{obj.name}</td>
        <td>{obj.email}</td>
        <td>{obj.rollNo}</td>
        <td>
          <Link to={"/edit-student/" + obj._id}>Edit</Link>
          <Button onClick={this.deleteStudent} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}

export default StudentTableRow;
