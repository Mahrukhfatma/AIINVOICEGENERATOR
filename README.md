# ?? AI Invoice Generator (BrainyBills)

A modern, full-stack invoice management application powered by **Google Gemini AI**. Create, manage, and track invoices effortlessly, generate structured invoices from plain text using AI, automate reminder emails, and gain intelligent dashboard insights.

---

## ?? Features

- **?? AI-Powered Invoice Extraction**: Paste unstructured text, emails, or prompts to automatically extract line items, prices, quantities, and client details into a structured invoice using Google Gemini.
- **?? Smart Reminder Emails**: Automatically generate personalized, professional payment reminder emails for overdue or pending invoices with AI.
- **?? AI Financial Insights & Dashboard**: Real-time overview of total revenue, outstanding payments, overdue invoices, and AI-driven business summaries.
- **?? Full Invoice Lifecycle Management**: Create, view, update, delete, search, and download invoices as PDF.
- **?? Secure Authentication**: User registration and login protected with JSON Web Tokens (JWT) and salted bcrypt password hashing.
- **?? Sleek, Responsive UI**: Built with React 19, Vite, Tailwind CSS v4, Lucide icons, and modern glassmorphic cards.

---

## ??? Tech Stack

### Frontend
- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)

### Backend
- **Runtime**: [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/) ODM
- **AI Integration**: [Google Gen AI SDK (@google/genai)](https://www.npmjs.com/package/@google/genai)
- **Authentication**: [JSON Web Tokens (JWT)](https://jwt.io/) & [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- **File Upload**: [Multer](https://github.com/expressjs/multer)

---

## ?? Project Structure

``text
AIINVOICEGENERATOR/
+-- backend/
¦   +-- config/             # Database connection (MongoDB)
¦   +-- controllers/        # Route controllers (Auth, Invoices, AI)
¦   +-- middlewares/        # JWT Authentication middleware
¦   +-- models/             # Mongoose schemas (User, Invoice)
¦   +-- routes/             # Express API endpoints
¦   +-- .env.example        # Environment variable template
¦   +-- package.json        # Backend dependencies & scripts
¦   +-- server.js           # Express app entry point
+-- frontend/
¦   +-- invoice-generator/  # Vite + React client app
¦       +-- public/         # Static assets and icons
¦       +-- src/
¦       ¦   +-- assets/     # Images and illustrations
¦       ¦   +-- components/ # Reusable UI components & modals
¦       ¦   +-- context/    # Auth state provider
¦       ¦   +-- pages/      # Views (Dashboard, Invoices, Auth, Landing)
¦       ¦   +-- utils/      # API helpers, currency & PDF utilities
¦       ¦   +-- App.jsx     # Main React routes
¦       ¦   +-- main.jsx    # Client entry point
¦       +-- package.json    # Frontend dependencies & scripts
¦       +-- vite.config.js  # Vite configuration
+-- .gitignore              # Files excluded from git
+-- README.md               # Project documentation
``

---

## ?? Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas cluster)
- [Google Gemini API Key](https://aistudio.google.com/app/apikey)

---

### 1. Clone the Repository

``bash
git clone https://github.com/Mahrukhfatma/AIINVOICEGENERATOR.git
cd AIINVOICEGENERATOR
``

---

### 2. Backend Setup

1. Navigate to the backend directory:
   ``bash
   cd backend
   ``

2. Install dependencies:
   ``bash
   npm install
   ``

3. Create your .env configuration file based on .env.example:
   ``bash
   cp .env.example .env
   ``

4. Configure your .env file with your credentials:
   ``env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   GEMINI_API_KEY=your_gemini_api_key
   ``

5. Start the backend server:
   ``bash
   # Development mode with nodemon
   npm run dev

   # Or standard start
   npm start
   ``
   The backend API will run at http://localhost:5000.

---

### 3. Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ``bash
   cd frontend/invoice-generator
   ``

2. Install dependencies:
   ``bash
   npm install
   ``

3. Start the Vite development server:
   ``bash
   npm run dev
   ``

4. Open your browser and navigate to http://localhost:5173.

---

## ?? API Reference

### Authentication (/api/auth)
| Method | Endpoint | Description |
|---|---|---|
| POST | /api/auth/register | Register a new user |
| POST | /api/auth/login | Log in and receive JWT token |

### Invoices (/api/invoices)
| Method | Endpoint | Description |
|---|---|---|
| GET | /api/invoices | Get all invoices for the authenticated user |
| POST | /api/invoices | Create a new invoice |
| GET | /api/invoices/:id | Fetch details of a specific invoice |
| PUT | /api/invoices/:id | Update an existing invoice |
| DELETE | /api/invoices/:id | Delete an invoice |

### AI Assistant (/api/ai)
| Method | Endpoint | Description |
|---|---|---|
| POST | /api/ai/parse-text | Extract structured invoice JSON from plain text |
| POST | /api/ai/generate-reminder | Generate AI-composed polite/firm payment reminder email |
| GET | /api/ai/dashboard-summary | Generate smart dashboard financial summary and suggestions |

---

## ?? Security Best Practices
- Sensitive keys (GEMINI_API_KEY, MONGO_URI, JWT_SECRET) must never be committed to public repositories.
- Keep all credentials inside .env, which is permanently ignored by .gitignore.

---

## ?? License
This project is licensed under the [ISC License](LICENSE).
