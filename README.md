# UoD Libusy

## Description
UoD Libusy is an Angular-based web application designed to display past, current, and predicted occupancy levels of the University of Dundee Library. This application allows users to view real-time occupancy rates to plan their visits effectively to the University of Dundee's main library.

## Features
- Real-time occupancy tracking
- Predictive occupancy tracking
- Past occupancy tracking
- PWA Support
- Responsive design for various devices

## Technologies Used
- Angular
- Docker
- nginx
- Google Cloud Build (for CI/CD)
- Node.js and npm (for dependency management and running the project)

## Installation and Setup
1. Clone the repository:
`git clone <repository-url>`

2. Navigate to the project directory:
`cd UoD-Libusy/uod-library-occupancy-angular-app`

3. Install dependencies:
`npm install`

## Configuration
- **nginx**: Configure `nginx.conf` according to your server setup.
- **Docker**: Use the provided `Dockerfile` for containerization.
- **CI/CD**: Adjust `cloudbuild.yml` for Google Cloud Build configurations.

## Running the Application

1. To serve the application locally:
`ng serve`
Navigate to `http://localhost:4200/` to view the app.

2. To build the application for production:
`ng build --prod`


## Deployment

Refer to the `Dockerfile` and `cloudbuild.yml` for deployment instructions. Ensure that your CI/CD pipeline is correctly set up in Google Cloud Build for automatic deployments
