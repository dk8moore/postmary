# Django SaaS Boilerplate

This project is a boilerplate for building SaaS applications with Django and React.

## Requirements

- Python 3.10 or higher
- PostgreSQL
- Node.js and npm (for React frontend)

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
    make frontend-install
    ```

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
    ```

5. **Run backend migrations**:
    ```bash
    make migrate
    ```

6. **Start the backend and frontend development servers**:
    Open two terminal windows or tabs. In the first terminal, start the backend server:
    ```bash
    make run
    ```
    In the second terminal, start the frontend server:
    ```bash
    make frontend-run
    ```

## Usage

- **Clean project**: `make clean`
- **Run migrations**: `make migrate`
- **Start the backend server**: `make run`
- **Start the frontend server**: `make frontend-run`
