// {
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

export default {
  name: 'Job',
  type: 'document',
  title: 'Job',
  fields: [
    {
      name: 'organisation',
      type: 'string',
      title: 'organisation',
    },
    {
      name: 'description',
      type: 'string',
      title: 'description',
    },
    {
      name: 'jobTitle',
      type: 'string',
      title: 'jobTitle',
    },
    {
      name: 'location',
      type: 'string',
      title: 'location',
    },
    {
      name: 'profession',
      type: 'string',
      title: 'profession',
    },
    {
      name: 'jobType',
      type: 'string',
      title: 'jobType',
    },
    {
      name: 'sector',
      type: 'string',
      title: 'sector',
    },
    {
      name: 'salaryType',
      type: 'string',
      title: 'salaryType',
    },
    {
      name: 'salary',
      type: 'string',
      title: 'salary',
    },
    {
      name: 'aboutRole',
      type: 'string',
      title: 'aboutRole',
    },
    {
      name: 'closingDate',
      type: 'date',
      title: 'closingDate',
      options: {
        dateFormat: 'DD-MM-YYYY',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'applyCTA',
      type: 'string',
      title: 'applyCTA',
    },
  ],
}
