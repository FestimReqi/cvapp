import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
// import { Link } from "react-router-dom";

const Edituser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/Edituser") // Assuming your endpoint for fetching users is /Edituser
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/deleteUser/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Container className="mt-5">
        <Button className="mt-2 my-2" href="/Createuser" variant="success">
          Add+
        </Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>email</th>
              <th>password</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody style={{ alignItems: "center" }}>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.pwd}</td>
                <td>
                  {/* href="/Updateuser */}
                  <Button variant="warning" href={`/Updateuser/${user._id}`}>
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="ms-1"
                    onClick={(e) => handleDelete(user._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Edituser;
