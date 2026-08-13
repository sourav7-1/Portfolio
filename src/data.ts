import heroImage from '../assets/images/sourav-ghibli-transparent.png';
import aboutImage from '../assets/images/sourav-cartoon-transparent.png';
import formalPhoto from '../assets/images/sourav-formal.jpg';
import resumePdf from '../assets/cv/Sourav_Kundu_Samya_CV.pdf';
import satelliteImage from '../assets/projects/satellite-monitoring.png';
import focusFlowImage from '../assets/projects/focusflow-dashboard.png';

export const profile = {
  name: 'Sourav Kundu Samya', short: 'Sourav', initials: 'SKS', role: 'AI & Full-Stack Developer',
  email: 'souravku0416@gmail.com', phone: '+8801609696788', location: 'Gournadi, Barishal, Bangladesh',
  github: 'https://github.com/sourav7-1', linkedin: 'https://www.linkedin.com/in/sourav-kundu-samya-387496367/',
  facebook: 'https://www.facebook.com/share/18ErVirbJc/?mibextid=wwXIfr',
  instagram: 'https://www.instagram.com/itzsouravitz',
  whatsapp: 'https://wa.me/8801609696788',
  resume: resumePdf, photo: aboutImage, heroImage, formalPhoto
};
export const projects = [
  {n:'01',title:'Sentinel Map Automation',type:'GEOAI / AUTOMATION',desc:'An end-to-end geospatial workflow: pick a region on an interactive map, pull and filter matching Sentinel-2 imagery through Earth Engine, and package the result as export-ready data — no manual GIS steps in between.',tech:['Flask','Leaflet','Earth Engine','Sentinel-2'],image:satelliteImage,github:'https://github.com/sourav7-1/satellite-project'},
  {n:'02',title:'Distributed Campus AI Compute',type:'DISTRIBUTED SYSTEMS',desc:'An architecture concept for pooling approved CPU and GPU resources across separate physical locations into a single usable compute layer for AI workloads.',tech:['Python','Docker','Distributed Compute']},
  {n:'03',title:'VisionScribe AI',type:'VIDEO INTELLIGENCE',desc:'A video intelligence pipeline that detects faces on-screen, extracts the audio track and turns speech into timestamped transcripts, aligning what was said with when it was said.',tech:['OpenCV','Whisper','Python','FastAPI']},
  {n:'04',title:'Street Food Safety Platform',type:'DATA / WEB PLATFORM',desc:'A structured platform for tracking street-food vendor inspections end to end — logging complaints, scoring hygiene results and recording the corrective actions that follow.',tech:['Flask','MySQL','SQLAlchemy'],github:'https://github.com/sourav7-1/Food-Safety-System'},
  {n:'05',title:'ZEN Bank Tracker',type:'FINTECH TOOL',desc:'A focused personal lending and borrowing tracker: running balances, transaction history and controlled access so a friend can only see the ledger they are part of.',tech:['Flask','SQLite','Jinja'],github:'https://github.com/sourav7-1/Bakirkhata'},
  {n:'06',title:'FocusFlow',type:'PRODUCTIVITY PLATFORM',desc:'A single Laravel application that brings study sessions, tasks, goals and secure account workflows together, so a student can plan and track their work in one place instead of several apps.',tech:['Laravel','PHP','Blade','SQL'],image:focusFlowImage,github:'https://github.com/sourav7-1/focusflow'}
];
export const capabilities = [
  ['BUILD','Full-stack web applications and interactive interfaces, from database schema to finished UI.'],
  ['CREATE','AI, computer-vision and intelligent automation solutions that turn raw data into decisions.'],
  ['ANALYZE','Data, geospatial imagery and system telemetry, structured so it is actually usable.'],
  ['CONNECT','Compute nodes, APIs, databases and cloud services into one coherent working system.']
];
