# Django + React SaaS Boilerplate

This project is a boilerplate for building SaaS applications with Django and React, featuring real-time notifications using Django Channels and WebSockets.

## Requirements

- Python 3.10 or higher
- PostgreSQL
- Node.js (v14.x or higher) and npm (v6.x or higher)
- Redis (for real-time communication)
- Tailwind CSS (for styling the React frontend)

## Setup

1. **Clone the repository and navigate to the project directory**:
    ```bash
    git clone https://github.com/dk8moore/saas-boilerplate.git
    cd saas-boilerplate
    ```

2. **Create and activate a virtual environment**:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. **Install all dependencies (backend and frontend)**:
    ```bash
    make install
    make fe-install
    ```
    
    *If Tailwind CSS is not already set up in your project, you can add it by following the official [Tailwind CSS installation guide](https://tailwindcss.com/docs/installation).*

    *Ensure TypeScript is set up correctly*:
    Make sure the `tsconfig.json` file is present in the frontend root (`frontend/tsconfig.json`) with the following content:
    ```json
    {
    "compilerOptions": {
        "target": "es5",
        "lib": ["dom", "es2015"],
        "jsx": "react",
        "module": "commonjs",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
    },
    "include": ["src/**/*"]
    }

4. **Set up environment variables**:
    Create a `.env` file in the project root and add the necessary environment variables (e.g., database credentials, secret keys). A typical `.env` file would look like this:
    ```bash
    DEBUG=True
    SECRET_KEY='your-secret-key'
    DATABASE_NAME='dbname'
    DATABASE_USER='username'
    DATABASE_PASSWORD='userpassword'
    DATABASE_HOST='localhost'
    DATABASE_PORT=5432
    STRIPE_SECRET_KEY = 'your-secret-key'
    ```

    Create a `.env` file in the frontend root (`frontend/.env`) and add the necessary environment variables. A typical `.env` file would look like this:
    ```bash
    REACT_APP_STRIPE_PUBLISHABLE_KEY='your-publishable-key'
    REACT_APP_API_URL='http://localhost:8000'
    REACT_APP_WS_URL='ws://localhost:8000'
    ```

5. **Set up PostgreSQL Database**:
    Before running migrations, ensure you have set up your PostgreSQL database. Follow the instructions in the "PostgreSQL Database Setup" section below.

6. **Run backend migrations**:
    ```bash
    make migrate
    ```

7. **Start the backend and frontend development servers**:
    Open two terminal windows or tabs. In the first terminal, start the backend server:
    ```bash
    make run
    ```
    In the second terminal, start the frontend server:
    ```bash
    make fe-run
    ```

### PostgreSQL Database Setup
This project uses PostgreSQL as its database. Follow these steps to set up PostgreSQL for your development environment:

1. **Install PostgreSQL**:
    - For MacOS: You can use Homebrew (`brew install postgresql`) or download from the official PostgreSQL website.
    - For Windows: Download and install from the official PostgreSQL website.
    - For Linux: Use your distribution's package manager (e.g., `sudo apt-get install postgresql` for Ubuntu).

2. **Start PostgreSQL service**:
    - MacOS: `brew services start postgresql` (if installed via Homebrew)
    - Windows: The installer should set up the service to start automatically.
    - Linux: `sudo service postgresql start` or `sudo systemctl start postgresql`

3. **Create a database**:
    ```bash
    createdb your_database_name
    ```

4. **Create a database user**:
    ```bash
    createuser -s your_username
    ```

5. **Set user password**:
    ```bash
    psql
    \password your_username
    ```

6. **Update `.env` file**:  
    Update the following variables in your `.env` file with your PostgreSQL credentials:
    ```bash
    DATABASE_NAME='your_database_name'
    DATABASE_USER='your_username'
    DATABASE_PASSWORD='your_password'
    DATABASE_HOST='localhost'
    DATABASE_PORT=5432
    ```

7. **Verify connection**:
    After setting up the database and updating the `.env` file, you can proceed with running migrations as described in the setup steps above.

*Ensure that the PostgreSQL service is running before starting your Django application. If you encounter any issues, check the PostgreSQL log files for more information.

For production environments, it's recommended to use a more secure configuration. Consult the Django documentation on databases for best practices.*

## Usage

- **Clean project**: `make clean`
- **Clean frontend**: `make fe-clean`
- **Run migrations**: `make migrate`
- **Start the backend server**: `make run`
- **Start the frontend server**: `make fe-run`
- **Create superuser for Django admin panel**: `make createsu`

## Features

- **User Authentication and Authorization**: JWT-based authentication.
- **CRUD Operations**: Basic CRUD operations for managing user data.
- **Real-time Notifications**: Uses Django Channels and WebSockets for real-time communication.
- **Database Integration**: PostgreSQL for data storage.
- **Frontend**: React application setup for dynamic user interfaces, styled with Tailwind CSS.
- **Payment Integration**: Stripe integration for payment processing.
<!-- - **Deployment**: Docker configuration for easy deployment. -->

## Development Workflow

This section outlines the process for using this boilerplate in new projects and contributing improvements back to the boilerplate.

1. **Create a new project**:
   - Use GitHub's "Use this template" feature or manually copy the boilerplate to create a new repository for your project.

2. **Development process**:
   - Work on your project in its own repository.
   - When you identify potential boilerplate improvements, create a new branch in your project repository to implement and test these improvements.

3. **Contributing back to the boilerplate**:
   - Once you have a stable improvement that could benefit the boilerplate:
     - Create a new branch in the original boilerplate repository.
     - Implement the improvement in this branch, ensuring it's generalized and not specific to your project.
     - Create a pull request from this branch to the main branch of the boilerplate repository.
     - Provide clear documentation and explanation of the improvement in the pull request.

4. **Updating your project with boilerplate changes**:
   - Periodically pull changes from the boilerplate repository into your project.
   - Create a new branch in your project repository for integrating these updates.
   - Merge the boilerplate changes into this branch and resolve any conflicts.
   - After testing, merge this update branch into your main project branch.

5. **Best practices**:
   - Keep your project-specific code clearly separated from boilerplate code.
   - Regularly update your project with the latest boilerplate improvements.
   - When contributing back to the boilerplate, ensure changes are general and beneficial to most users.
   - Maintain good communication with the boilerplate maintainers and other contributors.