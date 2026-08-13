const learningMetaMap = {
  // =========================
  // Frontend
  // =========================
  "HTML": { difficulty: "Easy", priority: "High" },
  "CSS": { difficulty: "Easy", priority: "High" },
  "JavaScript": { difficulty: "Easy", priority: "High" },
  "TypeScript": { difficulty: "Intermediate", priority: "High" },

  "React": { difficulty: "Easy", priority: "High" },
  "Next.js": { difficulty: "Intermediate", priority: "High" },
  "Vue.js": { difficulty: "Intermediate", priority: "Medium" },
  "Nuxt.js": { difficulty: "Intermediate", priority: "Low" },
  "Angular": { difficulty: "Advanced", priority: "Medium" },
  "Svelte": { difficulty: "Intermediate", priority: "Low" },

  "Tailwind CSS": { difficulty: "Easy", priority: "High" },
  "Bootstrap": { difficulty: "Easy", priority: "Low" },
  "Sass": { difficulty: "Easy", priority: "Medium" },
  "Material UI": { difficulty: "Easy", priority: "Medium" },
  "Chakra UI": { difficulty: "Easy", priority: "Low" },

  "Redux": { difficulty: "Intermediate", priority: "Medium" },
  "Redux Toolkit": { difficulty: "Intermediate", priority: "High" },
  "Context API": { difficulty: "Easy", priority: "Medium" },
  "Zustand": { difficulty: "Easy", priority: "Medium" },

  "Webpack": { difficulty: "Advanced", priority: "Low" },
  "Vite": { difficulty: "Easy", priority: "High" },
  "Parcel": { difficulty: "Easy", priority: "Low" },

  // =========================
  // Backend
  // =========================
  "Node.js": { difficulty: "Intermediate", priority: "High" },
  "Express.js": { difficulty: "Intermediate", priority: "High" },
  "NestJS": { difficulty: "Advanced", priority: "Medium" },
  "Fastify": { difficulty: "Intermediate", priority: "Low" },

  "REST API": { difficulty: "Intermediate", priority: "High" },
  "GraphQL": { difficulty: "Advanced", priority: "Medium" },
  "gRPC": { difficulty: "Advanced", priority: "Low" },

  "JWT": { difficulty: "Easy", priority: "High" },
  "OAuth": { difficulty: "Intermediate", priority: "High" },
  "Passport.js": { difficulty: "Intermediate", priority: "Medium" },

  "Socket.io": { difficulty: "Intermediate", priority: "Medium" },
  "WebRTC": { difficulty: "Advanced", priority: "Low" },

  // =========================
  // Databases
  // =========================
  "MongoDB": { difficulty: "Intermediate", priority: "High" },
  "PostgreSQL": { difficulty: "Intermediate", priority: "High" },
  "MySQL": { difficulty: "Easy", priority: "Medium" },
  "SQLite": { difficulty: "Easy", priority: "Low" },
  "Redis": { difficulty: "Intermediate", priority: "High" },

  "SQL": { difficulty: "Intermediate", priority: "High" },
  "NoSQL": { difficulty: "Intermediate", priority: "Medium" },

  // =========================
  // DevOps
  // =========================
  "Docker": { difficulty: "Intermediate", priority: "High" },
  "Docker Compose": { difficulty: "Intermediate", priority: "Medium" },
  "Kubernetes": { difficulty: "Advanced", priority: "Medium" },

  "Git": { difficulty: "Easy", priority: "High" },
  "GitHub": { difficulty: "Easy", priority: "High" },
  "GitHub Actions": { difficulty: "Intermediate", priority: "Medium" },
  "Jenkins": { difficulty: "Advanced", priority: "Low" },

  "AWS": { difficulty: "Advanced", priority: "Medium" },
  "Microsoft Azure": { difficulty: "Advanced", priority: "Low" },
  "Google Cloud Platform (GCP)": { difficulty: "Advanced", priority: "Low" },

  "Linux": { difficulty: "Intermediate", priority: "High" },
  "Bash": { difficulty: "Intermediate", priority: "Medium" },
  "Shell": { difficulty: "Intermediate", priority: "Medium" },

  "Vercel": { difficulty: "Easy", priority: "Medium" },
  "Netlify": { difficulty: "Easy", priority: "Low" },

  // =========================
  // Programming Languages
  // =========================
  "Python": { difficulty: "Easy", priority: "High" },
  "Java": { difficulty: "Intermediate", priority: "High" },
  "C": { difficulty: "Intermediate", priority: "Medium" },
  "C++": { difficulty: "Intermediate", priority: "Medium" },
  "Go": { difficulty: "Intermediate", priority: "Medium" },
  "Rust": { difficulty: "Advanced", priority: "Low" },
  "PHP": { difficulty: "Easy", priority: "Low" },

  // =========================
  // Data Science
  // =========================
  "NumPy": { difficulty: "Easy", priority: "High" },
  "Pandas": { difficulty: "Easy", priority: "High" },
  "Matplotlib": { difficulty: "Easy", priority: "Medium" },
  "Seaborn": { difficulty: "Easy", priority: "Medium" },
  "Plotly": { difficulty: "Intermediate", priority: "Low" },

  "Scikit-Learn": { difficulty: "Intermediate", priority: "High" },
  "Regression": { difficulty: "Intermediate", priority: "High" },
  "Classification": { difficulty: "Intermediate", priority: "High" },
  "Clustering": { difficulty: "Intermediate", priority: "Medium" },

  // =========================
  // AI / ML
  // =========================
  "TensorFlow": { difficulty: "Advanced", priority: "Medium" },
  "PyTorch": { difficulty: "Advanced", priority: "High" },
  "Keras": { difficulty: "Intermediate", priority: "Medium" },
  "XGBoost": { difficulty: "Advanced", priority: "Medium" },

  "OpenAI API": { difficulty: "Easy", priority: "High" },
  "LangChain": { difficulty: "Advanced", priority: "High" },
  "LlamaIndex": { difficulty: "Advanced", priority: "Medium" },
  "RAG": { difficulty: "Advanced", priority: "High" },
  "Vector Database": { difficulty: "Advanced", priority: "Medium" },

  // =========================
  // Testing
  // =========================
  "Jest": { difficulty: "Easy", priority: "Medium" },
  "Vitest": { difficulty: "Easy", priority: "Medium" },
  "Cypress": { difficulty: "Intermediate", priority: "Medium" },
  "Playwright": { difficulty: "Intermediate", priority: "High" },

  // =========================
  // Cybersecurity
  // =========================
  "OWASP": { difficulty: "Intermediate", priority: "Medium" },
  "CTF": { difficulty: "Advanced", priority: "Low" },
  "Penetration Testing": { difficulty: "Advanced", priority: "Low" }
};

export const getLearningMeta = (tech) => {
  return (
    learningMetaMap[tech] || {
      difficulty: "Intermediate",
      priority: "Medium",
    }
  );
};

export default learningMetaMap;