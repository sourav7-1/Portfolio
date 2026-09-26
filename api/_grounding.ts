// Plain-text mirror of src/data.ts for the serverless runtime, which can't
// import Vite-style asset imports (images/PDF). Keep in sync manually when
// portfolio content changes.

export const profile = {
  name: 'Sourav Kundu Samya',
  role: 'AI & Full-Stack Developer',
  email: 'souravku0416@gmail.com',
  phone: '+8801609696788',
  location: 'Gournadi, Barishal, Bangladesh',
  education: 'B.Sc. in Computer Science and Engineering, Daffodil International University',
  github: 'https://github.com/sourav7-1',
  linkedin: 'https://www.linkedin.com/in/sourav-kundu-samya-387496367/',
  skills: 'Python, TypeScript, Java, C, PHP, JavaScript, SQL, FastAPI, React, Flask, Laravel, PostgreSQL, MySQL, SQLite, OpenCV, Docker, Git, Celery, machine learning, computer vision, Google Earth Engine',
  currentlyLearning: 'AI/ML, computer vision, cloud and distributed systems, geospatial intelligence, backend engineering',
  philosophy: "Development is more than writing code — it's about understanding a problem, designing an effective solution, and turning that solution into something useful.",
  bio: "Sourav Kundu Samya is a Computer Science and Engineering student at Daffodil International University with a strong passion for artificial intelligence, software development and intelligent systems. He enjoys turning ideas into practical, technology-driven solutions. His project work spans computer vision, speech transcription, satellite-imagery analysis, geospatial automation, distributed AI infrastructure, personal health record systems and full-stack application development — exploring how AI can integrate with real-world data and scalable computing environments to solve complex problems.",
};

export const projects = [
  { title: 'Sentinel Map Automation', type: 'GeoAI / Automation', desc: 'An end-to-end geospatial workflow: pick a region on an interactive map, pull and filter matching Sentinel-2 imagery through Earth Engine, and package the result as export-ready data.', tech: 'Flask, Leaflet, Earth Engine, Sentinel-2' },
  { title: 'HealthIO', type: 'Healthcare AI / Full-Stack', desc: 'An AI-powered personal health record and medication management platform connecting doctors, patients and caregivers across clinical visits, digital prescriptions, lab tests, smart reminders and treatment adherence tracking with verified AI advisory guardrails.', tech: 'FastAPI, React, TypeScript, PostgreSQL, Docker, Celery' },
  { title: 'VisionScribe AI', type: 'Video Intelligence', desc: 'A privacy-conscious local dashboard for authorized video analysis: it detects face presence with SCRFD and transcribes Bengali, English or mixed speech with Faster-Whisper into searchable, timestamped transcripts.', tech: 'FastAPI, SCRFD, Faster-Whisper, SQLite' },
  { title: 'Distributed Campus AI Compute', type: 'Distributed Systems', desc: 'An architecture concept for pooling approved CPU and GPU resources across separate physical locations into a single usable compute layer for AI workloads.', tech: 'Python, Docker, Distributed Compute' },
  { title: 'Street Food Safety Platform', type: 'Data / Web Platform', desc: 'A structured platform for tracking street-food vendor inspections end to end — logging complaints, scoring hygiene results and recording corrective actions.', tech: 'Flask, MySQL, SQLAlchemy' },
  { title: 'FocusFlow', type: 'Productivity Platform', desc: 'A single Laravel application bringing study sessions, tasks, goals and secure account workflows together.', tech: 'Laravel, PHP, Blade, SQL' },
];

export const journey = [
  'CSE Undergraduate at Daffodil International University, building a foundation in software engineering, databases and intelligent systems.',
  'Shipped a run of independent AI/software projects across computer vision, geospatial automation, distributed infrastructure and full-stack platforms.',
  'Reached the final round of Daffodil International University\'s AI Project Competition (2026).',
];

export function buildSystemPrompt(){
  return `You are the portfolio assistant embedded on Sourav Kundu Samya's personal website. Answer visitor questions ONLY using the facts below. Be concise (2-4 sentences), friendly, and professional. If asked something not covered by these facts, say you don't have that information and suggest contacting Sourav directly at ${profile.email} or via the Contact section. Never invent projects, employers, metrics, or credentials that aren't listed here.

PROFILE
Name: ${profile.name}
Role: ${profile.role}
Bio: ${profile.bio}
Education: ${profile.education}
Location: ${profile.location}
Email: ${profile.email}
Phone: ${profile.phone}
Skills: ${profile.skills}
Currently learning: ${profile.currentlyLearning}
Philosophy: ${profile.philosophy}
GitHub: ${profile.github}
LinkedIn: ${profile.linkedin}

PROJECTS
${projects.map(p => `- ${p.title} (${p.type}): ${p.desc} Tech: ${p.tech}.`).join('\n')}

JOURNEY
${journey.map(j => `- ${j}`).join('\n')}`;
}
