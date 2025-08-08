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
    title: "SMARTAGRO 🌱🌾",
    slug: "smartagro",
    shortDescription: "A machine learning-powered website for crop, fertilizer, and plant disease recommendations.",
    description: "SMARTAGRO is an innovative agricultural platform that leverages Machine Learning and Deep Learning to assist farmers. It features crop recommendation based on soil data, fertilizer suggestions, and plant disease detection through image uploads.",
    imageUrl: Images.SmartAgroThumbnail,
    githubUrl: "https://github.com/Gladiator07/Harvestify",
    tools: ["Python", "Flask", "MongoDB", "Keras", "TensorFlow", "PyTorch", "scikit-learn", "Pandas", "NumPy"],
    category: "AI",
    projectStartDate: new Date("2023-03-10"),
    projectStatus: "Completed",
    keyFeatures: [
      "Crop recommendation using soil nutrient data and weather API",
      "Fertilizer suggestions based on soil deficiencies",
      "Plant disease prediction from image input",
      "Simple and intuitive web UI",
    ],
    galleryImages: [
      Images.SmartAgroCrop,
      Images.SmartAgroFertilizer,
      Images.SmartAgroDisease,
    ],
    liveDemoUrl: undefined,
  },
  {
    id: "2",
    title: "Chbayeh's Coding Puzzle Game",
    slug: "chbayeh-coding-game",
    shortDescription: "A browser-based puzzle game encouraging coding through storytelling and challenges.",
    description: "A fun and mysterious way to improve coding skills for ENISO freshmen, following the ghost Chbaih through five progressively challenging puzzles. Built with basic web technologies and designed to be accessible and engaging.",
    imageUrl: Images.ChbayehThumbnail,
    githubUrl: "https://github.com/yourusername/chbayeh-coding-puzzle", // Replace with actual repo
    tools: ["HTML", "CSS", "JavaScript"],
    category: "Web",
    projectStartDate: new Date("2022-09-05"),
    projectStatus: "Completed",
    keyFeatures: [
      "5 unique coding challenges with a final boss puzzle",
      "Interactive narrative experience with Chbaih the ghost",
      "Responsive design for desktop and mobile",
      "Pure frontend project with no backend dependencies",
    ],
    galleryImages: [
      Images.ChbayehScreenshot1,
      Images.ChbayehScreenshot2,
    ],
    liveDemoUrl: undefined,
  },
  {
    id: "3",
    title: "Interview Ace",
    slug: "interview-ace",
    shortDescription: "A job recommendation and interview assistant platform using NLP and CNNs.",
    description: "Interview Ace is a career-enhancing platform designed for students and fresh graduates. It features a content-based job recommendation engine, an interview question chatbot powered by ChatGPT, and a facial expression recognition system using CNN to give feedback on emotional responses during mock interviews.",
    imageUrl: Images.InterviewAceThumbnail,
    githubUrl: "https://github.com/yourusername/interview-ace", // Replace with actual repo
    tools: ["Python", "Flask", ".NET MVC", "MSSQL", "TensorFlow", "scikit-learn", "CNN"],
    category: "AI",
    projectStartDate: new Date("2022-06-01"),
    projectStatus: "Completed",
    keyFeatures: [
      "TF-IDF + cosine similarity job recommendation system",
      "Interview chatbot generating questions per selected role",
      "Facial expression feedback during interview practice using CNN on FER2013",
      "Full-stack integration using .NET MVC and MSSQL",
    ],
    galleryImages: [
      Images.InterviewAceChatbot,
      Images.InterviewAceEmotionDetection,
    ],
    liveDemoUrl: undefined,
  },
  {
    id: "4",
    title: "Job Recommendation System",
    slug: "job-recommendation-system",
    shortDescription: "A content-based recommendation system matching jobs to user input.",
    description: "This job recommender analyzes user skills and preferences using TF-IDF and cosine similarity to match them with relevant job postings. The system preprocesses a job dataset and exposes a REST API via Flask for real-time job search results.",
    imageUrl: Images.JobRecommendationThumbnail,
    githubUrl: "https://github.com/yourusername/job-recommendation-system", // Replace with actual repo
    tools: ["Python", "Flask", "scikit-learn", "NLTK", "Pandas"],
    category: "AI",
    projectStartDate: new Date("2023-05-10"),
    projectStatus: "Completed",
    keyFeatures: [
      "TF-IDF vectorization of job descriptions",
      "Cosine similarity ranking algorithm",
      "API endpoint for integration with external UIs",
      "Modular structure for data cleaning, training, and serving",
    ],
    galleryImages: [
      Images.JobRecommendationScreenshot,
    ],
    liveDemoUrl: undefined,
  },
  {
    id: "5",
    title: "LinkedIn Profiles Scraper",
    slug: "linkedin-profile-scraper",
    shortDescription: "A Python-based LinkedIn scraping tool for collecting user experience and skills.",
    description: "This project automates the extraction of profile data from LinkedIn using Selenium and BeautifulSoup. It allows users to input multiple profile URLs and outputs structured information like experience, education, and skills.",
    imageUrl: Images.LinkedInScraperThumbnail,
    githubUrl: "https://github.com/T81oub/LinkedIn-Profiles-scraping",
    tools: ["Python", "Selenium", "BeautifulSoup", "ChromeDriver"],
    category: "Data",
    projectStartDate: new Date("2023-08-01"),
    projectStatus: "Completed",
    keyFeatures: [
      "Automated login and navigation to LinkedIn profiles",
      "Structured scraping of key user information",
      "Credential-based login system using a local txt file",
      "Ethical use encouraged through MIT License",
    ],
    galleryImages: [
      Images.LinkedInScraperScreenshot,
    ],
    liveDemoUrl: undefined,
  },
  {
    id: "6",
    title: "Face Recognition Attendance System",
    slug: "face-recognition-attendance",
    shortDescription: "A real-time attendance system using face recognition and OpenCV.",
    description: "This Python project captures live webcam video to detect and recognize faces, marking attendance in a CSV file. Designed for classrooms or small teams, it automatically logs recognized faces along with timestamps.",
    imageUrl: Images.FaceRecognitionThumbnail,
    githubUrl: "https://github.com/T81oub/Face-Recognition-AttendanceSystem",
    tools: ["Python", "OpenCV", "face_recognition"],
    category: "AI",
    projectStartDate: new Date("2022-01-22"),
    projectStatus: "Completed",
    keyFeatures: [
      "Real-time face detection and recognition via webcam",
      "Attendance marked in a persistent CSV file",
      "Support for multiple people and known face images",
      "Simple to run with minimal dependencies",
    ],
    galleryImages: [
      Images.FaceRecognitionExample,
    ],
    liveDemoUrl: undefined,
  },
  {
    id: "7",
    title: "Evolving Cellular Automata",
    slug: "coevolving-cellular-automata",
    shortDescription: "A coevolution-based system to solve density classification using genetic algorithms.",
    description: "This project simulates a coevolutionary process between Cellular Automata (CAs) and Initial Conditions (ICs) to solve the density classification problem. Genetic algorithms evolve both populations, using fitness based on classification performance.",
    imageUrl: Images.CellularAutomataThumbnail,
    githubUrl: "https://github.com/yourusername/evolving-cellular-automata", // Replace if needed
    tools: ["Python", "NumPy", "Genetic Algorithms"],
    category: "AI",
    projectStartDate: new Date("2023-04-01"),
    projectStatus: "Completed",
    keyFeatures: [
      "Custom coevolution algorithm for CAs and ICs",
      "Fitness function based on classification accuracy",
      "Visualization of CA evolution in a grid",
      "Support for multiple evolution strategies",
    ],
    galleryImages: [
      Images.CellularAutomataScreenshot,
    ],
    liveDemoUrl: undefined,
  }
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



