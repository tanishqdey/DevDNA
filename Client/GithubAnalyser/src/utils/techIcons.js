const techIcons = {
  // Frontend
  "HTML": "vscode-icons:file-type-html",
  "CSS": "vscode-icons:file-type-css",
  "JavaScript": "logos:javascript",
  "TypeScript": "logos:typescript-icon",
  "React": "logos:react",
  "Next.js": "logos:nextjs-icon",
  "Redux": "logos:redux",
  "Tailwind CSS": "logos:tailwindcss-icon",
  "Bootstrap": "logos:bootstrap",
  "Vite": "logos:vitejs",

  // Backend
  "Node": "logos:nodejs-icon",
  "Node.js": "logos:nodejs-icon",
  "Express": "simple-icons:express",
  "MongoDB": "logos:mongodb-icon",
  "MySQL": "logos:mysql",
  "PostgreSQL": "logos:postgresql",
  "Firebase": "logos:firebase",
  "Redis": "logos:redis",
  "Prisma": "logos:prisma",

  // Programming Languages
  "Python": "logos:python",
  "Java": "logos:java",
  "C": "logos:c",
  "C++": "logos:c-plusplus",

  // AI / ML
  "TensorFlow": "logos:tensorflow",
  "PyTorch": "logos:pytorch-icon",
  "ScikitLearn": "logos:scikit-learn",
  "Scikit-Learn": "logos:scikit-learn",
  "Pandas": "logos:pandas-icon",
  "NumPy": "logos:numpy",
  "Jupyter": "logos:jupyter",
  "OpenAI": "simple-icons:openai",
  "LangChain": "simple-icons:langchain",

  // DevOps / Cloud
  "Docker": "logos:docker-icon",
  "Kubernetes": "logos:kubernetes",
  "Git": "logos:git-icon",
  "GitHub Actions": "logos:github-actions",
  "AWS": "logos:aws",
  "GCP": "logos:google-cloud",
  "Azure": "logos:microsoft-azure",
  "Vercel": "logos:vercel-icon",
  "Render": "simple-icons:render",
  "Netlify": "logos:netlify",
  "Linux": "logos:linux-tux",

  // APIs / Tools
  "Postman": "logos:postman-icon",
  "Socket.IO": "simple-icons:socketdotio",
  "JWT": "simple-icons:jsonwebtokens",
  "Cloudinary": "simple-icons:cloudinary",

  // Others
  "GitHub": "logos:github-icon",
  "GitLab": "logos:gitlab",
  "NPM": "logos:npm-icon",
  "Yarn": "logos:yarn",
};

export const getTechIcon = (tech) =>
  techIcons[tech] || "mdi:application-braces";

export default techIcons;