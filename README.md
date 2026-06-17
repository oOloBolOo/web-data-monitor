

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
