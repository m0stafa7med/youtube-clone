# 🎬 YouTube Clone

A full-stack video sharing platform built as a YouTube clone. Features video upload & streaming, user authentication via Auth0, comments with replies, likes/dislikes, subscriptions, playlists, watch history, notifications, and a trending page. Includes light/dark mode theming. Videos and thumbnails are stored on the server filesystem. Deployed with Docker and Traefik with automated CI/CD.

🌐 **Live Demo**: [youtube.mostafadarwesh.com](https://youtube.mostafadarwesh.com)

---

## 🏗️ Architecture

```
Internet → Traefik (SSL + Routing)
              │
              └── youtube.mostafadarwesh.com
                    ├── /         → Angular (Nginx)
                    └── /api/**   → Spring Boot
                                      └── MongoDB
```

## 🛠️ Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Frontend   | Angular 17, Angular Material, SCSS  |
| Backend    | Spring Boot 3, Spring Security, JWT |
| Database   | MongoDB 7                           |
| Auth       | Auth0 (OAuth 2.0 + OIDC)            |
| Storage    | Server filesystem (Docker volume)   |
| Proxy      | Traefik v2 (auto SSL via Let's Encrypt) |
| CI/CD      | GitHub Actions → SSH deploy         |
| Container  | Docker + Docker Compose             |

## 📁 Project Structure

```
youtube-clone/
├── backend/                 # Spring Boot REST API (Git submodule)
├── frontend/                # Angular SPA (Git submodule)
├── docker-compose.yml       # Production Docker orchestration
├── .env.example             # Environment variables template
├── .github/
│   └── workflows/
│       └── deploy.yml       # CI/CD pipeline
└── uploads/                 # Video & thumbnail storage (gitignored)
    ├── videos/
    └── thumbnails/
```

## ✨ Features

- **Video Management** — Upload, edit, delete videos with file type & size validation
- **Thumbnails** — Upload custom thumbnails for videos
- **Authentication** — Auth0 login with JWT token validation
- **Comments** — Add, edit, delete comments with nested replies
- **Likes/Dislikes** — Like or dislike videos
- **Subscriptions** — Subscribe to channels
- **Playlists** — Create and manage video playlists
- **Watch History** — Automatic tracking of viewed videos
- **Notifications** — Real-time notifications for subscriber activity
- **Search** — Search videos by title and description
- **Categories** — Filter videos by category (Music, Gaming, Education, etc.)
- **Trending** — View most popular videos by view count
- **Dark/Light Mode** — Theme toggle with localStorage persistence
- **Responsive Design** — Works on desktop and mobile
- **Upload Limits** — Per-user video count limits and file size restrictions

## 🚀 Getting Started

### Prerequisites
- Docker & Docker Compose
- Auth0 account

### Local Development

1. **Clone with submodules**
   ```bash
   git clone --recurse-submodules https://github.com/m0stafa7med/youtube-clone.git
   cd youtube-clone
   ```

2. **Backend** (requires Java 17 + Maven)
   ```bash
   cd backend
   mvn spring-boot:run
   ```

3. **Frontend** (requires Node.js 20+)
   ```bash
   cd frontend
   npm install
   ng serve
   ```

4. Open `http://localhost:4200`

### Production Deployment

1. **Create `.env`** from `.env.example` and fill in your values
2. **Run**
   ```bash
   docker compose up -d --build
   ```

## 🔄 CI/CD

Every push to `master` triggers GitHub Actions which:
1. SSHs into the production server
2. Pulls latest code with submodules
3. Rebuilds and restarts Docker containers
4. Cleans up old Docker images

### Required GitHub Secrets
| Secret | Description |
|--------|-------------|
| `SSH_HOST` | Server IP address |
| `SSH_USER` | SSH username |
| `SSH_PRIVATE_KEY` | SSH private key for authentication |

## 👤 Author

**Mostafa Darwesh**
- GitHub: [@m0stafa7med](https://github.com/m0stafa7med)
- Website: [mostafadarwesh.com](https://mostafadarwesh.com)
