# Mern_Containerization
# 🚀 MERN Stack App with Docker, NGINX & MongoDB

This is a fully Dockerized MERN stack application (MongoDB, Express, React, Node.js) configured with **NGINX reverse proxy**, built as a professional project to demonstrate full-stack development and container orchestration.

---

## 📦 Features

- ✅ React (Frontend) with TailwindCSS
- ✅ Express.js REST API (Backend)
- ✅ MongoDB (NoSQL Database)
- ✅ Docker containers for each service
- ✅ NGINX reverse proxy to route traffic
- ✅ Production-ready file structure and deployment setup

---

## 🧱 Project Structure

Mern_containerization/
├── client/ # React frontend (Dockerized)
│ └── Dockerfile
├── server/ # Express backend (Dockerized)
│ ├── routes/
│ ├── controllers/
│ ├── models/
│ ├── .env
│ └── Dockerfile
├── nginx/ # NGINX reverse proxy
│ ├── Dockerfile
│ └── default.conf
├── docker-compose.yml # Docker Compose config
└── README.md



## 🐳 Docker Architecture

| Service  | Port | Description                          |
|----------|------|--------------------------------------|
| client   | 3000 | React frontend (via NGINX on port 80)|
| server   | 5000 | Express backend API                  |
| mongo    | 27017| MongoDB NoSQL database               |
| nginx    | 80   | Reverse proxy for client + server    |



## ⚙️ Setup Instructions

> 💡 Make sure Docker & Docker Compose are installed on your system.

### 1. Clone the Repository


git clone https://github.com/<your-username>/Mern_containerization.git
cd Mern_containerization



2. Run All Services via Docker Compose
   
docker-compose up --build


This command will:
Build React and Express apps
Pull and start MongoDB
Route everything through NGINX

3. Access the App
🌐 Frontend: http://localhost

🔧 API Endpoint: http://localhost/api/tasks


