# 🧩 Simon Game (jQuery Version)

A browser-based memory game inspired by the classic **Simon** electronic game.  
Built with **HTML**, **CSS**, **JavaScript**, and **jQuery**, this project focuses on sequence generation, user interaction, event handling, and game-state logic.

---

## 🚀 Project Overview

The game works as follows:

1. Press any key to start  
2. The game flashes a colour and plays a sound  
3. The user must repeat the pattern  
4. Each level adds one more colour  
5. A wrong input triggers game over  
6. User can restart by pressing any key  

The UI includes flashing animations, audio feedback, and a level display.

---

## 🧩 Key Concepts Practised

### 🟦 **jQuery**
- `$(document).keypress()` for starting the game  
- `$(".btn").click()` for button interaction  
- `$("#id").fadeIn().fadeOut()` for animations  
- `$("#level-title").text()` for updating UI text  

### 🟩 **JavaScript Game Logic**
- Sequence generation using arrays  
- Comparing user input with game pattern  
- Level progression and reset logic  
- Random number generation for colour selection  

### 🟨 **Audio & Animation**
- Playing sounds using `new Audio()`  
- Button highlight animations  
- Game-over flashing effect using CSS classes  

### 🟥 **DOM Interaction**
- Updating level text  
- Tracking player input  
- Resetting UI on game-over  

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **jQuery**

---

## 🌐 Live Demo

🔗 **Play the Simon Game:**  
https://aminkhant1999.github.io/WebDevProjects/3JavaScript/304SimonGameChallenge/index.html

---

## 📁 Project Structure

index.html
styles.css
game.js
sounds/
├── red.mp3
├── blue.mp3
├── green.mp3
├── yellow.mp3
└── wrong.mp3
images/