import Job from "@/Components/Job";
import Account from ".";
import { Container } from "@mui/material";
import { createClient } from "next-sanity";

export default function Jobs(props) {
  console.log(props);
  // const jobs = [
  //   {
  //     jobTitle: "Software Engineer",
  //     organisation: "Google",
  //     location: "Banglore",
  //     profession: "IT",
  //     jobType: "Full-time",
  //     sector: "Technology",
  //     salaryType: "Annual",
  //     salary: 80000,
  //     aboutRole: "Lorem ipsum dolor sit amet.",
  //     closingDate: "2023-07-31",
  //     applyCTA: "Apply Now",
  //     description:
  //       "We are seeking a skilled Software Engineer to join our team. You will be responsible for developing high-quality software solutions and collaborating with cross-functional teams.",
  //   },
  //   {
  //     jobTitle: "Data Analyst",
  //     organisation: "Amazon",
  //     location: "Hyderabad",
  //     profession: "Finance",
  //     jobType: "Part-time",
  //     sector: "Finance",
  //     salaryType: "Monthly",
  //     salary: 60000,
  //     aboutRole: "Consectetur adipiscing elit.",
  //     closingDate: "2023-08-15",
  //     applyCTA: "Apply Now",
  //     description:
  //       "We are looking for a Data Analyst to help us analyze large datasets and provide insights for decision-making. You will work closely with stakeholders to understand their data needs and deliver accurate reports.",
  //   },
  //   {
  //     jobTitle: "Product Manager",
  //     organisation: "Acme Inc.",
  //     location: "Gurgaon",
  //     profession: "Business",
  //     jobType: "Full-time",
  //     sector: "Technology",
  //     salaryType: "Annual",
  //     salary: 100000,
  //     aboutRole: "Praesent vitae magna nec velit elementum ullamcorper.",
  //     closingDate: "2023-09-30",
  //     applyCTA: "Apply Now",
  //     description:
  //       "We are seeking an experienced Product Manager to lead our product development initiatives. You will be responsible for defining product strategy, conducting market research, and collaborating with cross-functional teams to deliver successful products.",
  //   },
  //   {
  //     jobTitle: "Graphic Designer",
  //     organisation: "Langoor",
  //     location: "Banglore",
  //     profession: "Design",
  //     jobType: "Contract",
  //     sector: "Creative",
  //     salaryType: "Monthly",
  //     salary: 70000,
  //     aboutRole: "Fusce ac gravida tortor.",
  //     closingDate: "2023-10-15",
  //     applyCTA: "Apply Now",
  //     description:
  //       "We are looking for a talented Graphic Designer to create visually appealing designs for our marketing materials and digital platforms. You will collaborate with the marketing team to convey our brand message effectively through compelling visuals.",
  //   },
  // ];

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
