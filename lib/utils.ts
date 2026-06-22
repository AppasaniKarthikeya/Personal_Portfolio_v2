import { type ClassValue, clsx } from "clsx";

/**
 * Merge class names with clsx. Lightweight alternative when
 * tailwind-merge isn't needed since we have zero border-radius
 * collisions in this design system.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Framer Motion animation presets for the Crimson Manga Logic design system.
 * All animations use a 0.4s cubic-bezier easing curve as specified.
 */
export const motionPresets = {
  /** Standard fade-up entry animation */
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },

  /** Stagger container for children */
  staggerContainer: {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-50px" },
    variants: {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.1,
        },
      },
    },
  },

  /** Child variant for stagger animations */
  staggerChild: {
    variants: {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1],
        },
      },
    },
  },

  /** Hover scale for interactive bento cards */
  hoverScale: {
    whileHover: {
      scale: 1.02,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
    },
    whileTap: {
      scale: 0.98,
    },
  },
} as const;

/**
 * Portfolio data constants — Karthikeya Appasani
 */
export const STACK_DATA = {
  coreEngineering: {
    title: "Core Engineering",
    icon: "Terminal",
    technologies: ["Java", "Python", "JavaScript", "C", "SQL"],
    description: "Systems programming, DSA, and backend engineering",
  },
  cloud: {
    title: "Cloud & Infra",
    icon: "Cloud",
    technologies: ["AWS", "Firebase", "Git"],
    proficiency: 80,
    statusIndicator: true,
  },
  aiLogic: {
    title: "AI & ML",
    icon: "Brain",
    technologies: ["PyTorch", "OpenCV", "FastAPI"],
    description: "Deep learning, computer vision, and intelligent APIs",
  },
  webDev: {
    title: "Web Dev",
    icon: "Code",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    description: "Full-stack web applications and modern UI frameworks",
  },
} as const;

export const PROJECTS_DATA = [
  {
    id: "civictrack",
    caseNumber: "01",
    title: "CivicTrack",
    subtitle: "Civic Issue Platform",
    description:
      "A full-stack civic issue reporting and monitoring platform enabling citizens to report and track infrastructure issues — potholes, garbage accumulation, water supply disruptions, and streetlight failures. Features role-based dashboards for citizens and authorities with analytics and map-based visualization.",
    tags: ["Next.js", "React", "Firebase", "Leaflet", "Tailwind CSS"],
    technologies: "Next.js, React, Tailwind CSS, Firebase, Firestore, Leaflet, OpenStreetMap",
    status: "DEPLOYED",
    link: "#",
    highlights: [
      "Firebase Auth + Firestore + Storage",
      "GPS-based location tracking",
      "Real-time status updates",
      "Role-based dashboards",
    ],
  },
  {
    id: "path-ai",
    caseNumber: "02",
    title: "Path",
    subtitle: "AI Career Mentor",
    description:
      "An AI-powered career mentorship web app with a streaming chat engine backed by a triple-fallback provider architecture (Gemini Flash → Groq Llama 3.3 70B → Ollama). Features guided onboarding, persistent per-user sessions, and dynamically generated system prompts personalized to each user's background.",
    tags: ["Next.js", "TypeScript", "Firebase", "Groq SDK", "Generative AI"],
    technologies: "Next.js, TypeScript, React, Tailwind CSS, Firebase, Groq SDK, Google Generative AI",
    version: "V_1.0",
    status: "LIVE",
    link: "#",
    highlights: [
      "Triple-fallback AI architecture",
      "Google/GitHub OAuth",
      "PWA with daily message limits",
      "Markdown-rendered responses",
    ],
  },
  {
    id: "agriaid",
    caseNumber: "03",
    title: "AgriAid",
    subtitle: "Crop Disease Detection",
    description:
      "An AI-powered crop disease detection platform using transfer learning on a pre-trained Convolutional Neural Network. Trained on a Kaggle plant disease dataset achieving ~96% classification accuracy across multiple disease categories.",
    tags: ["PyTorch", "FastAPI", "OpenCV", "AWS S3", "PostgreSQL"],
    technologies: "PyTorch, FastAPI, OpenCV, PostgreSQL, AWS S3",
    version: "V_0.9",
    status: "STABLE",
    link: "#",
    highlights: [
      "~96% classification accuracy",
      "Transfer learning CNN",
      "AWS S3 scalable storage",
      "FastAPI prediction service",
    ],
  },
] as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const;

export const PERSONAL_INFO = {
  name: "Karthikeya Appasani",
  shortName: "KA",
  role: "Software Engineer & AI Developer",
  location: "Hyderabad, India",
  email: "karthikeyappasani17@gmail.com",
  phone: "+91 9676374416",
  github: "https://github.com/AppasaniKarthikeya",
  linkedin: "https://www.linkedin.com/in/appasani-karthikeya-5325a0374/",
  education: {
    degree: "B.Tech in Information Technology",
    university: "MLR Institute of Technology",
    cgpa: "8.68/10",
    duration: "Aug 2023 – May 2027",
  },
  summary:
    "B.Tech IT student with a CGPA of 8.68/10, building full-stack and AI-powered applications using Java, Python, Firebase, and cloud technologies. 100+ DSA challenges on LeetCode.",
  achievements: [
    "100+ DSA problems solved on LeetCode",
    "Hackathon participant — CVR College of Engineering",
    "Microsoft ISOC UA Industry Visit",
  ],
  certifications: [
    "AWS Cloud Practitioner Essentials",
    "Google Cloud Jams Certification",
    "Google Cloud Skill Badges",
  ],
} as const;

