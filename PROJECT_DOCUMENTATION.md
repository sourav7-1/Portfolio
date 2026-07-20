# Sourav Kundu Samya — Portfolio Project Documentation

## 1. Project Overview

এটি Sourav Kundu Samya-এর একটি single-page personal portfolio website। সাইটটি CSE background, technical skills, services, featured projects, education, CV এবং contact information প্রদর্শনের জন্য তৈরি করা হয়েছে। পুরো projectটি plain HTML, CSS এবং JavaScript দিয়ে বানানো; কোনো framework, package manager, database বা build step প্রয়োজন হয় না।

### Project Type

- Static single-page portfolio website
- Apple-inspired glassmorphism user interface
- Dark theme with animated colorful aurora background
- Desktop, tablet এবং mobile responsive layout
- Hosting-ready static files

## 2. Technology Stack

| Technology | ব্যবহার |
|---|---|
| HTML5 | Website structure, content এবং semantic sections |
| CSS3 | Layout, glassmorphism design, responsiveness এবং animations |
| Vanilla JavaScript | Typing effect, mobile navigation, scroll effects এবং 3D card interaction |
| PDF | Viewable এবং downloadable CV |
| hits.sh | External visitor counter image/service |

এই project-এ কোনো npm dependency, CSS/JS framework বা external icon library নেই।

## 3. Project Structure

```text
sourav portfolio/
├── index.html
├── style.css
├── script.js
├── README.txt
├── PROJECT_DOCUMENTATION.md
└── assets/
    └── cv/
        ├── Sourav_Kundu_Samya_CV.pdf
        └── images/
            └── profile.jpg
```

### File Responsibilities

- `index.html` — সব content, sections, buttons, links এবং page structure।
- `style.css` — colors, glass effects, grid/flex layout, animations এবং responsive breakpoints।
- `script.js` — interactive behavior এবং scroll-based functionality।
- `assets/cv/Sourav_Kundu_Samya_CV.pdf` — portfolio owner-এর CV।
- `assets/cv/images/profile.jpg` — intro এবং hero profile card-এ ব্যবহৃত profile photo।
- `README.txt` — project চালানোর সংক্ষিপ্ত পুরোনো নির্দেশনা।

## 4. Website Sections

### 4.1 Cinematic Intro Screen

- Page load হওয়ার পর full-screen cinematic intro দেখা যায়।
- পর্যায়ক্রমে `Hello`, `I'm Sourav Kundu` এবং university পরিচয় দেখানো হয়।
- Profile photo animated reveal-এর মাধ্যমে আসে।
- Background zoom, text transition এবং photo animation রয়েছে।
- প্রায় 6.2 seconds পরে intro স্বয়ংক্রিয়ভাবে hide হয়।
- Hide transition শেষ হলে intro element-এর display বন্ধ হয়ে যায়।

### 4.2 Header and Navigation

Navbar-এ নিচের navigation item আছে:

1. Home
2. About
3. What I Do
4. Skills
5. Projects
6. Education
7. Contact

Navigation features:

- Section anchor ব্যবহার করে একই page-এর ভেতরে navigation।
- Scroll position অনুযায়ী active navigation link পরিবর্তন হয়।
- Tablet/mobile screen-এ hamburger menu দেখা যায়।
- Mobile menu button দিয়ে menu open/close করা যায়।
- কোনো navigation link click করলে mobile menu স্বয়ংক্রিয়ভাবে বন্ধ হয়।
- Header fixed অবস্থায় থাকে এবং glass/blur visual style ব্যবহার করে।

### 4.3 Hero / Home Section

Hero section-এ রয়েছে:

- Portfolio owner-এর full name এবং short professional introduction।
- Animated typing text যেখানে পর্যায়ক্রমে দেখায়:
  - CSE Student
  - Programmer
  - Aspiring Software Developer
  - AI Enthusiast
  - Problem Solver
- CSE undergraduate, repository count এবং expected graduation highlight।
- `Explore Projects` button—Projects section-এ নিয়ে যায়।
- `View CV` button—নতুন tab-এ PDF CV খোলে।
- `Download CV` button—CV download করে।
- GitHub, LinkedIn এবং email link।

Hero visual-এর মধ্যে রয়েছে:

- Floating glass device/window mockup।
- Animated multicolor orb।
- Profile photo, name, title এবং metadata badges।
- AI Project, Learning এবং Goal সম্পর্কিত তিনটি floating information card।
- Device float এবং card float animation।

### 4.4 About Section

- CSE undergraduate হিসেবে সংক্ষিপ্ত পরিচয়।
- Programming, problem solving, web development, database এবং AI interest-এর বিবরণ।
- Real-world project এবং continuous learning goal।
- তিনটি statistics card:
  - B.Sc. started: 2024
  - Expected graduation: 2028
  - GitHub repositories: 9+

### 4.5 What I Do / Services Section

তিনটি service/focus area প্রদর্শিত হয়েছে:

1. **Web Development** — HTML, CSS, JavaScript, PHP এবং Laravel দিয়ে responsive frontend ও backend শেখা/তৈরি করা।
2. **Database Design** — database structure, SQL query, MySQL এবং DBMS concepts।
3. **AI Project Learning** — environmental ও tree monitoring-এর জন্য AI এবং satellite-data workflow নিয়ে কাজ।

প্রতিটি service একটি glass card-এ দেখানো হয় এবং hover করলে card উপরে উঠে আসে।

### 4.6 Technical Skills Section

বর্তমানে প্রদর্শিত skillগুলো:

- C
- C++
- Python
- Java
- PHP
- HTML
- CSS
- JavaScript
- Laravel
- MySQL
- Git
- GitHub
- VS Code
- AI
- DBMS

Skillগুলো pill/chip style-এ দেখানো হয় এবং hover lift/scale effect রয়েছে।

### 4.7 Featured Projects Section

#### Project 1: Automated Satellite & AI-Based Area Monitoring System

- Category: AI / Remote Sensing
- উদ্দেশ্য: Map থেকে region of interest নির্বাচন করে satellite data ও ML process-এর মাধ্যমে environmental এবং tree monitoring।
- Technologies/tags: Python, ML, Satellite Data
- বর্তমানে এই card-এ external code link নেই।

#### Project 2: FocusFlow

- Category: Web Development
- উদ্দেশ্য: Laravel backend workflow এবং framework-based web development practice।
- Technologies/tags: Laravel, PHP, MySQL
- GitHub repository link সংযুক্ত আছে।

#### Project 3: Virtual Mouse

- Category: Automation
- উদ্দেশ্য: Python-এর মাধ্যমে virtual mouse interaction এবং computer automation practice।
- Technologies/tags: Python, Automation
- GitHub profile link সংযুক্ত আছে।

#### Project 4: Food Ordering System

- Category: Full Stack Practice
- উদ্দেশ্য: Frontend, backend এবং database-সহ web-based food ordering practice project।
- Technologies/tags: HTML, CSS, PHP, MySQL
- GitHub profile link সংযুক্ত আছে।

সব project card-এ:

- Gradient project banner রয়েছে।
- Mouse movement অনুযায়ী perspective-based 3D tilt effect কাজ করে।
- Mouse card থেকে সরালে transform reset হয়।
- Normal hover-এ card lift effect রয়েছে।
- Desktop-এ two-column এবং smaller screen-এ one-column layout হয়।

### 4.8 Education Section

- Degree: Bachelor of Science in Computer Science and Engineering
- Institution: Daffodil International University
- Duration: 27 June 2024 — Expected 30 June 2028
- CGPA field placeholder অবস্থায় আছে (`__________`); এখনো actual value দেওয়া হয়নি।

### 4.9 Contact Section

- Collaboration, internship এবং software development opportunity-এর জন্য call-to-action।
- `Send Email` button—default email client খোলে।
- `Call Me` button—supported device-এ phone dialer খোলে।
- Location, email address এবং phone number visible contact details হিসেবে দেখানো হয়।
- এই section-এ কোনো contact form বা server-side message submission নেই।

### 4.10 Footer

- hits.sh-এর মাধ্যমে external visitor counter দেখানো হয়।
- Counter image lazy loading ব্যবহার করে।
- Copyright text: `© 2026 Sourav Kundu Samya. All Rights Reserved.`

### 4.11 Back-to-Top Button

- Page 500px-এর বেশি scroll করলে fixed round button দেখা যায়।
- Button click করলে smooth behavior-এ page-এর top-এ ফিরে যায়।

## 5. JavaScript Features

### Cinematic Intro Control

- Window load event-এর পরে timer শুরু হয়।
- `hideIntro()` duplicate call প্রতিরোধ করে।
- CSS hide animation শেষ হওয়ার জন্য 1.2 seconds অপেক্ষা করে element সরানো হয়।

### Mobile Menu

- Hamburger button click-এ `.show` class toggle হয়।
- Navigation link click-এ menu close হয়।
- Required DOM element না থাকলে code error এড়ানোর guard condition আছে।

### Typing Animation

- পাঁচটি পরিচয়/role একটির পর একটি type এবং delete হয়।
- Typing speed, deleting speed এবং completed word pause আলাদা।
- শেষ word-এর পরে আবার প্রথম word থেকে loop শুরু হয়।
- Blinking cursor CSS animation দিয়ে তৈরি।

### Scroll Reveal

- `IntersectionObserver` ব্যবহার করা হয়েছে।
- Viewport-এর প্রায় 15% threshold-এ element visible animation পায়।
- `.reveal` element-এ `.show` class যোগ করে fade, upward movement এবং scale transition চালানো হয়।

### Active Navigation State

- Scroll event-এর সময় সব section-এর position পরীক্ষা করা হয়।
- বর্তমান visible section-এর matching navigation link-এ `.active` class যোগ হয়।

### Project Card 3D Tilt

- Mouse position card-এর center-এর তুলনায় হিসাব করা হয়।
- `perspective`, `rotateX`, `rotateY` এবং `translateY` দিয়ে 3D hover তৈরি হয়।
- Rotation সর্বোচ্চ আনুমানিক 4 degree range-এ রাখা হয়েছে।

## 6. UI and Visual Design Features

- Dark navy base theme।
- Blue, cyan, purple এবং pink accent colors।
- CSS custom properties দিয়ে reusable colors, border, glass background এবং shadow সংজ্ঞায়িত।
- Glassmorphism cards with transparency and `backdrop-filter: blur(...)`।
- Animated aurora blobs/background effects।
- Gradient heading/text accents।
- Rounded buttons, cards, badges এবং skill chips।
- Floating device mockup and animated orb।
- Card hover lift, button hover এবং skill hover transitions।
- Cinematic zoom, text reveal, photo reveal, floating, rotation এবং cursor blink keyframe animations।
- System font stack ব্যবহার করায় আলাদা web font download প্রয়োজন নেই।

## 7. Responsive Design

### Desktop

- Hero two-column layout।
- Services three-column layout।
- Projects two-column layout।
- Stats three-column layout।
- Full horizontal navigation menu।

### Tablet (`max-width: 950px`)

- Hamburger navigation সক্রিয় হয়।
- Navigation একটি slide-in floating panel হয়।
- Hero single-column হয়।
- Services, projects এবং stats single-column হয়।
- Hero visual centered এবং width-limited থাকে।

### Mobile (`max-width: 600px`)

- Section spacing কমে যায়।
- Hero এবং contact buttons full-width vertical layout নেয়।
- Hero highlights single-column হয়।
- Side floating cards hide হয় যাতে overflow/clutter না হয়।
- Device mockup, profile card, avatar এবং intro photo ছোট হয়।
- About, education এবং contact card-এর padding কমে যায়।

## 8. External Links and Integrations

- GitHub profile: `https://github.com/sourav7-1`
- FocusFlow repository: `https://github.com/sourav7-1/focusflow`
- LinkedIn profile link
- Email link through `mailto:`
- Phone link through `tel:`
- Visitor counter through `https://hits.sh/...`

External website links নতুন tab-এ খোলে এবং যেখানে প্রযোজ্য সেখানে `rel="noopener noreferrer"` ব্যবহার করা হয়েছে। Visitor count দেখাতে internet connection প্রয়োজন।

## 9. How to Run

### সরাসরি browser-এ

1. Project folder খুলুন।
2. `index.html` browser-এ open করুন।

### VS Code Live Server দিয়ে

1. VS Code-এ project folder open করুন।
2. Live Server extension install/enable করুন।
3. `index.html` থেকে **Open with Live Server** নির্বাচন করুন।

কোনো dependency installation বা build command প্রয়োজন নেই। CV এবং profile image-এর path পরিবর্তন করলে HTML-এর corresponding path-ও update করতে হবে।

## 10. Current Limitations / Incomplete Items

- Education section-এর CGPA এখনো placeholder।
- AI monitoring project card-এ live demo বা source-code link নেই।
- Virtual Mouse এবং Food Ordering System card নির্দিষ্ট repository-এর বদলে সাধারণ GitHub profile-এ link করে।
- Contact form নেই; শুধু email এবং phone action আছে।
- কোনো backend, database connection, admin panel বা CMS নেই।
- কোনো automated test, linting setup বা build pipeline নেই।
- SEO-এর জন্য title এবং description আছে, তবে Open Graph, social preview image, favicon এবং structured data নেই।
- Intro skip button নেই; user-কে automatic timeout পর্যন্ত অপেক্ষা করতে হয়।
- Visitor counter third-party service-এর availability-এর ওপর নির্ভরশীল।

## 11. Content Summary

Portfolio-টি মূলত একজন CSE undergraduate-এর profile showcase করে এবং নিচের বিষয়গুলোকে প্রধানভাবে তুলে ধরে:

- Software development career goal
- Web development এবং Laravel learning
- Database এবং DBMS knowledge
- Python automation
- AI ও satellite-data-based project interest
- Academic journey
- GitHub/LinkedIn presence
- Internship এবং collaboration availability

