import Job from "@/Components/Job";
import Account from ".";
import { Container } from "@mui/material";
import { createClient } from "next-sanity";

export default function Jobs(props) {
  return (
    <>
      <Account>
        <Container className="JobsContainer">
          <h1 className="JobsHeading">Jobs</h1>
          {props.jobs.map((job) => (
            <Job
              key={job.jobTitle}
              title={job.jobTitle}
              organisation={job.organisation}
              location={job.location}
              type={job.jobType}
              sector={job.sector}
              salary={job.salary}
              salaryType={job.salaryType}
              description={job.description}
              closing={job.closingDate}
              cta={job.cta}
            ></Job>
          ))}
        </Container>
      </Account>
    </>
  );
}

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "p3s4qfsf",
    dataset: "production",
    useCdn: false,
  });
  const jobs = await client.fetch(`*[_type == "Job"]`);
  return {
    props: {
      jobs,
    },
  };
}
