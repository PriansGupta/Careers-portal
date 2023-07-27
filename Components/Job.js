import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import { useSession } from "next-auth/react";

function Job(props) {
  const { data: session } = useSession();
  async function Apply() {
    console.log("Clicked");
    const res = await fetch("/api/JobApply", {
      method: "POST",
      body: JSON.stringify({
        props,
        name: session.user.name,
        email: session.user.email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);
  }

  return (
    <Card className="JobDetails">
      <Card.Header>
        <div className="JobHeading">
          <div>
            <Link href={`/account/Jobs/${props.JobId}`}>
              <h3>{props.title}</h3>
            </Link>
            <h6>{`${props.organisation}, ${props.location}`}</h6>
          </div>
          <div>
            <p>{`Salary Type:  ${props.salaryType}`}</p>
            <h6>{props.type}</h6>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>Description</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <div className="foot">
          <Button variant="success" onClick={Apply}>
            Apply Now
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Job;
