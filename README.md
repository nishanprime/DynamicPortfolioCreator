# Dynamic Portfolio

Dynamic Portfolio is a web application that allows users to generate their own portfolio websites. With this application,
users can easily create and customize their portfolio sites, and share them on their resumes and other platforms.

## Features

- User-friendly interface for generating and customizing portfolio websites
- Dynamic URLs for each user's portfolio site, such as `http://dynamicportfolio.io/<user>/<username>`
- Integration with Next.js, Node.js, Express, and MongoDB for seamless functionality
- Easy deployment and hosting options
- Responsive design for optimal viewing on different devices

## Installation

To install and run the Dynamic Portfolio application locally, follow these steps:

1. Clone the repository:

   ```bash 
   git clone https://github.com/nishanprime/DynamicPortfolioCreator
   ```

2. Make sure to npm install in both frontend and backend

3. Create .env.local in frontend and .env in backend
    Make sure .env in Backend have following prop:
      ```javascript
      PORT=8000
      MONGO_URI='<mongo_uri>'
      JWT_SECRET='<jwt_token>'
      SPACE_ACCESS_KEY_ID=<DO_space_access_key>
      SPACE_SECRET_KEY=<DO_space_secret_key>
      BACKEND_URI=https://api.dynamicportfolio.io or <http://localhost:8000>
      ```
      
    Make sure .env.local in Frontend have following prop:
      ```javascript
      NEXT_PUBLIC_BACKEND_URI=https://api.dynamicportfolio.io or <http://localhost:8000>
      ```
    * Use the localhost address in both cases if you are self-hosting the backend URI

**If you're using Docker Compose**

Run docker-compose up --build and use port 3000 to access the web app
