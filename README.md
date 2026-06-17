# Interactive Web-Data Monitor (AI-Augmented Development)

**Track:** [Wpisz tutaj swój wybór: Frontend / Backend / Full-Stack]

An OS-core, minimalist real-time dashboard designed to ingest, process, and visualize high-velocity remote network data streams from edge nodes. Built using a modern **React** frontend and a performant **PHP** data-stream emulation layer on the backend.

---

## 🛠️ Tech Stack & Architecture

- **Frontend:** React 18+, Vite (Fast Refresh, Optimized Bundling)
- **Backend:** PHP 8+ (Memory-efficient CLI Stream Simulation)
- **Styling:** Brutalist / OS-Core Minimalist UI (`Courier New`, high contrast, raw metrics grid)
- **Data Protocol:** Dynamic JSON Payloads (~50KB per transmission window)

---

## 🤖 AI-Augmented Engineering (Form Application Core)

### What I built / experimented with using AI
Recently, I built this full-stack Interactive Web-Data Monitor using React for the frontend and PHP for the backend to manage and display remote network data streams from edge nodes. Instead of writing everything from scratch, I used AI as an active scaffold. I prompted the LLM to generate the initial React component architecture and draft the boilerplate for the PHP data endpoints.

The real experiment, however, was in the data parsing. I had to handle dynamic, complex JSON payloads up to 50KB. I used AI to brainstorm the most memory-efficient parsing logic. It initially suggested suboptimal loops, so I had to actively push back, refine my prompts with stricter memory constraints, and iterate until we "co-authored" a highly performant solution.

### How I use AI day to day
I treat AI as my senior pair-programmer and an exploratory "thinking tool." I don't use it just to blindly generate code, but to learn and execute faster. For example:

* **Workflow Automation:** I built a custom Google Apps Script to bidirectionally sync my Todoist with Google Tasks. I used AI to rapidly explore unfamiliar API endpoints and debug webhook authentication issues without needing to watch hours of tutorials.
* **Debugging:** Whether I am troubleshooting CI/CD pipelines in GitLab, configuring Docker containers, or hunting down latency bottlenecks in Linux, I feed the error logs to the AI to quickly isolate the root cause, verify my hypotheses, and apply the fix.

> *I strongly believe in intentional prompting—providing deep context, setting constraints, and never accepting the first output if it doesn't meet my architectural standards.*

---

## How to Run Locally

### Prerequisites
- Node.js (v18+) & npm
- PHP (v8.0+) installed on your local machine

### 1. Start the Backend API
Navigate to the `backend` folder and boot up the PHP built-in development server:
```bash
cd backend
php -S localhost:8000
```
The data stream endpoint will be available at http://localhost:8000/api/stream.php.

### 2. Start the Frontend Dev Server
In a new terminal window, navigate to the root directory and install dependencies, then launch Vite:
```Bash
# In the root folder (web-data-monitor)
npm install
npm run dev
```

Open your browser and navigate to the address shown in the terminal (typically http://localhost:5173).