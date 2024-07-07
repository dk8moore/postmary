# Makefile for Django project

.PHONY: install migrate run clean frontend-install frontend-run

# Backend setup

install:
	# Install the required packages from requirements.txt
	pip install -r requirements.txt

freeze:
	# Freeze the current Python environment
	pip freeze > requirements.txt

migrate:
	# Run Django migrations
	python manage.py makemigrations
	python manage.py migrate

clean-migrations:
	# Remove Django migrations
	find . -path "*/migrations/*.py" -not -name "__init__.py" -delete
	find . -path "*/migrations/*.pyc" -delete

reset-db:
	# Reset the Django database
	python manage.py reset_db --noinput
	make clean-migrations
	make migrate

update-db:
	# Update the Django database (keeping data)
	make clean-migrations
	make migrate

clear-cache:
	# Clear the Django cache
	python manage.py clear_cache

createsu:
	# Create Django admin superuser
	python manage.py createsuperuser

run:
	# Start the Django development server
	python manage.py runserver

clean:
	# Remove Python file artifacts
	find . -name '*.pyc' -exec rm {} +
	find . -name '*.pyo' -exec rm {} +
	find . -name '__pycache__' -exec rm -r {} +

# Frontend setup

fe-install:
	# Install the required node packages
	cd frontend && npm install

fe-run:
	# Start the React frontend server
	cd frontend && npm start

fe-clean:
	# Remove frontend build artifacts
	rm -rf frontend/build
	rm -rf frontend/node_modules