import Account from ".";
import { Container } from "@mui/material";
import { useSession } from "next-auth/react";

export default function MyApplications() {
  const { data: session } = useSession();
  return (
    <>
      <Account>
        <Container className="JobsContainer">
          <h1 className="JobsHeading">My Applications</h1>
          <h3 className="JobsHeading">{`Welcome back ${session.user.name}`}</h3>
        </Container>
      </Account>
    </>
  );
}
