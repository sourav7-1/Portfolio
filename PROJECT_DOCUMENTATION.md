# Sourav Kundu Samya — Portfolio Documentation

## Overview

এটি HTML5, CSS3 এবং Vanilla JavaScript দিয়ে তৈরি responsive single-page personal portfolio। কোনো package manager, framework, build command, backend বা database connection প্রয়োজন হয় না।

## Project Structure

```text
sourav portfolio/
├── index.html
├── style.css
├── script.js
├── README.txt
├── PROJECT_DOCUMENTATION.md
└── assets/
    ├── cv/
    │   ├── Sourav_Kundu_Samya_CV.pdf
    │   └── images/profile.jpg
    ├── data/projects.json
    └── projects/
        ├── README.md
        ├── satellite-monitoring.jpg       (optional)
        ├── food-safety-system.jpg         (optional)
        ├── focusflow.jpg                  (optional)
        └── food-ordering-system.jpg       (optional)
```

## Technology Stack

| Technology | ব্যবহার |
|---|---|
| HTML5 | Semantic content, controls এবং accessible preview dialog |
| CSS3 | Responsive layout, glassmorphism, 3D depth এবং animations |
| Vanilla JavaScript | Project rendering, filtering, modal, typing, navigation এবং parallax |
| JSON | Project information-এর primary data source |
| PDF | Viewable এবং downloadable CV |
| hits.sh | External visitor counter |

## Main Website Sections

### Cinematic Intro

- Full-screen animated introduction।
- Profile photo, name এবং university introduction পর্যায়ক্রমে দেখায়।
- সাধারণ অবস্থায় প্রায় 6.2 seconds পরে স্বয়ংক্রিয়ভাবে বন্ধ হয়।
- Reduced-motion preference থাকলে intro দেখানো হয় না।

### Navigation

- Home, About, What I Do, Skills, Projects, Education এবং Contact link।
- Scroll position অনুযায়ী active link update হয়।
- Tablet/mobile screen-এ slide-in hamburger menu।
- Link click করলে mobile menu বন্ধ হয়।

### Hero

- Name, professional summary এবং rotating typing roles।
- Project, CV view এবং CV download actions।
- GitHub, LinkedIn এবং email links।
- Profile image-সহ layered glass device scene।
- Floating cards:
  - AI & Software Development
  - Open to Internship
  - Expected Graduation 2028

### About

- Academic পরিচয়, development interests এবং career goal।
- B.Sc. start, expected graduation এবং repository statistics।

### What I Do

- Web Development
- Database Design
- AI Project Learning

### Skills

Skillগুলো কোনো fabricated percentage ছাড়া category অনুযায়ী সাজানো:

- Programming Languages: C, Python, Java, PHP
- Frontend: HTML, CSS, JavaScript
- Backend & Framework: Laravel, PHP
- Database: MySQL, SQL, DBMS
- AI & Technical Interests: Artificial Intelligence, Machine Learning, Remote Sensing, Satellite Data
- Development Tools: Git, GitHub, MySQL Workbench

### Projects

Initial project list:

1. Automated Satellite and AI-Based Area Monitoring System
2. Food Safety System
3. FocusFlow
4. Food Ordering System
5. Digital Combination Lock
6. Student360 AI
7. ZEN Bank Tracker
8. Human Following Robot
9. DIU Hall Portal Management System

যেসব entry-এর source details পাওয়া যায়নি সেগুলোতে transparent `Details Pending` status ব্যবহার করা হয়েছে; technology, deployment বা repository link অনুমান করা হয়নি।

### Education

- B.Sc. in Computer Science and Engineering
- Daffodil International University
- 27 June 2024 — Expected 30 June 2028
- CGPA বর্তমানে placeholder।

### Contact

- Email এবং phone action।
- Facebook: `https://www.facebook.com/itzsouravitz`
- Instagram: `https://www.instagram.com/itzsouravitz`
- Visible location, email এবং phone details।
- Contact form বা server-side submission নেই।

### Footer

- Third-party visitor counter।
- Copyright notice।
- 500px-এর বেশি scroll করলে back-to-top button।

## Premium 3D Visual System

- Layered glass cards, soft elevated shadows এবং inner highlights।
- Perspective environments এবং `transform-style: preserve-3d`।
- Hero orb, profile frame, profile photo এবং floating cards আলাদা visual depth-এ।
- Fine-pointer mouse থাকলে hero scene pointer position অনুযায়ী সর্বোচ্চ subtle rotation নেয়।
- Project cards pointer position অনুযায়ী সর্বোচ্চ প্রায় 3 degree প্রতি দিকে tilt করে।
- Project hover-এ image zoom, overlay label এবং moving gradient shine।
- Touch device-এ pointer tilt ও hover-dependent overlay বন্ধ থাকে।
- Transformed element থেকে horizontal overflow প্রতিরোধ করা হয়েছে।

## Project Data System

Primary data source:

```text
assets/data/projects.json
```

Direct `file://` browsing-এ JSON fetch block হলে `script.js`-এর `fallbackProjects` array একই data দিয়ে সব card render করে। দুই জায়গার schema ও content synchronized রাখতে হবে।

Project schema-তে রয়েছে:

- `id`
- `title`
- `category`
- `secondaryCategories`
- `status`
- `featured`
- `shortDescription`
- `fullDescription`
- `features`
- `technologies`
- `previewImage`
- `visualLabel`
- `github`
- `liveDemo`

Empty GitHub বা Live Demo URL-এর button render হয় না।

## Filter and Search

Available filters:

- All
- AI
- Web
- Python
- Database
- Hardware

Filtering primary এবং secondary—দুই category-তেই match করে। Search title, descriptions, technologies, categories এবং status পরীক্ষা করে।

## Project Preview Modal

প্রতিটি card-এ Preview এবং Details button আছে। দুটো action একই large product-style preview dialog খোলে। Dialog-এ থাকে:

- Browser-style title bar এবং browser dots
- Screenshot অথবা designed fallback visual
- Title, categories এবং status
- Full description
- Major features
- Technology tags
- Verified হলে GitHub/Live Demo action
- Previous এবং Next navigation
- Close button

### Keyboard and Accessibility

- `role="dialog"` এবং `aria-modal="true"`।
- `aria-labelledby` দিয়ে visible project title যুক্ত।
- Escape key dialog বন্ধ করে।
- Backdrop click এবং close button-ও dialog বন্ধ করে।
- Tab/Shift+Tab focus dialog-এর মধ্যে trap থাকে।
- Dialog বন্ধ হলে original Preview/Details trigger-এ focus ফিরে যায়।

## Screenshot Fallback

Project visual `aspect-ratio: 16 / 10` এবং real image-এর জন্য `object-fit: cover` ব্যবহার করে। Image load না হলে image element সরিয়ে project label-সহ HTML/CSS gradient visual দেখানো হয়; broken image icon দেখা যায় না।

### Screenshot যোগ করার নিয়ম

1. Image `assets/projects/`-এ রাখুন।
2. `assets/data/projects.json`-এ path দিন:

```json
"previewImage": "assets/projects/food-safety-system.jpg"
```

3. `script.js`-এর matching fallback entry-তেও একই path রাখুন।

### GitHub বা Live Demo যোগ করার নিয়ম

শুধু verified URL ব্যবহার করুন:

```json
"github": "https://github.com/account/repository",
"liveDemo": "https://verified-domain.example"
```

Valid URL না থাকলে value empty string রাখুন।

## Verified Repository Information

### Food Safety System

- Exact repository: `https://github.com/sourav7-1/Food-Safety-System`
- Verified stack: Python, Flask, SQLAlchemy, MySQL, HTML এবং CSS।
- Repository-তে Flask application factory, MySQL configuration এবং inspection/vendor/stall/complaint/review/corrective-action relational schema রয়েছে।
- Live deployment পাওয়া যায়নি।

### FocusFlow

- Exact repository: `https://github.com/sourav7-1/focusflow`
- Verified stack: Laravel, PHP, Blade, Tailwind CSS, Alpine.js এবং Vite।
- Verified routes-এ study sessions, tasks, goals, authentication, email verification, profile এবং Google OAuth workflow রয়েছে।
- Live deployment পাওয়া যায়নি।

### Food Ordering System

- Exact repository: `https://github.com/sourav7-1/FoodOrderingSystem`
- Verified as a Java project।
- Menu display, selection, ordering এবং ordered-item display README/source structure-এ পাওয়া গেছে।
- Live deployment পাওয়া যায়নি।

## Responsive and Motion Behavior

### Desktop

- Two-column hero এবং project grid।
- Full navigation।
- Mouse-based hero parallax ও project tilt।

### Tablet (`max-width: 950px`)

- Hamburger menu এবং single-column hero।
- Single-column project/services/stats layout।
- Skill groups single-column।

### Mobile (`max-width: 600px`)

- Vertical full-width primary controls।
- Side floating cards এবং decorative hero rings hide হয়।
- Dialog spacing ও navigation mobile-friendly হয়।
- Preview/Details button সবসময় visible থাকে।

### Reduced Motion

`prefers-reduced-motion: reduce` থাকলে non-essential animations, smooth scrolling, tilt/parallax এবং cinematic intro disable হয়। Content visible থাকে।

## Running the Project

1. Project folder-এর structure অপরিবর্তিত রাখুন।
2. `index.html` browser-এ খুলুন অথবা যেকোনো static local server দিয়ে serve করুন।
3. Dependency installation বা build command প্রয়োজন নেই।

## Current Limitations

- কয়েকটি supplied project title-এর source/documentation পাওয়া যায়নি; তাই সেগুলোর details pending।
- Project screenshot files এখনো optional placeholders হিসেবে configured।
- Verified projectগুলোর live demo URL পাওয়া যায়নি।
- CGPA value এখনো placeholder।
- Visitor counter third-party service-এর availability এবং internet connection-এর ওপর নির্ভরশীল।
- Automated test বা build pipeline নেই।
