import { StaticImageData } from "next/legacy/image";
import { Images } from "./images";

export const educationData = [
  {
    id: "1",
    degree: "Engineering Degree in Computer Science, Networks, and Cybersecurity",
    institution: "Grenoble INP - Esisar",
    location: "Valence, France",
    startDate: "2023",
    endDate: "2025",
  },
  {
    id: "2",
    degree: "Engineering Degree in Computer Science",
    institution: "National Engineering School of Sousse",
    location: "Sousse, Tunisia",
    startDate: "2021",
    endDate: "2023",
  },
  {
    id: "3",
    degree: "Preparatory Engineering Program",
    institution: "Preparatory Institute for Engineering Studies of Monastir",
    location: "Monastir, Tunisia",
    startDate: "2019",
    endDate: "2021",
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  imageUrl: StaticImageData;
  videoUrl?: string;
  githubUrl: string;
  tools: string[];
  category: string;
  slug: string;
  projectStartDate: Date;
  projectStatus: string;
  liveDemoUrl?: string;
  keyFeatures?: string[];
  galleryImages?: StaticImageData[];
}


export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Online Bookstore Frontend",
    slug: "online-bookstore-project-frontend",
    shortDescription: "The client-side application for a collaborative online bookstore project.",
    description: "As part of my Software Architecture final exam, I took on the role of Frontend Developer. My responsibilities included building the entire user interface using Next.js and TailwindCSS, managing application state, fetching data from the backend API, and integrating a custom-built chatbot to enhance user engagement.",
    imageUrl: Images.BookstoreThumbnail,
    githubUrl: "https://github.com/minhlq2003/bookstore-frontend-nextjs",
    tools: [ "Next.js", "TailwindCSS", "TypeScript", "React Query" ],
    category: "Web",
    projectStartDate: new Date("2025-01-11"),
    projectStatus: "Completed",
    liveDemoUrl: "https://bookstore-frontend-nextjs.vercel.app/",
    keyFeatures: [ "Responsive and interactive UI", "Client-side data fetching and caching", "Integration with a Node.js backend", "Seamless chatbot widget integration" ],
    galleryImages: [
      Images.BookstoreThumbnail,
      Images.BookstoreHomepage1,
      Images.BookstoreHomepage2,
      Images.BookstoreHomepage3,
      Images.BookstoreCategory1,
      Images.BookstoreCategory2,
      Images.BookstoreCategory3,
    ]
  },
  {
    id: "2",
    title: "Online Bookstore Backend",
    slug: "online-bookstore-project-backend",
    shortDescription: "The server-side API for the collaborative online bookstore project.",
    description: "This is the backend component of the Software Architecture final exam project. While my primary role was on the frontend, I worked closely with the backend team to define API endpoints and data structures. The backend provides RESTful APIs for managing books, users, and orders.",
    imageUrl: Images.BookstoreBackend,
    githubUrl: "https://github.com/HieuTrungMc/bookstore-backend-nodejs",
    tools: [ "Node.js", "Express.js", "Prisma", "MariaDB", "JWT" ],
    category: "Web",
    projectStartDate: new Date("2025-01-11"),
    projectStatus: "Completed",
    keyFeatures: [ "RESTful API design", "Secure authentication with JSON Web Tokens (JWT)", "Database management with Prisma ORM", "Structured data models for books and users" ],
    galleryImages: [ Images.BookstoreBackend ]
  },
  {
    id: "3",
    title: "Bookstore Chatbot",
    slug: "bookstore-chatbot",
    shortDescription: "A Python-based chatbot to assist users with book searches.",
    description: "This component of the bookstore project involved creating a chatbot from the ground up. The bot is designed to understand natural language queries, search the bookstore's database for relevant books, and provide helpful recommendations to users. This was my first foray into applying NLP techniques in a practical application.",
    imageUrl: Images.BookstoreChatbot,
    githubUrl: "https://github.com/dhlananhh/bookstore_chatbot",
    tools: [ "Python", "Flask", "NLP", "JavaScript", "MariaDB" ],
    category: "AI",
    projectStartDate: new Date("2025-01-11"),
    projectStatus: "Completed",
    keyFeatures: [ "Natural Language Processing (NLP) for query understanding", "Direct database querying for real-time results", "Simple web interface for interaction", "Designed for easy integration into the frontend" ],
    galleryImages: [ Images.BookstoreChatbot ]
  },
  {
    id: "4",
    title: "ChatHub-Web",
    slug: "chathub-web",
    shortDescription: "A real-time, web-based chat application for instant communication and collaboration.",
    description: "This project demonstrates the ability to build a real-time chat platform using modern web technologies. The focus was on creating a responsive and engaging user experience with features like live messaging, user presence indicators, and a clean interface, proving skills in handling real-time, bi-directional communication on the web.",
    imageUrl: Images.ChatHubWeb,
    githubUrl: "https://github.com/dhlananhh/ChatHub-Web",
    tools: [ "Next.js", "TailwindCSS", "TypeScript" ],
    category: "Web",
    projectStartDate: new Date("2024-09-15"),
    projectStatus: "Completed",
    liveDemoUrl: "https://chathub-web-liard.vercel.app/",
    keyFeatures: [ "Real-time messaging functionality", "Modern and clean user interface", "User authentication and profiles", "Responsive design for both mobile and desktop" ],
    galleryImages: [ Images.ChatHubWeb ]
  },
  {
    id: "5",
    title: "ForeverBuy Ecommerce Website",
    slug: "foreverbuy-ecommerce-website",
    shortDescription: "A stylish and modern e-commerce storefront with a focus on seamless user experience.",
    description: "ForeverBuy is another take on a modern e-commerce platform, focusing on a minimalistic and clean UI/UX design. This project showcases the ability to build a visually appealing and highly performant online store, with smooth animations, fast page loads, and a checkout process designed to maximize conversion.",
    imageUrl: Images.ForeverBuyThumbnail,
    githubUrl: "https://github.com/dhlananhh/ForeverBuy-Ecommerce",
    tools: [ "Next.js", "TailwindCSS", "TypeScript" ],
    category: "Web",
    projectStartDate: new Date("2024-07-20"),
    projectStatus: "Completed",
    liveDemoUrl: "https://forever-frontend-hazel.vercel.app/",
    keyFeatures: [ "Minimalistic and clean UI/UX design", "Fast page loads optimized with Next.js", "Smooth page animations and transitions", "A streamlined, multi-step checkout flow" ],
    galleryImages: [
      Images.ForeverBuyThumbnail,
      Images.ForeverBuyHomepage1,
      Images.ForeverBuyHomepage2,
      Images.ForeverBuyHomepage3,
      Images.ForeverBuyHomepage4,
      Images.ForeverBuyCollection1,
      Images.ForeverBuyCollection2,
      Images.ForeverBuyCollection3,
      Images.ForeverBuyCollection4,
      Images.ForeverBuyCollection5,
      Images.ForeverBuyLogin,
      Images.ForeverBuyCart,
      Images.ForeverBuyDetails,
    ]
  },
  {
    id: "6",
    title: "My Personal Portfolio Website",
    slug: "portfolio-website",
    shortDescription: "The very portfolio you are currently exploring, designed to be a dynamic and interactive showcase of my journey as a developer.",
    description: "The primary goal of this project was to create a personal, professional space to showcase my skills, projects, and career journey. I chose a modern tech stack, including Next.js for its performance and SEO capabilities, and Framer Motion to craft a dynamic, memorable user experience. This portfolio is not just a list of my work; it's a testament to my skills in frontend development, my attention to design detail, and my ability to build a complete application from the ground up.",
    imageUrl: Images.PortfolioThumbnail,
    githubUrl: "https://github.com/dhlananhh/my-3d-portfolio",
    tools: [
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "Framer Motion",
      "React Bits",
      "React Three Fiber",
      "Shadcn UI",
      "Radix UI"
    ],
    category: "Web",
    projectStartDate: new Date("2024-07-20"),
    projectStatus: "Completed",
    liveDemoUrl: "https://dhlananh-dev-portfolio.vercel.app/",
    keyFeatures: [
      "Interactive Fluid Cursor & 3D Starfield",
      "Dynamic Project Filtering by Category",
      "Seamless Page Transitions with Framer Motion",
      "Dedicated, Rich-Content Project Detail Pages",
      "Live GitHub Contribution Graph Integration",
      "Infinite Scrolling Testimonial Marquee",
      "Fully Responsive Design for All Devices"
    ],
    galleryImages: [
      Images.PortfolioThumbnail,
      Images.PortfolioCareerGoals,
      Images.PortfolioProjects,
      Images.PortfolioSkills,
      Images.PortfolioGithub,
      Images.PortfolioTestimonials,
      Images.PortfolioFAQ,
      Images.PortfolioResume,
      Images.PortfolioContact,
      Images.PortfolioDetails1,
      Images.PortfolioDetails2,
      Images.PortfolioDetails3,
    ]
  },
];


export const workExperiencesData: WorkExperience[] = [
    {
        "id": "4",
        "company": "Dassault Systèmes",
        "role": "AI Engineer",
        "startDate": "Feb 2025",
        "endDate": "Jul 2025",
        "description": "Contributed to the automation of virtual twin generation from satellite imagery using Shapely, GeoPandas, PyTorch, Git, PyTest and Anaconda",
        "responsibilities": [
            "Designed and implemented an AI pipeline to automatically generate virtual twins of cities from satellite imagery, improving speed and accuracy.",
            "Trained a U-Net + ResNet model for semantic segmentation, achieving 89% IoU on test data (+4% improvement after SAM2 fine-tuning).",
            "Implemented a height estimation model and a roof classification model using EfficientNet, reaching 92% accuracy.",
            
        ]
    },
    {
        "id": "3",
        "company": "Markem-Imaje",
        "role": "Machine Learning Engineer",
        "startDate": "Jan 2024",
        "endDate": "Jun 2024",
        "description": "Worked on predictive maintenance and data visualization for industrial printing equipment using machine learning.",
        "responsibilities": [
            "Developed a robust pipeline to clean, structure, and visualize large-scale time-series printer logs using PySpark and Plotly, reducing manual data handling.",
            "Automated data preprocessing, saving developers hours per week and improving reproducibility across teams.",
            "Built predictive maintenance models using XGBoost and Autoencoders to forecast printer failures and minimize downtime.",
            "Contributed to model validation and test suite implementation using Pytest, ensuring model reliability in production environments."
        ]
    },
    {
        "id": "2",
        "company": "NextAV",
        "role": "Data Scientist (Apprenticeship)",
        "startDate": "Jan 2023",
        "endDate": "Jun 2023",
        "description": "Developed AI-powered features for agricultural web applications to support farming decisions.",
        "responsibilities": [
            "Built a web app using Flask and MongoDB integrating AI models for fertilizer recommendation and plant disease diagnostics.",
            "Improved plant disease classification accuracy using CNNs, helping farmers identify issues with higher precision.",
            "Enabled automated treatment suggestion workflows, streamlining the farming decision process.",
            "Collaborated with agronomists and software engineers to ensure domain-relevant results and practical usability."
        ]
    },
    {
        "id": "1",
        "company": "TechInventors TN",
        "role": "Data Scientist (Summer Internship)",
        "startDate": "Jun 2022",
        "endDate": "Jul 2022",
        "description": "Worked on object detection and edge deployment of custom computer vision models.",
        "responsibilities": [
            "Trained and deployed a YOLOv5 model on a custom dataset to detect agricultural features.",
            "Successfully deployed the model on a Raspberry Pi 4, enabling offline detection in remote areas.",
            "Optimized inference speed and model size for edge computing environments.",
            "Documented model pipeline and performance evaluation, assisting future development iterations."
        ]
    }
];



