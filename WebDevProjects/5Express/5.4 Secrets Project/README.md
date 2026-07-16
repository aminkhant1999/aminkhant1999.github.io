# 🔐 Password-Protected Website (Node.js + Express)

A simple **password-protected web page** built using **Node.js**, **Express**, and **body-parser**.  
The website displays a login form, checks the submitted password, and shows a secret page only if the correct password is entered.

---

## 🚀 Project Overview

This project demonstrates:

1. Serving HTML files using Express  
2. Handling POST form data with body-parser  
3. Creating middleware for password validation  
4. Redirecting or blocking users based on authentication  
5. Using ES Modules (`import` syntax)

When the correct password is entered (`ILoveProgramming`), the server returns the **secret page**.  
Otherwise, it reloads the login page.

---

## 🧩 Key Concepts Practised

### 🟦 Express.js
- `app.get()` for serving pages  
- `app.post()` for handling form submissions  
- `app.use()` for middleware  

### 🟩 Middleware Logic
- Custom `passwordCheck()` function to validate input  
- Passing control using `next()`  
- Conditionally returning pages  

### 🟨 Body-Parser
- Extracting POST form data  
- Using `bodyParser.urlencoded()`  

### 🟥 File Handling
- Serving HTML with `res.sendFile()`  
- Using `path` and `fileURLToPath` to manage ESM path resolution

---

## 🛠️ Technologies Used

- **Node.js**
- **Express**
- **body-parser**
- **HTML (public/index.html + secret.html)**

---

## 📁 Project Structure

project-folder/
├── public/
│ ├── index.html
│ └── secret.html
├── solution.js
└── package.json

## ⚙️ Installation & Setup

Follow these steps to run the project:

1. Initialize a new Node project  
```bash
npm init -y
```

2. Install required packages
```bash
npm i express body-parser
```

3. Enable ES Modules  
Open package.json and add:
```json
{
  "type": "module"
}
```

4. Folder structure setup
Create a public folder and add HTML files:
public/index.html
public/secret.html

5. Run the script
```bash
node index.js
```

After running, open:
http://localhost:3000

Enter the password:
ILoveProgramming

If correct → You will be redirected to the secret page.
