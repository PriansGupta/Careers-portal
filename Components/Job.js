import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";

function Job(props) {
  return (
    <Card className="JobDetails">
      <Card.Header>
        <div className="JobHeading">
          <div>
            <h3>{props.title}</h3>
            <h6>{`${props.organisation}, ${props.location}`}</h6>
          </div>
          <div>
            <p>{`Salary : ₹${props.salary}`}</p>
            <h6>{props.type}</h6>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>Description</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <div className="foot">
          <Button variant="success">Apply Now</Button>
          <h6>{`Deadline: ${props.closing}`}</h6>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Job;
