# youtube-clone

![architecture](https://user-images.githubusercontent.com/45430770/217383891-13c7fe86-a00e-4c1e-b85a-8f7d94630e30.png)

This repository contains the code for a **YouTube Clone**, a web application built to simulate the core features of YouTube, such as video uploading, streaming, and user interaction. The project demonstrates modern web development practices and is intended for educational purposes.

---

## Features
- **User Authentication**: Sign up, log in, and manage profiles.
- **Video Uploading**: Upload videos with titles, descriptions, and thumbnails.
- **Video Streaming**: Watch videos with a responsive player.
- **Comments**: Add, edit, and delete comments on videos.
- **Search Functionality**: Find videos by titles or tags.
- **Responsive Design**: Optimized for both desktop and mobile devices.

---

## Technologies Used
- **Frontend**:
  - HTML, CSS, JavaScript
  - Angular.js for building a dynamic user interface
- **Backend**:
  - [Springboot](https://spring.io/projects/spring-boot)
  - [MongoDB](https://www.mongodb.com/) for database management

---

## Installation
Follow the steps below to set up the project locally:

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) installed or access to a MongoDB cloud instance
- AWS account for media storage

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/m0stafa7med/youtube-clone.git
   cd youtube-clone/frontend/youtube-clone-ui
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory and add the following:
     ```
     MONGO_URI=<Your MongoDB URI>
     AWS_BUCKET_NAME=<Your Cloudinary Cloud Bucket Name>
     AWS_ACCESS_KEY=<Your Cloudinary API Key>
     AWS_SECRET_KEY=<Your Cloudinary API Secret>
     ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open the app in your browser:
   ```
   http://localhost:3000
   ```

---

## Usage
1. Sign up or log in using your email and password.
2. Upload videos by clicking the "Upload" button.
3. Watch videos from the homepage or search for specific content.
4. Interact with videos by liking, commenting, and subscribing.

---

## Contributing
Contributions are welcome! If you want to enhance this project, follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

