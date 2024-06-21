
# Google Forms Replica
The backend server for the Google Forms Replica task, built with Express and TypeScript. The server uses a JSON file as a database to store form submissions.
## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Gitaalekh6763/SlidelyTask2__Backend_Form
   cd GoogleFormsBackend
   ```
2. ```bash
    npm install
    ```
3. ```bash
      npm run dev
      ```

## Compulsory Endpoints

- **GET /ping**: Always returns `{ success: true }`
- **POST /submit**: Accepts form data and saves it to the database
  - Request body: `{ "name": "string", "email": "string", "phone": "string", "github_link": "string", "stopwatch_time": "string" }`
- **GET /read**: Retrieves a form submission by index
  - Query parameter: `index` (0-based)


## Additional Endpoints
- **Get /search : Return from data matching to email
- **Delete /delete : Delete the form data
- **Update /update : Update the form data
