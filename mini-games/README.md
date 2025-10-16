# 🎮 Mini Games Hub (Portfolio Project)

A collection of lightweight browser games — **Card Memory**, **Tic-Tac-Toe**, **Rock–Paper–Scissors**, and **Snake** — built with **HTML**, **CSS**, and **Vanilla JavaScript (ES6)**.

This repo showcases **front-end fundamentals**, **DOM work**, **responsive layouts**, and **game logic**. It also includes a clean **Mini Games Hub** homepage with auto-fitting icon tiles and per-game rules dialogs.

---

## 🧩 Games Included

| Game | Description | Tech Highlights |
|------|-------------|-----------------|
| 🧠 **Card Memory** | Flip cards to find matching pairs. | Grid layout, flip animations, DOM updates |
| ❌⭕ **Tic-Tac-Toe** | Classic two-player X vs O. | Win detection, game state handling |
| 🪨📄✂️ **Rock–Paper–Scissors** | Best-of against CPU. | Randomized CPU logic, playful UI, feedback banner |
| 🐍 **Snake** | Eat, grow, avoid collisions. | Canvas API, fixed-step loop, keyboard + touch controls |

---

## 💡 About This Project

Built as part of my learning journey with help from **AI assistance (ChatGPT)**.  
All code was **reviewed, tested, debugged, and refined by me** for clarity, performance, and UX.

### Goals
- Strengthen **HTML/CSS/JS** foundations  
- Practice **responsive/accessible UI** patterns  
- Translate ideas into working features quickly  
- Publish a public **portfolio** with real projects

---

## ✨ Key Features

- ✅ **Responsive**: Desktop, tablet, and mobile friendly  
- 🎛️ **Hub page**: Game cards, rule popovers, auto-scaled icons  
- 🎮 **Controls**: Keyboard, mouse, and touch (including swipes/taps)  
- 💾 **Persistent scores**: `localStorage` for Snake high score  
- 🧼 **Clean UI**: Minimal, focused designs per game  
- 📴 **Offline-capable** once loaded in the browser

---

## 🎮 Controls (Quick Reference)

### Snake
- **Move**: `W/A/S/D` or **swipe** (touch)  
- **Pause/Play**: `F` or **tap** (when alive)  
- **Restart**: `R` or **double-tap** (alive) / **single tap** (dead)  
- Start banner: _“Press W/A/S/D or Swipe to start”_  
- Death banner: _“You are dead. Press R to restart or tap to restart.”_

### Tic-Tac-Toe
- Click/tap a cell to play  
- **Restart** button in the page  
- **🏠 Back to Home** button on the page

### Rock–Paper–Scissors
- Click/tap **Rock / Paper / Scissors**  
- Choose **Best-of** target, **Reset** to start a new match  
- **🏠 Back to Home** button on the page  
- Playful, arcade-style UI with feedback banner

### Card Memory
- Click/tap to flip cards  
- Match all pairs to win (move counter shown)  
- **New game** + **🏠 Back to Home** buttons in header

---

## 🗂️ Project Structure
/ (repo root)
│── index.html # Mini Games Hub (icons auto-fit, rules dialog)
│── /snake-game/
│ └── index.html # Canvas, WASD/F/R + touch controls, live banners
│── /tic-tac-toe/
│ └── index.html # X/O game + Restart + Back to Home
│── /rock-paper-scissors/
│ └── index.html # Playful UI, Best-of select, Reset + Back to Home
│── /memory-game/
│ └── index.html # Flip cards grid, New game + Back to Home
│
└── README.md


> Hub icons auto-fit using a small script that scales emoji/text within each icon tile to avoid overflow.

---

## 🛠️ Technologies

- **HTML5** — Semantic structure  
- **CSS3** — Flexbox, Grid, responsive units, light/dark friendly palette  
- **JavaScript (ES6)** — DOM APIs, Canvas API (Snake), event handling  
- **LocalStorage** — Snake high-score persistence

---


