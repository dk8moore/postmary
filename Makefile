# Makefile for Django project

.PHONY: install clean migrate runserver

install:
	# Install the required packages from requirements.txt
	pip install -r requirements.txt

clean:
	# Remove Python file artifacts
	find . -name '*.pyc' -exec rm {} +
	find . -name '*.pyo' -exec rm {} +
	find . -name '__pycache__' -exec rm -r {} +

migrate:
	# Run Django migrations
	python manage.py makemigrations
	python manage.py migrate

run:
	# Start the Django development server
	python manage.py runserver
