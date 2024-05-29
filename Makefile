# Makefile for Django project

.PHONY: install migrate run clean frontend-install frontend-run

# Backend setup

install:
	# Install the required packages from requirements.txt
	pip install -r requirements.txt

migrate:
	# Run Django migrations
	python manage.py makemigrations
	python manage.py migrate

run:
	# Start the Django development server
	python manage.py runserver

clean:
	# Remove Python file artifacts
	find . -name '*.pyc' -exec rm {} +
	find . -name '*.pyo' -exec rm {} +
	find . -name '__pycache__' -exec rm -r {} +

# Frontend setup

frontend-install:
	# Install the required node packages
	cd frontend/boilerplate && npm install

frontend-run:
	# Start the React frontend server
	cd frontend/boilerplate && npm start