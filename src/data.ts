import heroImage from '../assets/images/sourav-ghibli-transparent.png';
import aboutImage from '../assets/images/sourav-cartoon-transparent.png';
import formalPhoto from '../assets/images/sourav-formal.jpg';
import resumePdf from '../assets/cv/Sourav_Kundu_Samya_CV.pdf';
import satelliteImage from '../assets/projects/satellite-monitoring.png';
import focusFlowImage from '../assets/projects/focusflow-dashboard.png';
import healthioImage from '../assets/projects/healthio-logo.png';
import hackathonCert from '../assets/certificates/ai-innovation-hackathon-final-round-2026.png';
import projectCompCert from '../assets/certificates/diu-ai-project-competition-2026.png';
import promptCert from '../assets/certificates/ai-prompt-engineer-level-1.pdf';

export const profile = {
  name: 'Sourav Kundu Samya', short: 'Sourav', initials: 'SKS', role: 'AI & Full-Stack Developer',
  email: 'souravku0416@gmail.com', phone: '+8801609696788', location: 'Gournadi, Barishal, Bangladesh',
  github: 'https://github.com/sourav7-1', linkedin: 'https://www.linkedin.com/in/sourav-kundu-samya-387496367/',
  facebook: 'https://www.facebook.com/share/18ErVirbJc/?mibextid=wwXIfr',
  instagram: 'https://www.instagram.com/itzsouravitz',
  whatsapp: 'https://wa.me/8801609696788',
  resume: resumePdf, photo: aboutImage, heroImage, formalPhoto
};
export interface ProjectItem {
  n: string;
  title: string;
  type: string;
  desc: string;
  fullDesc: string;
  features: string[];
  tech: string[];
  image?: string;
  logo?: string;
  github?: string;
}

export const projects: ProjectItem[] = [
  {
    n: '01',
    title: 'Sentinel Map Automation (TerraWatch)',
    type: 'GEOAI / DIU HACKATHON FINALIST',
    desc: 'Built for the DIU AI Hackathon (Final Round): an automated remote sensing system collecting Sentinel-1 radar and Sentinel-2 optical imagery via Earth Engine for area condition reports.',
    fullDesc: 'TerraWatch was engineered for the AI Innovation Hackathon 2026 (selected for the competitive Final Round as part of team KORPA-LOGIC). It automates satellite Earth observation by querying both Sentinel-1 SAR (all-weather radar) and Sentinel-2 optical multispectral constellations via Google Earth Engine. Users draw any Region of Interest (ROI) on a Leaflet map, filter cloud noise, compute vegetation health indices (NDVI/EVI/NBR), and export calibrated GeoTIFF rasters with zero manual GIS desktop software bottlenecks.',
    features: [
      'Selected for the Final Round of AI Innovation Hackathon 2026: From Learning to Impact as part of team KORPA-LOGIC.',
      'Interactive Leaflet polygon and bounding-box drawing tools for custom Region-of-Interest (ROI) capture.',
      'Google Earth Engine integration querying both Sentinel-1 (radar) and Sentinel-2 (optical) surface reflectance collections.',
      'Automated cloud score filtering utilizing QA60 band bitmasks for clear ground reflectance observation.',
      'On-the-fly spectral index computation for NDVI, EVI, and NBR (vegetation health and burn severity analysis).',
      'Direct GeoTIFF raster export pipeline packaging calibrated band arrays with complete spatial projection metadata.'
    ],
    tech: ['Google Earth Engine', 'Sentinel-1 & 2', 'Python', 'Leaflet.js', 'Flask', 'GeoTIFF'],
    image: satelliteImage,
    github: 'https://github.com/sourav7-1'
  },
  {
    n: '02',
    title: 'HealthIO',
    type: 'HEALTHCARE AI / FULL-STACK',
    desc: 'An enterprise-grade personal health record and medication platform connecting doctors and patients with adherence tracking and strictly advisory AI guardrails.',
    fullDesc: 'HealthIO is an AI-powered Personal Health Record and medication management platform connecting doctors, patients, caregivers, and administrators across medical visits, clinical records, diagnostic lab tests, electronic prescriptions, smart reminders, and adherence tracking. Engineered specifically around India\'s DPDP Act 2023 and ABDM standards, with strict deterministic AI safety guardrails where AI is strictly advisory and clinical oversight remains with verified physicians.',
    features: [
      'FastAPI modular monolith backend (Python 3.12, uv) with Celery distributed workers for asynchronous jobs.',
      'Modern React + Vite Single Page Application featuring dedicated Doctor and Patient clinical portals.',
      'Strict DPDP Act 2023 & ABDM compliance with data classification, audit logging, and cryptographic verification.',
      'Deterministic AI safety guardrails ensuring AI outputs are strictly advisory with mandatory human clinician verification gates.',
      'PostgreSQL relational data store, Redis caching and task broker, and MinIO object storage for medical documents.',
      'Production-ready containerized Docker orchestration with separated development and staging configurations.'
    ],
    tech: ['FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'Celery', 'Redis', 'Python 3.12'],
    image: healthioImage,
    logo: healthioImage,
    github: 'https://github.com/sourav7-1/HealthIO'
  },
  {
    n: '03',
    title: 'VisionScribe AI',
    type: 'VIDEO & SPEECH INTELLIGENCE',
    desc: 'A privacy-conscious local FastAPI workstation: detects face presence via SCRFD while keeping identity unknown, and transcribes Bengali, English, or mixed speech with Faster-Whisper.',
    fullDesc: 'VisionScribe AI (v0.5.0) is a local, privacy-first video intelligence workstation. Built around the ethical principle that face detection must not imply facial recognition, it identifies human-face presence using SCRFD (marking identity as \'Unknown\') and transcribes bilingual audio (Bengali, English, and code-switched speech) into timestamped, searchable transcripts via Faster-Whisper, storing results in SQLite and removing temporary media immediately.',
    features: [
      'Sampled detection-only face presence analysis via SCRFD with strict privacy preservation (Identity: Unknown).',
      'Faster-Whisper speech-to-text pipeline optimized for Bengali, English, and code-switched multilingual speech.',
      'Automated mono 16 kHz audio extraction using FFmpeg, deleting temporary audio/video immediately after inference.',
      'Interactive transcript player with Unicode-safe debounced search, DOM <mark> highlighting, and duration-clamped seeking.',
      'Multi-format export supporting clean TXT, structured JSON, and subtitle SRT downloads with clipboard integration.',
      'FastAPI backend with SQLite database persistence, preventing duplicate submissions and stale polling states.'
    ],
    tech: ['FastAPI', 'Faster-Whisper', 'SCRFD', 'SQLite', 'FFmpeg', 'Python', 'OpenCV'],
    github: 'https://github.com/sourav7-1/VisionScribe-AI'
  },
  {
    n: '04',
    title: 'Distributed Campus AI Compute',
    type: 'DISTRIBUTED SYSTEMS ARCHITECTURE',
    desc: 'An architecture concept for pooling idle university computer lab workstations into a high-throughput, fault-tolerant cluster for AI model training and batch inference.',
    fullDesc: 'A distributed computing systems blueprint designed to alleviate the shortage of accessible GPU/CPU resources in academic institutions. By harvesting idle compute cycles across campus lab workstations during off-hours, the platform forms an elastic cluster capable of scheduling containerized deep learning workloads with non-invasive preemption and resource isolation.',
    features: [
      'Decentralized node agent architecture detecting idle CPU/GPU thresholds and registering with a central coordinator.',
      'Docker-based containerized workload execution ensuring clean host sandboxing and zero persistence of user scripts.',
      'Priority-aware job scheduler with graceful preemption when local lab workstations are reclaimed by campus students.',
      'Health heartbeat telemetry and distributed task queue monitoring node availability and hardware metrics.',
      'Cost-effective academic design turning existing computer labs into a high-throughput machine learning cluster.'
    ],
    tech: ['Distributed Systems', 'Docker', 'Python', 'gRPC / REST', 'Resource Scheduling', 'Linux'],
    github: 'https://github.com/sourav7-1'
  },
  {
    n: '05',
    title: 'Street Food Safety Platform',
    type: 'PUBLIC HEALTH / DATABASE PLATFORM',
    desc: 'A Flask and MySQL 8.0 regulatory platform for street-food vendor registration, automated inspection scoring, risk analysis procedures, and public health analytics.',
    fullDesc: 'A comprehensive regulatory and consumer platform engineered to elevate food hygiene standards in the informal street food sector. Built with Flask, Flask-SQLAlchemy, and MySQL 8.0, it features automated transactional score calculation triggers, risk level classification procedures, vendor corrective action workflows, and transparent consumer grievance handling.',
    features: [
      'Role-based authentication & authorization (RBAC) for Municipal Admins, Food Inspectors, Vendors, and Consumers.',
      'Transactional inspection workflows driven by MySQL triggers for automatic score updates and risk classification procedures.',
      'Vendor compliance profiles with stall registration, menu item tracking, and corrective action evidence uploads with SHA-256 integrity checks.',
      'Public health transparency dashboard with Chart.js analytics, vendor discovery, and public grievance resolution tracking.',
      'Engineered with normalized relational schema, Werkzeug password hashing, and reusable analytical SQL reporting queries.'
    ],
    tech: ['Flask', 'MySQL 8.0', 'SQLAlchemy', 'Flask-Login', 'Chart.js', 'Bootstrap 5', 'Python'],
    github: 'https://github.com/sourav7-1/Food-Safety-System'
  },
  {
    n: '06',
    title: 'FocusFlow',
    type: 'PRODUCTIVITY & ACADEMIC PLATFORM',
    desc: 'A full-featured Laravel 11 productivity platform bringing study session stopwatches, hierarchical task management, and multi-goal progress tracking into a single unified workspace.',
    fullDesc: 'FocusFlow is a structured student productivity and time-management web application built on Laravel 11 and MySQL. It unifies study session tracking with real-time timers, prioritised task pipelines, and long-term academic goal milestones into a single responsive dashboard, eliminating the fragmentation of juggling separate planning tools.',
    features: [
      'Live study session tracking with start/stop stopwatch controls, active logging, and cumulative focus time statistics.',
      'Task organization system with priority categorization, status workflows (pending, in-progress, completed), and deadlines.',
      'Multi-goal progress tracker linking daily study tasks and sessions directly to long-term academic milestones.',
      'Secure user onboarding featuring Google OAuth 2.0 social login, email verification, and password reset flows.',
      'Built on modern Laravel 11 framework with Eloquent ORM, Blade templating, Tailwind CSS, and Vite asset bundling.'
    ],
    tech: ['Laravel 11', 'PHP 8.2', 'Blade', 'Tailwind CSS', 'Vite', 'MySQL', 'OAuth 2.0'],
    image: focusFlowImage,
    github: 'https://github.com/sourav7-1/focusflow'
  }
];
export const capabilities = [
  ['Web Development','Full-stack apps in FastAPI, React, Flask and Laravel, from database schema to finished UI.'],
  ['AI & Computer Vision','Face detection, speech transcription and object detection with OpenCV, Faster-Whisper and YOLO.'],
  ['Geospatial / GeoAI','Sentinel-2 and Earth Engine workflows, from picking a map area to export-ready imagery.'],
  ['Databases & Backend','Normalized PostgreSQL, MySQL and SQLite schemas behind FastAPI and Flask services.']
];

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Hackathon' | 'Competition' | 'Certification';
  event: string;
  organization: string;
  date: string;
  badge: string;
  desc: string;
  proof?: string;
  proofType?: 'image' | 'pdf';
  team?: string;
  project?: string;
}

export const achievements: AchievementItem[] = [
  {
    id: 'ai-innovation-hackathon-2026',
    title: 'Final Round Selection — AI Innovation Hackathon 2026',
    category: 'Hackathon',
    event: 'AI Innovation Hackathon: From Learning to Impact',
    organization: 'Daffodil International University',
    date: '25 July 2026',
    badge: 'Finalist',
    team: 'KORPA-LOGIC',
    project: 'TerraWatch (Sentinel GeoAI Remote Sensing)',
    desc: 'Selected for the competitive Final Round as part of team KORPA-LOGIC. Built TerraWatch, an end-to-end satellite remote sensing platform that automatically queries Sentinel-1 (radar) and Sentinel-2 (optical) imagery for any user-selected region of interest to deliver automated environmental and forest health condition reports.',
    proof: hackathonCert,
    proofType: 'image'
  },
  {
    id: 'diu-ai-project-2026',
    title: 'Final Round Selection — DIU AI Project Competition 2026',
    category: 'Competition',
    event: 'DIU AI Project Competition 2026',
    organization: 'Daffodil International University',
    date: '2026',
    badge: 'Finalist',
    desc: 'Selected for the prestigious Final Round among university-wide AI submissions, recognized for technical innovation, practical problem solving, and robust machine learning project execution.',
    proof: projectCompCert,
    proofType: 'image'
  },
  {
    id: 'ncsa-laravel-cert',
    title: 'Certificate of Achievement — Web Development with Laravel',
    category: 'Certification',
    event: 'Advanced Web Engineering & Cyber Security Program',
    organization: 'National Cyber Security Agency (NCSA), Bangladesh & DIU CSE',
    date: '2025',
    badge: 'Score: 93/100',
    desc: 'Completed rigorous 7-day specialized web engineering training organized by the National Cyber Security Agency (NCSA) with the Dept. of CSE, Daffodil International University (Managed by SICL & TechOptions), achieving an outstanding score of 93 (Certificate ID: 7464).'
  },
  {
    id: 'ai-prompt-engineer-cert',
    title: 'AI+ Prompt Engineer Level 1™ Certification',
    category: 'Certification',
    event: 'Certified AI Engineering Standards',
    organization: 'AI CERTs™',
    date: '26 June 2025',
    badge: 'Certified',
    desc: 'Earned the industry-recognized AI+ Prompt Engineer Level 1™ professional credential, validating expertise in prompt design patterns, context conditioning, and generative AI workflow automation (Credential ID: 576065c59096).',
    proof: promptCert,
    proofType: 'pdf'
  }
];

