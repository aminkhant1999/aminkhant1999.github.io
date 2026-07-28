# 🎸 Band Name Generator (Node.js + Express + EJS)

A simple **Band Name Generator** built using **Node.js**, **Express**, **EJS**, and **body-parser**.

Users enter two words (a **street name** and a **pet name**), and the application generates a fun fictional band name by combining the two inputs using **server-side rendering**.

---

## 🚀 Project Overview

This project demonstrates:

1. Building a web server with Express
2. Rendering dynamic HTML using EJS templates
3. Handling user input through HTML forms
4. Processing POST requests with body-parser
5. Passing data from the backend to the frontend
6. Organizing an Express application using `views` and `public` folders
7. Using ES Modules (`import` syntax)

After submitting the form, the server processes the input and displays the generated band name on the page.

---

## 🧩 Key Concepts Practised

### 🟦 Express.js
- Creating an Express server
- `app.get()` for rendering the homepage
- `app.post()` for handling form submissions
- Serving static files using `express.static()`

### 🟩 EJS (Embedded JavaScript)
- Dynamic HTML rendering
- Passing variables with `res.render()`
- Embedding JavaScript inside HTML templates
- Creating reusable layouts using partials

### 🟨 Body-Parser
- Reading data submitted from HTML forms
- Using `bodyParser.urlencoded({ extended: true })`

### 🟥 Server-Side Rendering
- Processing user input on the server
- Generating dynamic content before sending it to the browser
- Separating application logic from presentation

---

## 🛠️ Technologies Used

- **Node.js**
- **Express.js**
- **EJS**
- **body-parser**
- **HTML5**
- **CSS3**

---

## 📁 Project Structure

```text
6.3BandGeneratorProject/
├── public/
│   └── styles/
│       └── main.css
│
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   └── index.ejs
│
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/aminkhant1999/aminkhant1999.github.io.git
```

### 2. Navigate to the project

```bash
cd aminkhant1999.github.io/WebDevProjects/6ejs/6.3BandGeneratorProject
```

### 3. Install dependencies

```bash
npm install
```

Or manually install the required packages:

```bash
npm install express ejs body-parser
```

### 4. Start the server

```bash
node index.js
```

Or, if you have Nodemon installed:

```bash
nodemon index.js
```

---

## ▶️ Usage

Open your browser and visit:

```
http://localhost:3000
```

Enter:

- A **Street Name**
- A **Pet Name**

Click **Generate**.

The application will instantly display your generated band name.

### Example

**Input**

```
Street Name: Sunset
Pet Name: Tiger
```

**Generated Band Name**

```
Sunset Tiger
```

---

## 🎯 Learning Outcomes

Through this project, I practised:

- Building web applications with Express.js
- Creating dynamic pages using EJS
- Handling form submissions
- Using middleware to process request data
- Passing data between the server and templates
- Organizing Express applications with reusable partials
- Understanding the basics of server-side rendering

