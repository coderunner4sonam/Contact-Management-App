Contact Management App - README
Overview
The Contact Management App is a simple web application built using React, Redux, and React Router. It allows users to manage their contacts, including creating new contacts, editing existing ones, and deleting contacts. The app also provides a dashboard that displays COVID-19 data for different countries using React Leaflet for map visualization.

Features
View a list of contacts with their first name, last name, and status (active or inactive).
Create a new contact by providing a first name, last name, and selecting the status (active or inactive).
Edit existing contacts to update their first name, last name, or status.
Delete contacts to remove them from the contact list.
View a COVID-19 dashboard with worldwide data and data for different countries using React Leaflet for map visualization.
API Endpoint
The app uses the Disease.sh API to fetch COVID-19 data. The following API endpoints are used:

https://disease.sh/v3/covid-19/all: Fetches worldwide COVID-19 data.
https://disease.sh/v3/covid-19/countries: Fetches COVID-19 data for different countries.
https://disease.sh/v3/covid-19/historical/all?lastdays=all: Fetches historical COVID-19 data for worldwide cases.
Installation
Follow the steps below to set up and run the Contact Management App locally:

Clone the repository:

git clone https://github.com/your-username/contact-management-app.git
Navigate to the project folder:

cd contact-management-app
Install the dependencies:

npm install
Create a file named .env in the root of the project and add the following:

SKIP_PREFLIGHT_CHECK=true
This step is necessary to skip the react-scripts version check.

Start the development server:

npm start
The app will be accessible at http://localhost:3000.

Usage
Contacts Page
Click on the "Contacts" link in the navigation bar to view the list of contacts.
To create a new contact, click on the "Create Contact" button. Enter the first name, last name, and select the status (active or inactive) in the form. Click the "Save Contact" button to add the contact to the list.
To edit an existing contact, click the "Edit" button next to the contact you wish to modify. Update the first name, last name, or status, and then click the "Save Editted Contact" button to save the changes.
To delete a contact, click the "Delete" button next to the contact you wish to remove. The contact will be permanently deleted from the list.
COVID-19 Dashboard
Click on the "Chats and Maps" link in the navigation bar to view the COVID-19 dashboard.
The dashboard displays a map with markers for each country. Clicking on a marker will show a popup with COVID-19 data for that specific country, including total cases, active cases, recovered cases, and deaths.
Credits
The app was created as a practice project and is maintained by Sonam Murarkar.
License
MIT License





