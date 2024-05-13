/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Tejas's Portfolio",
  description:
    "Proactive software engineer and data scientist with a passion for fintech innovation dedicated to continuous learning and collaborative problem-solving.",
  og: {
    title: "Tejas Goel Portfolio",
    type: "website",
    url: "http://tejasgoel.com/",
  },
};

//Home Page
const greeting = {
  title: "Tejas Goel",
  logo_name: "TejasGoel",
  subTitle:
    "Proactive software engineer and data scientist with a passion for fintech innovation dedicated to continuous learning and collaborative problem-solving.",
  resumeLink:
    "https://drive.google.com/file/d/1wYmLSfBazth9TJwyc48bishnRTpl3xzx/view?usp=sharing",
  portfolio_repository: "https://github.com/tejas1611/tejas1611.github.io",
  githubProfile: "https://github.com/tejas1611",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/tejas1611",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/tejas-goel-01/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:tejasgoel2001@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Outlook",
    link: "mailto:tejas005@e.ntu.edu.sg",
    fontAwesomeIcon: "fa-solid fa-envelope", // Reference https://fontawesome.com/icons/envelope?f=classic&s=solid
    backgroundColor: "#0078D4", // Reference https://simpleicons.org/?q=outlook
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Nanyang Technological University, Singapore",
      subtitle: "B.Eng. in Computer Engineering",
      cgpa: "4.8/5",
      logo_path: "ntu_logo.png",
      alt_name: "NTU Singapore",
      duration: "Aug 2019 - Jan 2024",
      descriptions: [
        "⚡ Specializations in Artificial Intelligence and High-Performance Computing",
        "⚡ Minor in Business",
        "⚡ Graduated with Honours Highest Distinction in 2024",
      ],
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link: "",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Trading Strategies in Emerging Markets Specialization",
      subtitle: "- Indian School of Business",
      logo_path: "isb_logo.png",
      certificate_link:
        "https://coursera.org/share/e870d67dc8d4a960d3dfbecd39492e83",
      alt_name: "ISB",
      color_code: "#2A73CC",
    },
    {
      title: "Blockchain Basics",
      subtitle: "- University at Buffalo",
      logo_path: "University_at_Buffalo_logo.svg",
      certificate_link:
        "https://coursera.org/share/824a2d3654b916ca02247ec8fff7ef86",
      alt_name: "University at Buffalo",
      color_code: "#0C9D5899",
    },
    {
      title: "Introduction to Big Data",
      subtitle: "- University of California, San Diego",
      logo_path: "ucsd_logo.png",
      certificate_link:
        "https://coursera.org/share/6967b4eae11f3ed348980e910abc41e8",
      alt_name: "UCSD",
      color_code: "#112747",
    },
    {
      title: "Containerization (Docker & Kubernetes)",
      subtitle: "- Pluralsight",
      logo_path: "pluralsight_logo.png",
      certificate_link: "",
      alt_name: "Pluralsight",
      color_code: "#ef4e36",
    },
    {
      title: "Applied Social Network Analysis in Python",
      subtitle: "- University of Michigan",
      logo_path: "umich_logo.png",
      certificate_link:
        "https://coursera.org/share/543af13050db79c529999485f37b422c",
      alt_name: "UMich",
      color_code: "#00274c",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internships and Extra Curricular Activities",
  description:
    "I have worked primarily as a backend developer and software engineer at evolving startups as well as young companies and established companies. I have also been involved in Data Science projects at these companies.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Technology Analyst Intern",
          company: "Wells Fargo",
          company_url: "https://www.wellsfargo.com/",
          logo_path: "wells_fargo_logo.png",
          duration: "May 2023 - Jul 2023",
          location: "Singapore",
          description:
            "Led a team of 3 interns to develop Forex Electronic Trading full-stack web app using Flask and SQL databases, integrating real-time data feeds and tools.",
          color: "#000000",
          skills: [
            "Python",
            "Flask",
            "SQL",
            "JavaScript",
            "HTML",
            "CSS",
            "Leadership",
          ],
        },
        {
          title: "Software Engineering Intern",
          company: "Caladan (AlphaLab Capital)",
          company_url: "https://caladan.xyz/",
          logo_path: "alphalab_logo.svg",
          duration: "Jul 2022 - Dec 2022",
          location: "Singapore",
          description:
            "(1) Agile development and testing of mid-frequency cryptocurrency trading infrastructure. \n(2) Migration and deployment of trade servers and quote servers to C#",
          color: "#ee3c26",
          skills: [
            "Python",
            "TypeScript",
            "SQL",
            "CI/CD",
            "C#",
            "AWS",
            "Agile",
            "BigQuery",
          ],
        },
        {
          title: "Blockchain Developer Intern",
          company: "Analytics Quad4",
          company_url: "https://www.analyticsquad4.com/",
          logo_path: "aq4_logo.png",
          duration: "May 2022 - Jul 2022",
          location: "Bangalore, India (Remote)",
          description:
            "Development of decentralized logistics supply-chain management system POC for enhanced automation and transparency for client transactions.",
          color: "#0071C5",
          skills: ["Java", "Hyperledger Fabric", "Docker", "Linux"],
        },
        {
          title: "Primary Research Trainee",
          company: "Client First Management Consultancy Asia",
          company_url: "https://clientfirst.capital/",
          logo_path: "client_first_logo.png",
          duration: "Dec 2021 - Jan 2022",
          location: "Dubai, UAE",
          description:
            "Conducted quantitative and fundamental research for Stock Selection and Portfolio Construction strategy",
          color: "#0071C5",
          skills: [
            "Excel",
            "Equity Trading",
            "Business Finance",
            "Presentation",
            "Sales",
          ],
        },
        {
          title: "Backend Development Intern",
          company: "Analytics Quad4",
          company_url: "https://www.analyticsquad4.com/",
          logo_path: "aq4_logo.png",
          duration: "Jul 2021 - Sep 2021",
          location: "Bangalore, India (Remote)",
          description:
            "(1) Analyzed Big Data for customer retention in client's retail outlets. \n(2) Programming APIs for web application backend.",
          color: "#0071C5",
          skills: ["MySQL", "FastAPI", "Python", "BeautifulSoup"],
        },
        {
          title: "Information Technology Intern",
          company: "Petrofac International",
          company_url: "https://www.petrofac.com/",
          logo_path: "petrofac_logo.svg",
          duration: "Jul 2020 - Oct 2020",
          location: "Sharjah, UAE (Remote)",
          description:
            "Development and documentation of Automation Tools with RPA team for internal processes.",
          color: "#0071C5",
          skills: ["RPA", "UI Path", "Solution Design", "Power Automate"],
        },
      ],
    },
    {
      title: "Extra Curricular Activities",
      experiences: [
        {
          title: "Research Consultant",
          company: "WorldQuant",
          company_url: "https://www.worldquant.com/",
          logo_path: "WQ_logo.webp",
          duration: "Jul 2023 - Present",
          location: "Singapore",
          description:
            "Research ideas and build formulaic alphas on BRAIN web-based simulator, contributing to organization's research effort.",
          color: "#D83B01",
          skills: ["Quantitative Research", "Modelling", "Python"],
        },
        {
          title: "Developer Student Club @ NTU",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "dsc_logo.png",
          duration: "Aug 2019 - Dec 2023",
          location: "Singapore",
          description:
            "Conducted training workshops and brainstormed ideas and projects for solution design competitions.",
          color: "#4285F4",
          skills: ["Python", "Product Development"],
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have worked on several projects focusing on core development, Machine Learning (computer vision, NLP), and cloud computing. Here are a few of them.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "tejas resized.jpg",
    description:
      "Reach out to me if you have any queries or just want to say hi! I love connecting with new people and exchanging ideas.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Dubai, UAE",
    locality: "Dubai",
    country: "UAE",
    region: "Dubai",
    postalCode: "00000",
    streetAddress: "Mankhool",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/k2sV3niTNHBQb3cA9",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
