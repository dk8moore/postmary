# Makefile for Django project

.PHONY: help install freeze migrate clean-migrations reset-db update-db clear-cache createsu run clean fe-install fe-run fe-clean bp-remote bp-pull

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

# Boilerplate git setup (for derived projects)

bp-remote:
	# Add the boilerplate git remote
	git remote get-url boilerplate || git remote add boilerplate https://github.com/dk8moore/saas-boilerplate.git

bp-pull:
	@echo "This will update your project with the latest changes from the Boilerplate."
	@echo "Make sure you have committed or stashed all your changes before proceeding."
	@read -p "Do you want to continue? [y/N] " confirm && [[ $$confirm == [yY] || $$confirm == [yY][eE][sS] ]] || exit 1
	@echo "Fetching latest changes from Boilerplate..."
	git fetch boilerplate
	@echo "Attempting to merge Boilerplate changes..."
	git merge boilerplate/main --allow-unrelated-histories
	@echo "Update from Boilerplate completed successfully."