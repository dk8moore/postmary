# Django SaaS Boilerplate

This project is a boilerplate for building SaaS applications with Django.

## Requirements

- Python 3.8 or higher
- PostgreSQL

## Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/dk8moore/saas-boilerplate.git
    cd saas-boilerplate
    ```

2. **Create and activate a virtual environment**:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. **Install dependencies**:
    ```bash
    make install
    ```

4. **Set up environment variables**:
    Create a `.env` file in the project root and add the necessary environment variables (e.g., database credentials, secret keys).
    A typical `.env` file would look like this:
    ```json
    DEBUG=True
    SECRET_KEY='blablabla'
    DATABASE_NAME='dbname'
    DATABASE_USER='username'
    DATABASE_PASSWORD='userpassword'
    DATABASE_HOST='localhost'
    DATABASE_PORT=5432
    ```

5. **Run migrations**:
    ```bash
    make migrate
    ```

6. **Start the development server**:
    ```bash
    make run
    ```

## Usage

- **Clean project**: `make clean`
- **Run migrations**: `make migrate`
- **Start the server**: `make run`
