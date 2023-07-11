import Job from "@/Components/Job";
import Account from ".";
import { Container } from "@mui/material";

export default function MyApplications() {
 

  return (
    <>
      <Account>
        <Container className="JobsContainer">
          <h1 className="JobsHeading">My Applications</h1>
        </Container>
      </Account>
    </>
  );
}
