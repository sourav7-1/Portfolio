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
  { title: 'Sentinel Map Automation (TerraWatch)', type: 'GeoAI / DIU Hackathon Finalist', desc: 'Built for the DIU AI Hackathon (Final Round): an automated remote sensing system collecting Sentinel-1 radar and Sentinel-2 optical imagery via Earth Engine for area condition reports.', tech: 'Google Earth Engine, Sentinel-1 & 2, Python, Leaflet.js, Flask, GeoTIFF' },
  { title: 'HealthIO', type: 'Healthcare AI / Full-Stack', desc: 'An enterprise-grade personal health record and medication platform connecting doctors and patients with adherence tracking, DPDP Act 2023 / ABDM compliance, and strictly advisory AI guardrails.', tech: 'FastAPI, React, TypeScript, PostgreSQL, Docker, Celery, Redis, Python 3.12' },
  { title: 'VisionScribe AI', type: 'Video & Speech Intelligence', desc: 'A privacy-conscious local FastAPI workstation: detects face presence via SCRFD while keeping identity unknown, and transcribes Bengali, English, or mixed speech with Faster-Whisper into timestamped transcripts with SRT/JSON/TXT export.', tech: 'FastAPI, Faster-Whisper, SCRFD, SQLite, FFmpeg, Python, OpenCV' },
  { title: 'Distributed Campus AI Compute', type: 'Distributed Systems Architecture', desc: 'An architecture concept for pooling idle university computer lab workstations into a high-throughput, fault-tolerant cluster for AI model training and batch inference.', tech: 'Distributed Systems, Docker, Python, gRPC / REST, Resource Scheduling, Linux' },
  { title: 'Street Food Safety Platform', type: 'Public Health / Database Platform', desc: 'A Flask and MySQL 8.0 regulatory platform for street-food vendor registration, automated inspection scoring triggers, risk analysis procedures, and public health analytics.', tech: 'Flask, MySQL 8.0, SQLAlchemy, Flask-Login, Chart.js, Bootstrap 5, Python' },
  { title: 'FocusFlow', type: 'Productivity & Academic Platform', desc: 'A full-featured Laravel 11 productivity platform bringing study session stopwatches, hierarchical task management, and multi-goal progress tracking into a single unified workspace.', tech: 'Laravel 11, PHP 8.2, Blade, Tailwind CSS, Vite, MySQL, OAuth 2.0' },
];

export const achievements = [
  { title: 'Final Round Selection — AI Innovation Hackathon 2026', organization: 'Daffodil International University', details: 'Selected for the competitive Final Round as team KORPA-LOGIC. Built TerraWatch, an automated satellite remote sensing system analyzing forest and vegetation conditions with Sentinel-1 radar and Sentinel-2 optical data.' },
  { title: 'Final Round Selection — DIU AI Project Competition 2026', organization: 'Daffodil International University', details: 'Selected for the prestigious Final Round among university-wide AI submissions for demonstrated project innovation and technical execution.' },
  { title: 'Certificate of Achievement — Web Development with Laravel', organization: 'National Cyber Security Agency (NCSA), Bangladesh & DIU CSE', details: 'Completed intensive 7-day web engineering training managed by SICL & TechOptions, scoring 93/100 (Certificate ID: 7464).' },
  { title: 'AI+ Prompt Engineer Level 1™ Certification', organization: 'AI CERTs™', details: 'Earned the professional AI+ Prompt Engineer credential in June 2025 (Credential ID: 576065c59096).' },
];

export const journey = [
  'CSE Undergraduate at Daffodil International University, building a foundation in software engineering, databases and intelligent systems.',
  'Finalist in the AI Innovation Hackathon 2026: From Learning to Impact as team KORPA-LOGIC, building the TerraWatch satellite GeoAI system.',
  'Finalist in the DIU AI Project Competition 2026 for AI and software innovation.',
  'Certified in Web Development with Laravel by the National Cyber Security Agency (NCSA) with a score of 93/100.',
  'Earned the AI+ Prompt Engineer Level 1™ certification from AI CERTs™.',
  'Shipped production-ready applications across computer vision, speech transcription, remote sensing, and distributed infrastructure.',
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

ACHIEVEMENTS & CONTESTS
${achievements.map(a => `- ${a.title} (${a.organization}): ${a.details}`).join('\n')}

JOURNEY
${journey.map(j => `- ${j}`).join('\n')}`;
}
