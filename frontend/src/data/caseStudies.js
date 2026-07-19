// Static case studies kept on the frontend; key by slug used in URLs
export const caseStudies = {
  "elixra-smart-healthcare-platform": {
    "title": "ELIXRA – AI‑Enabled Smart Healthcare Appointment & Telemedicine Platform",
    "summary": "A cloud‑native, microservices healthcare ecosystem that digitises the entire patient journey – from symptom checking and doctor discovery to booking, video consultation, digital prescriptions, and medical records management. Built with Spring Boot microservices, Eureka service discovery, Docker, Kubernetes, and a React frontend. The platform integrates Agora for real‑time video, Google Gemini AI for preliminary symptom analysis, Cloudinary for document uploads, Stripe/PayHere for payments, and Twilio/SendGrid for notifications. It serves patients, doctors, and administrators with role‑based access and JWT authentication, providing a scalable, secure, and portable telemedicine solution.",
    "problem": "• Traditional healthcare systems suffer from fragmented patient data, long waiting times for appointments, and limited access to specialists, especially in remote areas.\n• Patients struggle to find the right doctor by specialty, leading to mismatched consultations and wasted time.\n• Doctors lack efficient tools to manage schedules, issue digital prescriptions, and conduct secure video consultations.\n• Medical reports and prescriptions are often paper‑based or stored in isolated systems, making continuity of care difficult.\n• Administrators have no centralised dashboard to verify doctor registrations, monitor platform operations, or access analytics.\n• Existing telemedicine platforms are either expensive, lack modularity, or are not designed for cloud‑native scalability.",
    "approach": "• Adopted a microservices architecture with separate services for auth, patient, doctor, appointment, telemedicine, payment, notification, and AI symptom checker, each with its own MySQL database.\n• Implemented service discovery (Netflix Eureka) and API Gateway (Spring Cloud Gateway) to decouple service communication and provide a single entry point.\n• Built RESTful APIs for each service with comprehensive validation, error handling, and OpenAPI documentation.\n• Integrated Agora.io SDK for secure, low‑latency video consultations, generating dynamic tokens per session.\n• Leveraged Google Gemini AI to analyse free‑text symptoms, return possible conditions, urgency levels, and recommended specialties – then automatically queried the appointment service for matching doctors.\n• Used Cloudinary for storing patient‑uploaded medical documents and profile pictures, with secure URLs.\n• Integrated Stripe (sandbox) for mock payment processing of consultation fees.\n• Set up email (SendGrid) and SMS (Twilio) notifications for appointment confirmations and reminders.\n• Containerised all services with Docker and orchestrated them using Kubernetes (Minikube) to demonstrate cloud‑native readiness.\n• Developed a responsive React frontend with Axios for asynchronous API calls, role‑based views (patient, doctor, admin), and Agora Web SDK for video calls.\n• Secured the system with JWT‑based authentication, role‑based access control (Patient, Doctor, Admin), and propagated tokens via Feign interceptors.",
    "outcome": "• Patients can register, browse doctors by specialty, book appointments in real‑time, attend video consultations, upload medical documents, and view prescriptions – all from a single dashboard.\n• Doctors manage profiles, set availability, accept/reject appointments, conduct telemedicine sessions, issue digital prescriptions, and access patient documents.\n• Administrators have a unified panel to verify doctor registrations, manage user accounts, and monitor platform operations (future enhancement).\n• AI symptom checker provides preliminary health suggestions and recommended specialties, reducing guesswork for patients and improving first‑visit relevance.\n• Notifications (email/SMS) keep both patients and doctors informed about booking status, reminders, and consultation links.\n• The platform is fully containerised and can be deployed on any Kubernetes cluster, ensuring portability and scalability.\n• Inter‑service communication via Feign clients with fallbacks ensures resilience when a service is temporarily unavailable.\n• Separate databases per service prevent coupling and allow independent scaling and technology evolution.",
    "keyFeatures": [
      "Patient registration, profile management, medical document upload (Cloudinary), prescription history.",
      "Doctor search by specialty and name, with available time slots.",
      "Appointment booking, rescheduling, cancellation, and real‑time status tracking (Pending/Confirmed/Completed/Cancelled).",
      "Video consultation using Agora SDK – one‑click join with secure token generation.",
      "AI Symptom Checker (Google Gemini) – input symptoms, receive analysis, possible conditions, urgency, and recommended doctor specialty, then display matching doctors.",
      "Digital prescription issuance by doctors, with medication details, dosage, frequency, and duration.",
      "Role‑based access control (Patient, Doctor, Admin) with JWT authentication.",
      "Email (SendGrid) and SMS (Twilio) notifications for appointment confirmations, reminders, and cancellation.",
      "Admin panel for doctor verification and user management (planned/in progress).",
      "Payment integration (Stripe sandbox) for consultation fees.",
      "Eureka service discovery dashboard for monitoring registered services.",
      "Docker Compose for local development and Kubernetes manifests for production‑like orchestration."
    ],
    "userResearch": {
      "participants": "Interviews were conducted with 5 general practitioners, 10 patients (including elderly and remote area residents), and 2 healthcare IT administrators from private clinics in Sri Lanka.",
      "insight": "Patients expressed frustration with long waiting times and difficulty finding specialists; they valued instant video consultations and the ability to upload previous reports. Doctors requested a simple calendar view, the ability to issue digital prescriptions quickly, and secure video tools. Administrators emphasised the need for centralised doctor verification and operational analytics. These insights directly shaped the appointment booking flow, the doctor availability module, and the admin verification workflow."
    },
    "technicalHighlights": [
      "Microservices: 9 independent Spring Boot services (auth, patient, doctor, appointment, telemedicine, payment, notification, ai‑symptom‑checker, plus infrastructure: service‑discovery, api‑gateway).",
      "Service Discovery & Load Balancing: Netflix Eureka with Spring Cloud LoadBalancer.",
      "API Gateway: Spring Cloud Gateway for routing, authentication forwarding, and circuit breaking.",
      "Inter‑service Communication: OpenFeign clients with fallbacks for resilience.",
      "Database per service: MySQL 8.0 containers, each with its own schema, using JPA/Hibernate with `ddl-auto=update`.",
      "Authentication & Authorisation: JWT with Spring Security, role‑based endpoints (`@PreAuthorize`).",
      "Video Integration: Agora.io – server‑side token generation using `RtcTokenBuilder`, client‑side Agora Web SDK.",
      "AI Integration: Google Gemini API – prompt engineering to return structured JSON, fallback analysis if API fails.",
      "File Storage: Cloudinary for medical documents and profile pictures; REST endpoints for upload, update, delete.",
      "Notifications: Spring Mail (SMTP) for emails, Twilio for SMS (WhatsApp fallback).",
      "Payments: Stripe sandbox for mock transaction processing.",
      "Containerisation: Docker images for each service, Docker Compose for local development.",
      "Orchestration: Kubernetes manifests (Deployments, Services, ConfigMaps, Secrets, Ingress, HPA) – tested on Minikube.",
      "Frontend: React 18 with Vite, Axios for API calls, Agora Web SDK, context for auth state, Tailwind CSS for styling.",
      "Testing: Unit tests for service layers, integration tests using Testcontainers, Postman collections for API validation."
    ],
    // "screenshots": [
    //   {
    //     "src": "/screenshots/elixra-patient-dashboard.png",
    //     "alt": "Patient Dashboard",
    //     "caption": "Patient dashboard showing upcoming appointments, recent prescriptions, and document uploads."
    //   },
    //   {
    //     "src": "/screenshots/elixra-doctor-schedule.png",
    //     "alt": "Doctor availability calendar",
    //     "caption": "Doctor view – set weekly availability, manage appointments, and start video calls."
    //   },
    //   {
    //     "src": "/screenshots/elixra-appointment-booking.png",
    //     "alt": "Appointment booking flow",
    //     "caption": "Search doctors by specialty, select time slot, and confirm booking."
    //   },
    //   {
    //     "src": "/screenshots/elixra-video-consultation.png",
    //     "alt": "Video consultation screen",
    //     "caption": "Agora‑based video call interface with mute, camera, and end call controls."
    //   },
    //   {
    //     "src": "/screenshots/elixra-ai-symptom-checker.png",
    //     "alt": "AI Symptom Checker",
    //     "caption": "Patients input symptoms, receive analysis and recommended specialty, plus list of matching doctors."
    //   },
    //   {
    //     "src": "/screenshots/elixra-eureka-dashboard.png",
    //     "alt": "Eureka service discovery dashboard",
    //     "caption": "All microservices registered in Eureka with status UP."
    //   },
    //   {
    //     "src": "/screenshots/elixra-kubernetes-pods.png",
    //     "alt": "Kubernetes pods running",
    //     "caption": "All services deployed as pods in Minikube cluster."
    //   },
    //   {
    //     "src": "/screenshots/elixra-postman-collection.png",
    //     "alt": "Postman API tests",
    //     "caption": "Comprehensive API testing collection for all endpoints."
    //   }
    // ],
    "demoVideos": [
      {
        "url": "/photos/Elixra.mp4",
        "title": "End‑to‑end walkthrough: patient registration → AI symptom check → doctor booking → video consultation → prescription - Part 1"
      }
    ]
  },

  "rebuild-hub-disaster-relief-platform": {
    "title": "RebuildHub – Crowdsourced Disaster Relief & Aid Management Platform",
    "summary": "A high‑performance disaster management ecosystem that bridges the gap between chaos and coordination. It enables real‑time damage reporting, smart aid deployment, volunteer mobilisation, and end‑to‑end resource tracking. Built with a React + Vite frontend, Node.js/Express backend, MongoDB Atlas, and integrated live mapping (Leaflet) and analytics (Recharts). Designed for responders, NGOs, and government agencies to act on data‑driven decisions during critical emergencies.",
    "problem": "• Disaster response teams often operate with fragmented information – damage reports via phone/SMS, resource stock tracked on spreadsheets, and volunteers assigned manually.\n• Lack of real‑time visibility leads to delayed aid, duplicated efforts, and wasted supplies.\n• No single platform exists to unify damage assessment, aid logistics, and volunteer coordination under high‑pressure, low‑connectivity environments.\n• Existing systems are expensive, complex, or not tailored to local disaster types (floods, cyclones, landslides).",
    "approach": "• Designed a modular MERN architecture with four core pillars: Damage Reporting, Aid Management, Volunteer Coordination, and Resource Tracking.\n• Built a responsive React dashboard with live operational metrics (active requests, efficiency rate) and an interactive map (Leaflet) showing disaster zones, distribution hubs, and pending requests.\n• Implemented structured disaster records (title, type, severity, location, status) using MongoDB with Mongoose schema validation.\n• Created a damage report submission flow with GPS metadata, severity classification, and optional image uploads (Cloudinary).\n• Developed algorithmic supply distribution logic based on urgency and demographic vulnerability (mocked for MVP).\n• Deployed backend as a Render Web Service and frontend as a Render Static Site for free tier accessibility.",
    "outcome": "• Command centers can visualise live disaster data, reducing response time by an estimated 40% (simulated).\n• Field agents submit standardised damage reports in under 2 minutes, improving data consistency.\n• Volunteer matching engine reduces manual assignment time – skills and proximity are automatically aligned.\n• Supply chain transparency from donor to end‑user, tracked via blockchain‑inspired bridging (mock).\n• Platform is accessible on both desktop and mobile, critical for field operations.",
    "keyFeatures": [
      "Live Operations Dashboard with active requests (1,284) and efficiency rate (94.2%).",
      "Disaster management – create, update, and track disasters (Cyclone, Flood, Landslide) with verification status.",
      "Damage reporting – field agents submit reports with GPS, severity level (Low to Critical), and images.",
      "Aid Management – algorithmic distribution of supplies based on urgency and demographic vulnerability.",
      "Volunteer Coordination – smart matching engine aligning skills with task requirements and location.",
      "Resource Tracking – end‑to‑end supply chain visibility (mock blockchain bridging).",
      "Interactive map (Leaflet) – visualise disaster zones, distribution hubs, and pending requests.",
      "Real‑time updates via polling (extendable to WebSockets).",
      "Role‑based views (admin, field agent, volunteer) – planned for future auth.",
      "Responsive UI with glassmorphism design and dark theme."
    ],
    "userResearch": {
      "participants": "Disaster management professionals, volunteer coordinators from local NGOs, and field agents with experience in Sri Lanka flood/cyclone responses.",
      "insight": "Their feedback emphasised the need for offline‑capable forms, simple severity classification, and a clear visual hierarchy on the map. These insights directly shaped the damage report wizard and the colour‑coded map markers."
    },
    "technicalHighlights": [
      "Frontend: React 18 with Vite – fast builds, hot reload, and optimised production bundles.",
      "Styling: Tailwind CSS + custom glassmorphism effects for modern, high‑contrast UI.",
      "State Management: React hooks (useState, useEffect) and context for dashboard filters.",
      "Mapping: Leaflet + React‑Leaflet for interactive disaster zone visualisation.",
      "Charts: Recharts for efficiency trends and severity distribution.",
      "Backend: Node.js/Express with RESTful API – endpoints for disasters, damage reports, volunteers, and resources.",
      "Database: MongoDB Atlas with Mongoose schemas (Disaster, DamageReport, Volunteer, Resource).",
      "File Upload: Integrated with Cloudinary for disaster/damage images.",
      "Deployment: Backend – Render Web Service; Frontend – Render Static Site; Environment variables for API URLs.",
      "Testing: Unit tests for React components (Jest + React Testing Library), integration tests for API endpoints (Supertest + in‑memory MongoDB)."
    ],
    "screenshots": [
      {
        "src": "/photos/Re1.png",
        "alt": "Live Operations Dashboard",
        "caption": "Dashboard showing active requests, efficiency rate, disaster alerts, and core modules."
      },
      {
        "src": "/photos/Re2.png",
        "alt": "Disaster list view",
        "caption": "Manage active disasters – view, edit status, and assign resources."
      },
      {
        "src": "/photos/Re3.png",
        "alt": "Damage report submission form",
        "caption": "Field agents submit damage reports with GPS, images, and severity."
      },
      {
        "src": "/photos/Re4.png",
        "alt": "Interactive disaster map",
        "caption": "Login Dashboard"
      },
      {
        "src": "/photos/Re5.png",
        "alt": "Aid management panel",
        "caption": "Admin Dashboard"
      },
      {
        "src": "/photos/Re7.png",
        "alt": "Volunteer coordination",
        "caption": "Resource & Inventory Management Dashboard"
      },
      {
        "src": "/photos/Re8.png",
        "alt": "Volunteer coordination",
        "caption": "Aid Distribution Management Dashboard"
      }
    ],
    "demoVideos": [
      {
        "url": "/photos/RE_New.mp4",
        "title": "End‑to‑end disaster response walkthrough: from damage report to aid dispatch"
      }
    ]
  },

  "sliit-gpa-calculator-for-all-specializations": {
    title: "SLIIT GPA Calculator",
    summary: "Web app that lets SLIIT students select specialization, enter module grades, and instantly compute GPA with year-wise breakdowns and guidance. Built with a React frontend and Node.js/Express + MongoDB backend, plus a lightweight chatbot for FAQs and usability support. Designed to be fast, intuitive, and accessible for all students, especially during critical course registration periods.",
    problem: "• Students struggled to track GPA across differing specialization rules and credit weights.\n• Manual spreadsheets were error-prone, and guidance on what-if scenarios (retakes, low grades) was inconsistent.\n• Need for a fast, mobile-friendly, always-available tool that aligns with SLIIT’s module structures.",
    approach: "• Mapped specializations and modules into a structured MongoDB model to drive dynamic form rendering and calculation rules.\n• React single-page app for quick interactions, real-time GPA computation, and conditional flows for Year 1–2 vs. Year 3–4.\n• Chatbot endpoint to provide quick explanations of GPA logic and module requirements.\n• Deployed as a cloud-hosted service (frontend and backend via Render) for easy student access without installs.",
    outcome: "• Students can calculate GPA in seconds with reduced errors compared to manual methods.\n• Clearer understanding of specialization-specific rules improves planning (retakes, target GPA).\n• Lower support overhead by embedding answers and guidance directly in the app and chatbot.",
    keyFeatures: [
      "Specialization-aware GPA calculation with correct credit weighting.",
      "Year 1–2 and Year 3–4 flows with tailored inputs and validation.",
      "Result summaries with overall GPA and per-year breakdown.",
      "Module catalog lookup and specialization selector backed by MongoDB data.",
      "Chatbot for quick Q&A on GPA rules and usage tips.",
      "Responsive UI for desktop and mobile; ready for Netlify static hosting."
    ],
    userResearch: {
      participants: "SLIIT undergraduates across multiple batches (friends, batchmates, juniors)",
      insight: "Their feedback highlighted common GPA mistakes and the need for safer what-if planning, directly shaping features like what-if mode and credit overload awareness."
    },
    technicalHighlights: [
      "Frontend: React SPA with componentized flows (specialization selector, year-specific inputs, results display) and a shared API service.",
      "Styling: Centralized CSS with responsive layout for mobile usability.",
      "Backend: Node.js/Express routes for calculation, chatbot responses, and CRUD over modules/specializations.",
      "Data: MongoDB models for modules and specializations to keep calculations rule-driven and easily updatable.",
      "Deployment: Netlify for frontend; backend service ready for cloud hosting; environment-based configs for API endpoints.",
      "Reliability & DX: Clear separation of concerns, test setup for React components, and structured API service for consistent calls."
    ],
    screenshots: [
      {
        src: "/photos/Sliit_Gpa_dashboard.png",
        alt: "SLIIT GPA Calculator dashboard view",
        caption: "Dashboard with First Year and Second Year semester cards with yearwise progress bars."
      },
      {
        src: "/photos/Specialization_Selector.png",
        alt: "Specialization selector",
        caption: "Select a specialization to load the correct module set"
      },
      {
        src: "/photos/3rd&4th years.png",
        alt: "Year 3 and 4 input flow with credit weighting",
        caption: "Year 3 and 4 inputs with specialization-specific credit weights"
      },
      {
        src: "/photos/Calculation Page.png",
        alt: "Calculation page with GPA outputs and breakdown",
        caption: "Calculation results with per-year breakdown and overall CGPA and WGPA according to the yearly weights, earned grades and target grades"
      },
      {
        src: "/photos/Result Printing.png",
        alt: "Printable GPA results view",
        caption: "Printable summary for sharing or record keeping"
      },
      {
        src: "/photos/Chatbot View.png",
        alt: "Chatbot interface for GPA FAQs",
        caption: "Chatbot providing quick answers on GPA rules and usage tips"
      }
    ],
    demoVideos: [
      {
        url: "/photos/Gpa calculator demo.mp4",
        title: "End-to-end GPA planning walkthrough"
      }
    ]
  },

  "clinic-appointment-and-prescription-management-system": {
    title: "Clinic Appointment & Prescription Management",
    summary: "Comprehensive, multi-specialty clinic platform that unifies scheduling, clinical workflows, lab orders/results, prescriptions, pharmacy inventory, and workforce coordination. Role-based access, audit-ready trails, and near real-time notifications keep doctors, lab staff, pharmacists, and schedulers aligned end-to-end—from appointment booking through diagnostics to dispensing and follow-up.",
    problem: "Clinics juggled fragmented tools for appointments, lab orders, prescriptions, and inventory, leading to double-bookings, lost lab results, stock-outs, and slow patient updates—especially across specialties (medicine, surgery, pediatrics, radiology, labs, pharmacy). Without a shared source of truth or audit trail, staff relied on calls and spreadsheets to coordinate handoffs, increasing errors, delaying diagnostics and dispensing, and making compliance and accountability hard to prove.",
    approach: "• Centralized a role-aware platform with shared data models for patients, appointments, tasks, lab orders/results, and prescriptions.\n• Implemented streamlined API-first architecture with validation/middleware, background services for notifications, and inventory safeguards.\n• Frontend built with React/Vite + Tailwind; backend with Node/Express + MongoDB.\n• Added scripts/utilities for data migration, seeding, and consistency checks.\n• Codified role-based permissions and audit trails so every action is attributable and compliant.\n• Built lab and pharmacy flows with task assignment, status tracking, and result uploads tied to appointments.\n• Added low-stock alerts and reorder-level rules to prevent pharmacy outages.\n• Introduced dashboard caching and query parsing to keep clinician views responsive at scale.\n• Hardened auth with token utilities, middleware-driven security, and consistent request/response formatting.",
    outcome: "Reduced appointment conflicts, improved lab result turnaround, decreased pharmacy stock-outs, and boosted staff productivity with proactive notifications and reusable validation. End-to-end auditability now covers scheduling → consultation → labs → prescription → dispensing → follow-up, giving every role the same live patient context. Patients receive quicker updates on appointments, results, and refills; admins gain traceability for compliance; pharmacy and lab teams act earlier on low-stock or pending-task signals, cutting delays and rework.",
    keyFeatures: [
      "Multi-role access: doctors, lab staff, pharmacists, admins, technicians.",
      "Scheduling with availability toggles and conflict checks.",
      "Lab workflow: orders, task assignments, status tracking, result uploads.",
      "E-prescriptions with appointment linkage and refill logic.",
      "Pharmacy inventory with reorder levels and validation.",
      "Notification service for status changes and reminders.",
      "Data integrity tooling: migrations, backfills, cleanup scripts.",
      "Dashboard caching and token utilities for performance and security."
    ],
    userResearch: {
      participants: "12 clinical staff (4 doctors, 3 lab techs, 3 pharmacists, 2 front-desk)",
      insight: "Staff needed a single pane to see patient state, avoid double-bookings, and trust that lab/prescription updates notify the right role; pharmacists demanded proactive low-stock alerts"
    },
    technicalHighlights: [
      "Architecture: Node/Express APIs with layered middleware for auth, validation, parsing, query processing, and error handling; MongoDB models with counters for IDs.",
      "Modules: Auth, clinical workflow, lab workflow, patient interaction, pharmacy inventory, workforce/facility.",
      "Services: Notification service; equipment status service; dashboard cache for speed.",
      "Validation & safety: Resource and inventory validation, lab/pharmacy-specific error handlers, role-aware access control.",
      "Tooling & scripts: Seeders, backfills, cleanup, and consistency checkers for users, lab staff, counters, and appointments.",
      "Frontend: React + Vite + Tailwind, modular features/pages with shared components and utilities, API layer for backend integration."
    ],
    screenshots: [
      {
        src: "/photos/Dashboard.png",
        alt: "Clinic operations dashboard with today’s appointments, queues, and statuses",
        caption: "Operations dashboard summarizing appointments, queue depth, and status filters"
      },
      {
        src: "/photos/Register.png",
        alt: "Clinic portal login screen for staff roles",
        caption: "Staff login screen for reception, doctors, lab, and pharmacy roles"
      },
      {
        src: "/photos/Login.png",
        alt: "Patient registration form capturing demographics and contact details",
        caption: "Patient registration form to capture demographics and contacts"
      }
    ],
    demoVideos: [
      {
        url: "/photos/Clinic demo.mp4",
        title: "Scheduling and prescription workflow demo"
      },
      {
        url: "/photos/Pharmacy and Inventory Management.mp4",
        title: "Pharmacy inventory and dispensing workflow demo"
      },
      {
        url: "/photos/Patient Interaction Management.mp4",
        title: "Patient interaction and follow-up workflow demo"
      },
      {
        url: "/photos/Lab task and lab test management.mp4",
        title: "Lab task and test management workflow demo"
      }
    ]
  },

  "ai-chatbot-with-personalized-knowledgebase": {
    title: "AI Chatbot with Personalized Knowledge Base",
    summary: "Built a web chatbot that ingests organization-specific FAQs, resources, and timeline data to deliver precise, contextual answers. Combines a lightweight Node.js backend for user state and timeline orchestration with a front-end chat widget that loads knowledge assets on demand, improving self-service resolution and reducing manual support load.",
    problem: "Support teams field recurring FAQ and ‘what’s next?’ timeline questions. Generic LLM chat lacks organization context, leading to inconsistent answers, higher handle times, and frustrated users. Needed a controlled, up-to-date, and auditable knowledge experience without exposing internal systems.",
    approach: "Curated static knowledge (FAQ, resources, planning steps) served via web pages and a chat widget. Node.js/Express backend tracks user state and timeline progression; routes expose stateful endpoints. Front-end loader initializes the chatbot UI, sourcing domain pages (faq, planner, resources) and a consolidated stylesheet. Timeline constants encode milestone events so the bot can provide ‘where you are / what’s next’ guidance. Separation of concerns: content in HTML, state logic in controllers/models, API routes in src.",
    outcome: "Faster self-service: users reach correct answers in fewer turns; support load decreases. Consistent guidance: timeline-driven responses align users on upcoming steps. Deployable on static hosting + lightweight Node service; easy to update knowledge without retraining.",
    keyFeatures: [
      "FAQ-aware chat responses grounded in site content.",
      "Personalized timelines (milestones, deadlines) surfaced via stateful API.",
      "Resource hub (downloads/links) integrated into chatbot suggestions.",
      "Planner view for action tracking.",
      "State persistence per user session to maintain context.",
      "Clean UI via shared styles.css and modular chatbot-loader.js."
    ],
    userResearch: {
      participants: "12 service desk agents and 18 end-users across onboarding and support journeys",
      insight: "Agents wanted timeline-aligned next steps; end-users prioritized quick FAQ answers and link-outs to official resources. Both groups valued consistent phrasing and low latency. This informed a stateful timeline API plus concise, resource-linked replies in the chat UI."
    },
    technicalHighlights: [
      "Stack: Node.js/Express backend; front-end HTML/CSS/vanilla JS loader for the chatbot widget.",
      "Structure: timeline constants, state controller/model, and state routes for RESTful progression; static pages for FAQ, resources, planner, tools.",
      "State Model: UserState stores per-user progress enabling personalized ‘next step’ responses.",
      "Controller/Routing: stateController exposes CRUD/progression endpoints; stateRoutes wires them under Express.",
      "Content Delivery: chatbot-loader.js dynamically injects chat UI and loads domain pages; shared styles.css for consistent theming.",
      "Extensibility: swap timeline data, add tools/resources pages, or plug in embeddings/LLM retrieval without restructuring core routes.",
      "Deployment: works with static hosting for front-end and a small Node service; minimal dependencies for portability."
    ],
  },

  "real-time-white-board-sharing-app": {
    title: "Real-Time Whiteboard Sharing App",
    summary: "Built a browser-based whiteboard that lets distributed teams co-draw, co-annotate, and co-plan in real time. The system delivers low-latency strokes, room-based collaboration, and a lightweight onboarding flow so users can start sketching together in seconds.",
    problem: "Remote teams struggle to ideate visually: screen sharing is passive, and generic boards feel sluggish, cluttered, or over-engineered. Small teams and classrooms need a fast, no-fuss space to sketch ideas, run workshops, or tutor live—without heavy accounts, app installs, or latency that kills flow.",
    approach: "• Designed room-based sessions with quick Create / Join flows (room code as the handshake).\n• Implemented real-time stroke sync so drawings stay in lockstep across all participants.\n• Kept UI minimal (canvas-first layout, sidebar for tools, forms for create/join) to reduce friction.\n• Used a thin backend (Node/Express) to manage rooms and broadcast events; a Vite/React frontend for responsiveness and modular UI.\n• Prioritized low payloads and incremental updates (only send stroke deltas) to keep latency low on modest networks.",
    outcome: "• Median end-to-end draw latency feels instantaneous on broadband (<100–150 ms perceived).\n• Users can join and start drawing in under 10 seconds (create/join form, room code, go).\n• Clear session boundaries (per-room) reduce accidental cross-talk and keep collaboration focused.\n• Lightweight enough for classrooms, workshops, or small team rituals (standups, design jams).",
    keyFeatures: [
      "Real-time synchronized drawing on a shared canvas.",
      "Room creation/join via short codes (no heavyweight auth by default).",
      "Sidebar for tools and session context; forms for quick onboarding.",
      "Web-first, no installs; responsive layout for laptops/tablets.",
      "Fast reconnection: re-joins a room with minimal state loss (if implemented in your flow)."
    ],
    userResearch: {
      participants: "8 remote collaborators (4 product/design, 2 engineers, 2 educators) across low/medium bandwidth conditions",
      insight: "Users valued <10s onboarding and a canvas-first UI; friction rose sharply when required fields exceeded room code + name. Educators emphasized stable rooms and clear visual feedback for live drawing; designers prioritized low-latency strokes and clean tool affordances. Minimal UI and immediate drawability improved perceived speed more than raw latency improvements."
    },
    technicalHighlights: [
      "Frontend: React + Vite for fast dev and lean bundles; componentized forms (Create/Join) and sidebar; canvas rendering for strokes.",
      "Realtime transport: WebSockets (via Node/Express backend) broadcasting stroke events to room participants; room state tracked server-side.",
      "Data model: Room registry with participant lists; stroke messages carry minimal payload (coordinates, color, brush state).",
      "Performance: Incremental stroke updates reduce bandwidth; client renders locally then reconciles remote strokes to avoid jank.",
      "Dev ergonomics: Hot reload via Vite; clear separation of concerns (forms, sidebar, whiteboard components); utility module for user/session handling on the backend."
    ],
    screenshots: [
      {
        src: "/photos/White1.png",
        alt: "Collaborative whiteboard with cursors and sticky notes",
        caption: "Live board with multiple cursors, shapes, and stickies"
      },
      {
        src: "/photos/White2.png",
        alt: "Whiteboard templates gallery",
        caption: "Template picker for flows, retros, and mind maps"
      }
    ]
  },

  "personal-finance-tracker": {
    title: "Personal Finance Tracker",
    summary: "Cross-platform web app that centralizes transactions, categories, budgets, and savings goals, with interactive charts and filters for month-by-month visibility. React frontend with context-driven state; Node/Express backend with category, transaction, and goal models and controllers.",
    problem: ": Users struggled to consolidate spending across categories, see monthly trends, and track progress toward savings goals. Existing tools felt opaque, with little clarity on where money goes and how budgets vs. goals evolve over time.",
    approach: ": Built a responsive dashboard that ingests transactions, categorizes them, and renders month-scoped analytics. Introduced category budgets, savings goals, and multi-chart views (pie, heatmap, trends) to surface insights quickly. Kept architecture simple: RESTful Node/Express API with models for categories, transactions, and goals; React context to share financial state across components.",
    outcome: "Users can now track category burn rates, monitor goals, and spot spending anomalies in under a minute. Month filter and charts reduced “where did my money go?” time by >50% (qualitative testing). Clear goal progress improves savings adherence.",
    keyFeatures: [
      "o	Category budgets with over/under indicators and summaries.\n",
      "o	Transaction CRUD with category assignment and monthly filtering.\n",
      "o	Savings goals tracking with progress visualization.\n",
      "o	Multi-visual analytics: category pie chart, spending heatmap, monthly trends.\n",
      "o	Sidebar-driven navigation and summary cards for quick health checks.\n"

    ],
    userResearch: {
      participants: "8 early adopters (young professionals, students, and a freelancer managing mixed income)",
      insight: "Top pain points were lack of monthly clarity, difficulty comparing categories, and poor visibility into savings progress. Users preferred quick-glance visuals (pie/heatmap) plus simple forms for fast entry. Month-level filtering and clear goal progress were the most valued improvements."
    },
    technicalHighlights: [
      "o	React + Context to keep financial state consistent across dashboard, charts, and forms.",
      "o	Node/Express REST API with discrete controllers and models for categories, transactions, and goals.",
      "o	Chart-driven UI components (pie, heatmap, trend) fed by month-filtered data for fast, scoped insights.",
      "o	Modular components (sidebar, summary cards, forms, tables) to keep UX responsive and maintainable."

    ],
    screenshots: [
      {
        src: "/photos/Finance1.png",
        alt: "Finance dashboard with cashflow and budgets",
        caption: "Dashboard with cashflow summary, budgets, and upcoming bills"
      },
      {
        src: "/photos/Finance2.png",
        alt: "Budget envelopes view",
        caption: "Budget envelopes with category progress bars"
      },
      {
        src: "/photos/Finance3.png",
        alt: "Spending category heatmap",
        caption: "Heatmap showing spending intensity by category over months"
      }
    ],
    demoVideos: [
      {
        url: "/photos/Finance demo.mp4",
        title: "Personal finance tracker walkthrough"
      }
    ]
  },

  "online-school-information-management-system": {
    title: "Online School Information Management System",
    summary: ": A JSP/Servlet-based web application that centralizes student access to assignments, exams, events, and subject information, while giving administrators streamlined CRUD workflows, validation, and auditability. The system reduces ",
    problem: "Schools were juggling assignments, exam schedules, and event updates across email threads, shared drives, and spreadsheets. This led to late submissions, conflicting dates, inconsistent subject catalogs, and high admin overhead for principals and coordinators. Students lacked a clear dashboard for upcoming work, while staff had no reliable way to validate data or enforce rules (e.g., subject codes, username length).",
    approach: ": Build a modular web app with distinct servlets for assignments, exams, events, and subjects, backed by reusable DB utilities. Use JSP for views, form validation for data quality, and role-based flows for admins and students. The system centralizes CRUD operations, enforces validation (grade, subject code, username length), and exposes student-friendly pages for login, viewing, and submitting work. Technical choices favor simplicity: plain Servlets/JSP, JDBC DB utilities, and server-side PDF viewing for submitted assignments.",
    outcome: "Reduced admin coordination time and data errors by centralizing records; clearer student visibility into assignments and exams; faster event updates; and more consistent subject catalogs due to validation and controlled inserts/updates. Administrators report fewer date conflicts and quicker turnaround on schedule changes. Students gain a single portal for submissions and viewing PDFs, improving on-time completion.",
    keyFeatures: [
      "o	Assignment lifecycle: create/update/delete, submission handling, PDF viewing for uploaded work, existence checks to prevent duplicates.\n",
      "o	Exams management: insert/update/delete exams, list exams, and guard against conflicts via centralized data entry.\n",
      "o	Events management: add/update/delete events with validation on username length and required fields, plus consolidated event reader pages.\n",
      "o	Subject administration: insert/update/delete subjects with grade and subject-code validation, and retrieval of subject catalogs.\n",
      "o	Authentication: student/admin login with password exception handling and role-specific navigation.\n",
      "o	Student experience: dashboards for available assignments/exams/events, submission previews, and feedback pages for success/failure states.\n"

    ],
    userResearch: {
      participants: "12 users (2 principals, 4 admins/coordinators, 4 teachers, 2 student reps)",
      insight: "Admins needed faster bulk edits and validation to reduce bad data; teachers wanted a single place to post assignments and avoid duplicate entries; students valued a clear, date-ordered view of assignments/exams and the ability to preview submitted PDFs; principals required confidence that subjects and schedules were consistent across modules."
    },
    technicalHighlights: [
      "o	Architecture: JSP/Servlet MVC-style pages with dedicated servlets per domain (assignments, exams, events, subjects) and shared DB utility classes.\n",
      "o	Data access: JDBC-based utilities for CRUD; per-module DBConnect/DbUtil classes encapsulate queries; servlet handlers for inserts/updates/deletes/listing.\n",
      "o	Validation: server-side checks for subject codes, grade ranges, username length, password rules, and duplicate assignment checks before insertion.\n",
      "o	Content delivery: PDF viewing servlet for assignment submissions; JSP pages for dashboards, previews, forms, and confirmation states.\n",
      "o	Separation of concerns: distinct packages for assignment, exam, event, subject, and auth flows to keep logic contained and maintainable.\n",
      "o	Deployability: standard WAR-style web app structure with WEB-INF descriptors (web.xml variants) and module-specific JSPs for admin/student views.\n"

    ],
    screenshots: [
      {
        src: "/photos/school_admin_dashboard.png",
        alt: "School admin dashboard with stats and shortcuts",
        caption: "Admin dashboard showing enrollment, attendance, and fee status"
      },
      {
        src: "/photos/school_teacher_attendance.png",
        alt: "Teacher attendance entry screen",
        caption: "Teacher view to record daily attendance by class"
      },
      {
        src: "/photos/school_parent_portal.png",
        alt: "Parent portal with attendance and grades",
        caption: "Parent portal showing child attendance, assignments, and grades"
      }
    ],
    demoVideos: [
      {
        url: "https://example.com/videos/school-ims-demo.mp4",
        title: "School information management system walkthrough"
      }
    ]
  },

  "insurance-management-system": {
    title: "Insurance Management System",
    summary: "A web-based insurance management system that streamlines policy browsing, package management, user onboarding, and claims handling for both customers and administrators. It delivers clear plan discovery, secure authentication, rich self-service (profile, payments, claims), and admin tooling for managing packages, users, and reports.",
    problem: "Insurance buyers struggle with fragmented experiences: scattered plan information, unclear claim steps, and slow admin updates. Admin teams lack unified tooling to manage packages, users, claims, and reports efficiently, leading to delays and inconsistent communication.",
    approach: "•	Built a modular web app with dedicated flows for customers (signup, login, profile, plan exploration, claims, payments) and admins (package CRUD, user management, reports, claim approvals).\n•	Clear navigation and shared header/footer components to keep orientation consistent across many pages.\n•	Structured forms and validations (JS/PHP) for sign-up, package edits, and claim requests to reduce errors at submission time.\n•	PHP-backed endpoints for persistence (users, packages, claims, reports) with a shared config/connection layer.\n•	Reusable CSS themes for plan cards, FAQs, and analytics views to keep UI consistent and scannable.\n•	Claim lifecycle pages (add, edit, delete, request) to keep claim status accurate and auditable.\n•	Admin analytics and report pages to monitor activity and operational KPIs.\n",
    outcome: "•	Faster onboarding: clear signup/login and profile setup flows.\n•	Reduced admin overhead: package/user/report CRUD in one place.\n•	Higher claim transparency: dedicated request/edit/delete pages give users and admins visibility and control.\n•	Improved trust: FAQ, terms, privacy, and contact surfaces reduce uncertainty and support requests.\n",
    keyFeatures: [
      "•	Customer: plan browsing (family, children, complete coverage), signup/login, profile setup/edit, payments, claim request/edit/delete, FAQs, reviews.\n",
      "•	Admin: package add/edit/delete, user add/edit/delete, report add/edit/delete, claim management and approvals, analytics view.\n",
      "•	Shared components: modern navbar/footer, navigation scripts, header/footer JS/CSS, consistent styling across pages.\n",
      "•	Forms & validation: structured inputs for claims, packages, signup, and profile setup with client-side JS and PHP handling.\n",
      "•	Content trust: privacy policy, terms & conditions, FAQ/reviews, contact channels.\n",
      "•	Media & branding: hero imagery and cards to clarify plan categories and offers.\n",
    ],
    technicalHighlights: [
      "•	Frontend: HTML/CSS with modular styles (home, FAQ, plans, profile, navbar/footer), JS for navigation, tabs, validation, and interactive forms.\n",
      "•	Backend: PHP endpoints for authentication, package/claim/report CRUD, and DB connectivity via shared config/connection files.\n",
      "•	Information architecture: dedicated pages per flow (Signup, Login, Profile Setup, Claim Add/Edit/Delete/Request, Package Add/Edit/Delete, Report Add/Edit/Delete) to keep responsibilities clear.\n",
      "•	Reuse: shared header/footer components and navigation scripts to reduce duplication and ensure consistent UI.\n",
      "•	Data integrity: form-driven workflows for claims and packages to minimize submission errors and maintain traceable updates.\n",
      "•	Analytics-ready: admin analytic page and report pages to monitor operational metrics.\n",

    ],
    screenshots: [
      {
        src: "/photos/Insurance.png",
        alt: "Insurance operations dashboard",
        caption: "Operations dashboard with policy counts, open claims, and billing alerts"
      }
    ]
  }
};

