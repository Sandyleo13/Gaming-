
# 🎮 GameON Universe

GameON Universe is a modern, responsive web application for organizing and participating in online gaming tournaments. Built with React, TypeScript, TailwindCSS, and Vite, it offers an engaging user experience for gamers worldwide.

---

## 🚀 Features

- 🌐 Browse and create tournaments
- 🏆 1,200+ tournaments and 50,000+ players
- 📅 Daily events with exciting prizes
- 💡 Responsive, animated UI
- 🔐 Login & Sign Up functionality

---

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript
- **Styling**: TailwindCSS
- **Icons**: Lucide-react
- **Bundler**: Vite
- **Routing**: React Router (if implemented)

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── NavLinks.tsx
│   ├── TournamentCard.tsx
│   └── TournamentList.tsx
│
├── hooks/
│   ├── use-mobile.tsx
│   └── use-toast.ts
│
├── lib/ & pages/
├── App.tsx
├── index.css
├── main.tsx
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/game-on-universe.git
cd game-on-universe
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Server will be accessible at:

- Local: [http://localhost:8080](http://localhost:8080)
- Network: [http://192.168.29.149:8080](http://192.168.29.149:8080)

---

## 🧹 Clean-up Instructions

If you cloned from a template like `gptengineer`, make sure to remove this line in `index.html`:

```html
<!-- REMOVE THIS LINE -->
<script src="https://cdn.gpteng.co/gptengineer.js" type="module"></script>
```

Replace with:

```html
<script type="module" src="/src/main.tsx"></script>
```

---

---

## 📦 Deployment

To build the app for production:

```bash
npm run build
```

Deploy `dist/` folder to any static hosting platform like Vercel, Netlify, Firebase, etc.

---

## 📄 License

MIT License – feel free to fork and modify!

---

## ✨ Credits

Designed and developed by Sandipan Das
