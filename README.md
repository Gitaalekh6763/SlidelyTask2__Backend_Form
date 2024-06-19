# SlidelyTask2__Backend_Form

# Google Forms Replica Backend

This is the backend server for the Google Forms Replica project, built with Express and TypeScript. The server uses a JSON file as a database to store form submissions.

## Endpoints

- **GET /ping**: Always returns `{ success: true }`
- **POST /submit**: Accepts form data and saves it to the database
  - Request body: `{ "name": "string", "email": "string", "phone": "string", "github_link": "string", "stopwatch_time": "string" }`
- **GET /read**: Retrieves a form submission by index
  - Query parameter: `index` (0-based)

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd GoogleFormsBackend
2. npm install
3. npm run dev