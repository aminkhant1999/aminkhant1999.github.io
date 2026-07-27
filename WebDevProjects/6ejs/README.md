# 🎸 Band Name Generator (Node.js + Express + EJS)

A simple **Band Name Generator** built using **Node.js**, **Express**, **EJS**, and **body-parser**.

Users enter a word describing a street name and a pet name, and the application combines them to generate a fun, fictional band name using server-side rendering with **EJS**.

---

## 🚀 Project Overview

This project demonstrates:

1. Setting up an Express server
2. Rendering dynamic pages with EJS
3. Receiving form data using body-parser
4. Passing data from the server to the view
5. Using ES Modules (`import` syntax)

When the user submits the form, the server combines the two inputs into a single band name and renders the result on the page.

---

## 🧩 Key Concepts Practised

### 🟦 Express.js
- `app.get()` for serving the homepage
- `app.post()` for handling form submissions
- Running a web server with Express

### 🟩 EJS Templating
- Rendering dynamic HTML
- Embedding JavaScript inside HTML
- Passing variables using `res.render()`

### 🟨 Body-Parser
- Reading form input from POST requests
- Using `bodyParser.urlencoded()`

### 🟥 Server-Side Rendering
- Processing user input on the server
- Sending dynamic content back to the browser
- Separating application logic from presentation

---

## 🛠️ Technologies Used

- **Node.js**
- **Express**
- **EJS**
- **body-parser**
- **HTML**
- **CSS**

---

## 📁 Project Structure

```text
project-folder/
├── views/
│   └── index.ejs
├── public/
│   └── styles/
│       └── main.css
├── index.js
├── package.json
└── package-lock.json
```

---

## ⚙️ Installation & Setup

Follow these steps to run the project:

### 1. Initialize a new Node project

```bash
npm init -y
```

### 2. Install required packages

```bash
npm install express ejs body-parser
```

### 3. Enable ES Modules

Open **package.json** and add:

```json
{
  "type": "module"
}
```

### 4. Start the server

```bash
node index.js
```

Or, if using Nodemon:

```bash
nodemon index.js
```

---

## ▶️ Usage

After starting the server, open:

```
http://localhost:3000
```

1. Enter a **Street Name**
2. Enter a **Pet Name**
3. Click **Generate**

The application will combine the two inputs and display your generated band name.

### Example

**Input**

- Street Name: `Sunny`
- Pet Name: `Tiger`

**Output**

```
Sunny Tiger
```

---

## 🎯 Learning Outcomes

This project helped reinforce:

- Building an Express server
- Creating dynamic web pages with EJS
- Handling form submissions
- Passing data from backend to frontend
- Understanding server-side rendering
- Organizing Express projects with `views` and `public` folders

---

## 📚 Course

Created as part of **The Complete Full-Stack Web Development Bootcamp** by **Dr. Angela Yu**, focusing on learning **EJS templating** and **Express.js** fundamentals.