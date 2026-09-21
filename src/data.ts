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
  {n:'03',title:'VisionScribe AI',type:'VIDEO INTELLIGENCE',desc:'A privacy-conscious local dashboard for authorized video analysis: it detects face presence with SCRFD and transcribes Bengali, English or mixed speech with Faster-Whisper into searchable, timestamped transcripts with TXT, JSON and SRT export.',tech:['FastAPI','SCRFD','Faster-Whisper','SQLite'],github:'https://github.com/sourav7-1/VisionScribe-AI'},
  {n:'04',title:'Street Food Safety Platform',type:'DATA / WEB PLATFORM',desc:'A structured platform for tracking street-food vendor inspections end to end — logging complaints, scoring hygiene results and recording the corrective actions that follow.',tech:['Flask','MySQL','SQLAlchemy'],github:'https://github.com/sourav7-1/Food-Safety-System'},
  {n:'05',title:'ZEN Bank Tracker',type:'FINTECH TOOL',desc:'A focused personal lending and borrowing tracker: running balances, transaction history and controlled access so a friend can only see the ledger they are part of.',tech:['Flask','SQLite','Jinja'],github:'https://github.com/sourav7-1/Bakirkhata'},
  {n:'06',title:'FocusFlow',type:'PRODUCTIVITY PLATFORM',desc:'A single Laravel application that brings study sessions, tasks, goals and secure account workflows together, so a student can plan and track their work in one place instead of several apps.',tech:['Laravel','PHP','Blade','SQL'],image:focusFlowImage,github:'https://github.com/sourav7-1/focusflow'},
  {n:'07',title:'Study Motivation',type:'COMPUTER VISION',desc:'A camera-based study aid that spots mobile-phone use and plays an alert straight away to keep you focused. It runs on a desktop webcam with OpenCV and YOLOv3-tiny, or in a phone browser with TensorFlow.js as an installable web app.',tech:['Python','OpenCV','YOLOv3-tiny','TensorFlow.js'],github:'https://github.com/sourav7-1/Python-mini-project'}
];
export const capabilities = [
  ['Web Development','Full-stack apps in Flask, Laravel and React, from database schema to finished UI.'],
  ['AI & Computer Vision','Face detection, speech transcription and object detection with OpenCV, Faster-Whisper and YOLO.'],
  ['Geospatial / GeoAI','Sentinel-2 and Earth Engine workflows, from picking a map area to export-ready imagery.'],
  ['Databases & Backend','Normalized MySQL and SQLite schemas behind Flask and FastAPI services.']
];
