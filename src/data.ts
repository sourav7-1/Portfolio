import heroImage from '../assets/images/sourav-ghibli-transparent.png';
import aboutImage from '../assets/images/sourav-cartoon-transparent.png';
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
  resume: resumePdf, photo: aboutImage, heroImage
};
export const projects = [
  {n:'01',title:'Sentinel Map Automation',type:'GEOAI / AUTOMATION',desc:'A geospatial workflow for selecting map regions, filtering Sentinel imagery and preparing export-ready data.',tech:['Flask','Leaflet','Earth Engine','Sentinel-2'],image:satelliteImage,github:'https://github.com/sourav7-1/satellite-project'},
  {n:'02',title:'Distributed Campus AI Compute',type:'DISTRIBUTED SYSTEMS',desc:'A private architecture concept combining approved CPU and GPU resources across physical locations.',tech:['Python','Docker','Distributed Compute']},
  {n:'03',title:'VisionScribe AI',type:'VIDEO INTELLIGENCE',desc:'Video intelligence that detects faces, extracts audio and produces timestamped speech transcripts.',tech:['OpenCV','Whisper','Python','FastAPI']},
  {n:'04',title:'Street Food Safety Platform',type:'DATA / WEB PLATFORM',desc:'A structured platform for street-food inspection, complaints, scoring and corrective-action records.',tech:['Flask','MySQL','SQLAlchemy'],github:'https://github.com/sourav7-1/Food-Safety-System'},
  {n:'05',title:'ZEN Bank Tracker',type:'FINTECH TOOL',desc:'A focused personal lending and borrowing tracker with balances, transactions and controlled friend access.',tech:['Flask','SQLite','Jinja'],github:'https://github.com/sourav7-1/Bakirkhata'},
  {n:'06',title:'FocusFlow',type:'PRODUCTIVITY PLATFORM',desc:'Study sessions, tasks, goals and secure account workflows brought into one Laravel application.',tech:['Laravel','PHP','Blade','SQL'],image:focusFlowImage,github:'https://github.com/sourav7-1/focusflow'}
];
export const capabilities = [
  ['BUILD','Full-stack web applications and interactive interfaces.'],
  ['CREATE','AI, computer-vision and intelligent automation solutions.'],
  ['ANALYZE','Data, geospatial imagery and system telemetry.'],
  ['CONNECT','Compute nodes, APIs, databases and cloud services.']
];
