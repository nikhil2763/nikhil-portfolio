export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Full Stack" | "Enterprise" | "MERN Stack";
  image: string;
  description: string;
  keyPoints: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  metrics?: string;
  badge?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  type: string;
  duration: string;
  periodBadge: string;
  location: string;
  overview: string;
  highlights: string[];
  technologies: string[];
  badgeColor?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  score: string;
  scoreType: string;
  description: string;
  badge: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export const portfolioData = {
  personal: {
    name: "Nikhil Jaiswal",
    role: "Full Stack Developer",
    tagline: "Specializing in MERN Stack, Next.js, PostgreSQL & Scalable Enterprise Architectures",
    bio: "Passionate and results-driven Full Stack Developer with hands-on production experience engineering enterprise-grade HRMS and ERP platforms, RESTful APIs, role-based dashboards, and responsive web applications. Graduated with a 9.5 CGPA in Information Technology from Silver Oak University.",
    phone: "9327391838",
    formattedPhone: "+91 93273 91838",
    whatsappUrl: "https://wa.me/919327391838?text=Hi%20Nikhil,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!",
    email: "nikhiljaiswal244@gmail.com",
    github: "nikhil2763",
    githubUrl: "https://github.com/nikhil2763",
    location: "Ahmedabad, Gujarat, India",
    availability: "Available for Full-Time Roles & High-Impact Projects",
    avatar: "/images/nikhil-real.jpg",
    stats: [
      { label: "B.Tech IT Score", value: "9.5", suffix: " CGPA", caption: "Silver Oak University" },
      { label: "Hands-on Experience", value: "2+", suffix: " Years", caption: "Full-Time & Production" },
      { label: "Enterprise Modules", value: "12+", suffix: " Modules", caption: "HRMS & ERP Systems" },
      { label: "Core Technologies", value: "15+", suffix: " Stacks", caption: "MERN, Postgres, Next.js" }
    ]
  },

  experiences: [
    {
      id: "airwix",
      role: "Full Stack Developer",
      company: "Airwix Technologies Pvt. Ltd.",
      type: "Full-Time Role",
      duration: "June 2026 – Present",
      periodBadge: "Current Role",
      location: "Ahmedabad, India",
      overview: "Leading end-to-end development on a mission-critical enterprise Human Resource Management System (HRMS) handling end-to-end employee lifecycle, high-volume payroll calculation, and real-time attendance.",
      highlights: [
        "Architected and developed modular HRMS modules covering Employee Directory, Biometric/Manual Attendance, Leave Management, Payroll Processing, and Reimbursement pipelines.",
        "Built robust, secure RESTful APIs using Node.js, Express.js, and PostgreSQL for complex business logic and audit workflows.",
        "Engineered automated salary calculations, deduction matrices, tax structures, attendance policies, and reimbursement claim approval hierarchies.",
        "Implemented granular Role-Based Access Control (RBAC) and permissions management for multi-level organization hierarchies (Super Admin, HR Manager, Team Lead, Employee).",
        "Designed dynamic analytics dashboards with interactive visualization charts for payroll distribution, attendance rates, and HR executive metrics.",
        "Tuned PostgreSQL indexing, optimized nested database queries, and implemented efficient API caching to ensure sub-100ms response times on high-volume datasets."
      ],
      technologies: ["React.js", "Node.js", "PostgreSQL", "Express.js", "RESTful APIs", "RBAC", "SQL Optimization"],
      badgeColor: "emerald"
    },
    {
      id: "itecharathi",
      role: "Full Stack Developer",
      company: "iTechsarathi Pvt. Ltd.",
      type: "Full-Time Role",
      duration: "February 2025 – May 2026",
      periodBadge: "Full-Time",
      location: "Ahmedabad, India",
      overview: "Delivered production-grade features on a live, multi-tenant Enterprise Resource Planning (ERP) platform powering cross-departmental operations.",
      highlights: [
        "Spearheaded development across live ERP business modules including Inventory Management, Finance & Invoicing, CRM, Customer Service Ticketing, and Purchase Orders.",
        "Constructed scalable RESTful API services using React.js, Node.js, Express.js, and PostgreSQL.",
        "Designed and normalized complex relational PostgreSQL schemas for real-time inventory ledger updates, multi-party financial transactions, and automated audits.",
        "Crafted interactive role-based executive dashboards with JWT authentication and granular permission verification.",
        "Collaborated with cross-functional engineering teams to triage production issues, optimize query latencies, and implement clean MVC architecture patterns."
      ],
      technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "CRM & ERP", "Inventory Logic", "JWT Auth"],
      badgeColor: "cyan"
    },
    {
      id: "tinyscript",
      role: "MERN Stack Developer Intern",
      company: "Tiny Script Pvt. Ltd.",
      type: "Internship",
      duration: "October 2024 – December 2024",
      periodBadge: "Internship",
      location: "Ahmedabad, India",
      overview: "Focused on core MERN full-stack development, creating high-performance backend routing and interactive client interfaces.",
      highlights: [
        "Developed scalable backend REST APIs using Node.js and Express.js, ensuring efficient request validation and JSON data processing.",
        "Implemented dynamic and responsive UI components using React.js with modular state management and clean component separation.",
        "Integrated MongoDB schemas with Mongoose ODM for rapid document querying and data persistence.",
        "Gained practical experience in team git workflows, code reviews, and agile sprint delivery."
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git"],
      badgeColor: "indigo"
    }
  ] as Experience[],

  projects: [
    {
      id: "vehicle-rental",
      title: "Vehicle Rental Platform",
      subtitle: "Full-Stack Booking Engine with Real-Time Availability",
      category: "MERN Stack",
      image: "/images/vehicle-rent.jpg",
      description: "A comprehensive, responsive full-stack vehicle rental web platform enabling customers to seamlessly search, compare, and book luxury cars and motorcycles with instant status updates and payment calculations.",
      keyPoints: [
        "Developed and deployed a full-stack vehicle rental platform using the MERN stack with dynamic date filtering and vehicle categorization.",
        "Built responsive client interface with React.js featuring interactive filters for vehicle type, transmission, fuel, and price tier.",
        "Utilized MongoDB database schemas to store vehicle inventories, user records, and rental booking transactions.",
        "Engineered real-time availability checking logic to eliminate double-booking and provide live reservation confirmation.",
        "Implemented intuitive customer booking dashboard with active trip management and rental status tracking."
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "RESTful APIs"],
      githubUrl: "https://github.com/nikhil2763",
      badge: "Featured MERN Project"
    },
    {
      id: "ecommerce-platform",
      title: "Full-Stack E-Commerce System",
      subtitle: "Scalable Online Retail Platform with RBAC Admin",
      category: "Full Stack",
      image: "/images/ecommerce.jpg",
      description: "A feature-rich, production-grade e-commerce application featuring dynamic catalog navigation, persistent shopping cart, role-based authorization, and administrative product management.",
      keyPoints: [
        "Developed a responsive full-stack e-commerce application using the MERN stack with modern UI aesthetics.",
        "Built modular, reusable React components for dynamic product listings, category sorting, search, and cart drawer.",
        "Developed robust RESTful APIs for product catalog, user profiles, persistent shopping carts, and order checkout flows using Node.js and Express.js.",
        "Integrated MongoDB database with optimized aggregation pipelines for fast product indexing and order history queries.",
        "Implemented secure JWT authentication, session handling, and role-based access control (RBAC) separating customer portals and admin management.",
        "Ensured pixel-perfect responsive design tailored across mobile, tablet, and desktop screens."
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "RBAC", "Tailwind CSS"],
      githubUrl: "https://github.com/nikhil2763",
      badge: "Full-Stack Application"
    },
    {
      id: "hrms-platform",
      title: "Enterprise HRMS Platform",
      subtitle: "Workforce Lifecycle, Payroll & Attendance Engine",
      category: "Enterprise",
      image: "/images/hrms-erp.jpg",
      description: "A mission-critical enterprise HR management suite powering daily workforce tracking, attendance logs, complex salary processing, leave approvals, and executive analytics.",
      keyPoints: [
        "Engineered HRMS modules covering Employee Management, Biometric Attendance, Leave Approval Workflows, and Reimbursement pipelines.",
        "Created scalable RESTful APIs in Node.js and PostgreSQL with strict transaction guarantees for financial payroll runs.",
        "Automated complex business logic for monthly salary disbursements, bonus calculations, and compliance reports.",
        "Configured multi-tier Role-Based Access Control (RBAC) to enforce granular feature-level access privileges.",
        "Built interactive analytics dashboards displaying attendance trends, department overhead, and payroll distributions."
      ],
      techStack: ["React.js", "Node.js", "PostgreSQL", "Express.js", "REST APIs", "Analytics"],
      githubUrl: "https://github.com/nikhil2763",
      badge: "Production System"
    },
    {
      id: "erp-suite",
      title: "Live Enterprise ERP Suite",
      subtitle: "Integrated Multi-Module Business Architecture",
      category: "Enterprise",
      image: "/images/hrms-erp.jpg",
      description: "A high-performance ERP system centralizing supply chain, warehouse inventory, purchase orders, CRM leads, and multi-departmental accounting into one unified platform.",
      keyPoints: [
        "Delivered enterprise modules covering Inventory, Finance, CRM, Service Requests, and Purchase Orders.",
        "Designed and normalized PostgreSQL database tables for high-concurrency inventory transactions and financial ledgers.",
        "Created secure authentication protocols, audit logs, and permission middleware for sensitive financial actions.",
        "Collaborated on live production deployments, database query tuning, and zero-downtime bug fixes."
      ],
      techStack: ["React.js", "Node.js", "PostgreSQL", "Express.js", "MVC Architecture", "Security"],
      githubUrl: "https://github.com/nikhil2763",
      badge: "Live Enterprise ERP"
    }
  ] as Project[],

  skills: {
    frontend: [
      { name: "React.js", level: 95, highlight: true },
      { name: "Next.js", level: 88, highlight: true },
      { name: "JavaScript (ES6+)", level: 92, highlight: true },
      { name: "TypeScript", level: 85, highlight: true },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Tailwind CSS", level: 92, highlight: true },
      { name: "Material UI (MUI)", level: 86 },
      { name: "Responsive UI/UX", level: 94 }
    ],
    backend: [
      { name: "Node.js", level: 92, highlight: true },
      { name: "Express.js", level: 90, highlight: true },
      { name: "RESTful APIs", level: 95, highlight: true },
      { name: "MVC Architecture", level: 88 },
      { name: "Authentication & Authorization", level: 90, highlight: true },
      { name: "Role-Based Access Control (RBAC)", level: 92, highlight: true },
      { name: "API Performance Tuning", level: 87 }
    ],
    databases: [
      { name: "PostgreSQL", level: 90, highlight: true },
      { name: "MongoDB", level: 88, highlight: true },
      { name: "SQL & Relational Schemas", level: 90, highlight: true },
      { name: "Query Optimization", level: 85 },
      { name: "Data Modeling & Indexing", level: 87 }
    ],
    languagesAndTools: [
      { name: "Java", level: 82 },
      { name: "C", level: 80 },
      { name: "Git & GitHub", level: 90, highlight: true },
      { name: "Postman", level: 92 },
      { name: "VS Code & Antigravity", level: 95 },
      { name: "Vercel / Cloud Deployment", level: 85 }
    ]
  },

  strengths: [
    {
      title: "Problem-Solving & Algorithms",
      desc: "Strong computer science fundamentals, algorithmic problem-solving ability, and systematic debugging under complex constraints.",
      icon: "Cpu"
    },
    {
      title: "Live Production Experience",
      desc: "Proven track record writing and deploying live code on production ERP and HRMS platforms handling real business transactions.",
      icon: "Zap"
    },
    {
      title: "Full-Cycle Team Collaboration",
      desc: "Experienced working within agile teams, git workflow branching, code review cycles, and cross-functional feature planning.",
      icon: "Users"
    },
    {
      title: "Quick Learner & High Adaptability",
      desc: "Swift at adopting modern frameworks, transitioning between SQL/NoSQL stacks, and mastering complex enterprise domain logic.",
      icon: "Rocket"
    }
  ],

  education: [
    {
      institution: "Silver Oak University",
      degree: "Bachelor of Technology in Information Technology",
      period: "2022 – 2025",
      score: "9.5",
      scoreType: "CGPA",
      badge: "Outstanding Academic Merit",
      description: "Maintained exceptional academic standing with a 9.5 CGPA. Focused on Advanced Web Technologies, Relational Database Management Systems, Object-Oriented Programming in Java & C, Data Structures & Algorithms, and Software Engineering methodologies."
    },
    {
      institution: "Government Polytechnic Ahmedabad",
      degree: "Diploma in Information Technology",
      period: "2019 – 2022",
      score: "9.17",
      scoreType: "CGPA",
      badge: "First Class with Distinction",
      description: "Graduated with 9.17 CGPA Distinction. Built foundational expertise in programming languages (C, C++, Java), database schemas, computer networks, and full-stack software development fundamentals."
    }
  ] as Education[]
};
