import { MongoClient } from "mongodb";
import Account from ".";
import { Container } from "@mui/material";
import { useSession, getSession } from "next-auth/react";
import Applications from "@/Components/Applications";

export default function MyApplications(props) {
  // const { data: session } = useSession();
  // console.log(JSON.parse(props.data));
  return (
    <>
      <Account>
        <Container className="JobsContainer">
          <h1 className="JobsHeading">My Applications</h1>
          {/* <h3 className="JobsHeading">{`Welcome back ${session.user.name}`}</h3> */}
          <Applications props={JSON.parse(props.data)}></Applications>
        </Container>
      </Account>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const client = await MongoClient.connect(
    "mongodb+srv://priyanshg615:B80oBjOUGV2D30vn@careersportal.dlu5ln9.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const JobApplications = db.collection(session.user.email);
  const Applied = await JobApplications.find().toArray();
  const data = JSON.stringify(Applied);
  client.close();
  return {
    props: { data },
  };
}
