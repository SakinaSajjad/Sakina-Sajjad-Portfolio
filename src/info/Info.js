import profile from "../img/profile.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

export let colors = ["#7c3aed", "#ec4899"];
export let singlePage = true;

export const info = {
    firstName: "Syeda Sakina",
    lastName: "Sajjad",
    fullName: "Syeda Sakina Sajjad",
    initials: "SS",
    position: "Computer Science Student | Aspiring Mobile Developer | AI Enthusiast",
    tagline: "Building mobile apps, web experiences & AI-powered solutions",
    profileImage: profile,
    gradient: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
    baseColor: colors[0],
    email: "sakinasajjad47@gmail.com",
    phone: "+92 310 4246653",
    location: "Lahore, Pakistan",
    availability: "Open to internships & entry-level roles",

    heroDescription:
        "Motivated Computer Science student with an interest in Mobile App Development and AI. Currently learning React Native and exploring AI integration in mobile applications. Also have foundational knowledge of ASP.NET Core MVC, SQL Server, and Web APIs. Eager to learn, grow, and contribute as an entry-level developer.",

    heroStats: [
        { value: "3.5", label: "CGPA at NUML" },
        { value: "5+", label: "Projects built" },
        { value: "React Native", label: "Currently learning" },
        { value: "AI + Mobile", label: "FYP focus" },
    ],

    aboutHeading: "Aspiring developer passionate about mobile, web & AI.",
    aboutText: [
        "I'm a Computer Science student at the National University of Modern Languages (NUML), pursuing my B.S. with a current CGPA of 3.5. My journey spans mobile development with React Native, web applications with React.js, and backend work with ASP.NET Core MVC and SQL Server.",
        "I'm currently building my Final Year Project — a Pneumonia Disease Detection System using chest X-ray images with React Native, FastAPI, and an EfficientNetB3 model. I'm eager to learn, grow, and contribute as an entry-level developer in mobile or full-stack teams.",
    ],

    whatIDo: [
        "Build cross-platform mobile apps with React Native & navigation",
        "Develop responsive web apps with React.js, Bootstrap & REST APIs",
        "Work with ASP.NET Core MVC, SQL Server & CRUD operations",
        "Train & evaluate ML models with Python, Pandas & Scikit-learn",
        "Integrate AI APIs — OpenAI, Firebase & Google Maps",
        "Write clean code with Git, GitHub, VS Code & Visual Studio",
    ],

    services: [
        {
            title: "Mobile App Development",
            description:
                "Cross-platform apps with React Native — UI components, navigation, Firebase integration, and AI-powered healthcare features for real-world use cases.",
            tags: ["React Native", "Firebase", "Navigation"],
        },
        {
            title: "Web Development",
            description:
                "Responsive websites and React apps with Bootstrap, RESTful APIs, MVC architecture, and polished user experiences from concept to deployment.",
            tags: ["React.js", "Bootstrap", "REST APIs"],
        },
        {
            title: "AI & Machine Learning",
            description:
                "ML model training, data preprocessing, and AI integration — from Kaggle datasets to EfficientNetB3 image classification and OpenAI API features.",
            tags: ["Python", "Scikit-learn", "OpenAI"],
        },
        {
            title: "Backend & Databases",
            description:
                "ASP.NET Core MVC applications with SQL Server and MySQL — CRUD operations, form handling, validation, and structured Web APIs.",
            tags: ["ASP.NET Core", "SQL Server", "C#"],
        },
    ],

    socials: [
        {
            link: "https://github.com/SakinaSajjad",
            icon: "fa fa-github",
            label: "GitHub",
        },
        {
            link: "https://www.linkedin.com/in/sakina-sajjad",
            icon: "fa fa-linkedin",
            label: "LinkedIn",
        },
    ],

    portfolio: [
        {
            title: "Pneumonia Disease Detection System",
            badge: "Final Year Project",
            status: "In Progress",
            featured: true,
            description:
                "Cross-platform mobile app using React Native with a FastAPI (Python) backend. ML-assisted chest X-ray analysis for educational FYP research. Uses Firebase, OpenAI API, and Google Maps API.",
            tags: ["React Native", "FastAPI", "EfficientNetB3", "Firebase", "OpenAI"],
            live: "/pneumonia/",
            source: "https://github.com/SakinaSajjad/Pneumonia-Disease-Detection",
            image: mock1,
        },
        {
            title: "FlickVerse — Netflix Enhancement",
            badge: "Featured Build",
            description:
                "React streaming UI project with social features — comment box on movies/series and story upload functionality for a university portfolio build.",
            tags: ["React", "Firebase", "Tailwind CSS", "Vite"],
            live: "https://sakinasajjad.github.io/FlickVerse-Netflix-Enahancement/",
            source: "https://github.com/SakinaSajjad/FlickVerse-Netflix-Enahancement",
            image: mock5,
        },
        {
            title: "TextUtils — Smart Text Analyzer",
            badge: "Live Demo",
            description:
                "Fast, responsive React web app for analyzing and transforming text with real-time word count, case conversion, light/dark mode, and readability insights.",
            tags: ["React", "React Router", "JavaScript"],
            live: "https://sakinasajjad.github.io/textutils-react/",
            source: "https://github.com/SakinaSajjad/textutils-react",
            image: mock2,
        },
        {
            title: "iNotes Web App",
            badge: "PHP Project",
            description:
                "A notes application built in PHP for adding, editing, and deleting notes — practicing CRUD operations, form handling, and server-side logic.",
            tags: ["PHP", "MySQL", "CRUD", "HTML/CSS"],
            live: null,
            source: "https://github.com/SakinaSajjad/phpNotesApp",
            image: mock3,
        },
        {
            title: "E-Commerce Website",
            badge: "Semester Project",
            description:
                "Basic e-commerce website built with HTML, CSS, and Bootstrap as a semester task — practicing fundamental web development and responsive layout skills.",
            tags: ["HTML5", "CSS3", "Bootstrap"],
            live: "https://sakinasajjad.github.io/Ecommerce-Website/",
            source: "https://github.com/SakinaSajjad/Ecommerce-Website",
            image: mock4,
        },
    ],

    techStack: {
        mobile: ["React Native", "Mobile UI", "Navigation", "Android Emulator"],
        frontend: ["React.js", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
        backend: ["ASP.NET Core", "C#", "PHP", "REST APIs", "MVC"],
        data: ["SQL Server", "MySQL", "CRUD", "Firebase"],
        ai: ["Python", "Scikit-learn", "OpenAI API", "FastAPI", "Pandas"],
        tools: ["VS Code", "Visual Studio", "GitHub", "Google Colab", "Excel"],
    },

    education: [
        {
            degree: "B.S. Computer Science",
            school: "National University of Modern Languages (NUML)",
            period: "2023 – 2027",
            detail: "CGPA: 3.5 (Current)",
        },
        {
            degree: "FSc Pre-Engineering",
            school: "Punjab Group of Colleges",
            period: "2021 – 2022",
            detail: "911 Marks (82%)",
        },
        {
            degree: "Matriculation",
            school: "Jinnah Officers School",
            period: "",
            detail: "998 Marks (90%)",
        },
    ],

    languages: ["English", "Urdu", "French (Basic)"],

    courses: {
        coursera: [
            "Introduction to HTML5",
            "Introduction to CSS3",
            "HTML, CSS, and JavaScript for Web Developers",
            "Interactivity with JavaScript",
            "React Basics",
        ],
        kaggle: [
            "Feature Engineering",
            "Data Cleaning",
        ],
    },
}
