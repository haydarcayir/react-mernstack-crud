import React from "react";
import StudentTableRow from "./student-table-row";

import Table from "react-bootstrap/Table";
import axios from "axios";

class StudentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/students")
      .then(res => {
        this.setState({
          students: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  dataTable = () => {
    return this.state.students.map((item, index) => {
      return <StudentTableRow obj={item} key={index} />;
    });
  };

  render() {
    return (
      <div className="table-wrapper">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Roll No</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.dataTable()}</tbody>
        </Table>
      </div>
    );
  }
}

export default StudentList;
