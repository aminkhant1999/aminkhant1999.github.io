# 🔳 QR Code Generator (Node.js)

A simple and interactive **QR code generator** built using **Node.js**, **Inquirer**, and **qr-image**.  
The script prompts the user for a URL, generates a QR code image, and saves the original URL to a text file.

---

## 🚀 Project Overview

This command-line tool performs the following:

1. Prompts the user to enter a URL  
2. Generates a **QR code PNG** from that URL  
3. Saves the QR code as **`qr_code.png`**  
4. Stores the original URL in **`user_input.txt`**  

A great mini-project to practice Node.js modules, file handling, and image generation.

---

## 🧩 Key Concepts Practised

### 🟦 Inquirer
- Collecting user input  
- Handling interactive prompts  

### 🟩 qr-image
- Converting user input into a QR code  
- Streaming image data into a file  

### 🟨 File System (fs)
- Writing text files  
- Using writable streams  

### 🟥 ES Modules
- Using `import` syntax  
- Enabling `"type": "module"` in `package.json`

---

## 🛠️ Technologies Used

- **Node.js**
- **Inquirer**
- **qr-image**
- **fs** (native Node module)

---

## 📁 Project Structure

project-folder/
├── index.js
├── package.json
├── qr_code.png (generated after running)
└── user_input.txt (generated after running)


---

## ⚙️ Installation & Setup

Follow these steps to run the project:

1. Initialize a new Node project
```bash
npm init -y
```

2. Install required packages
```bash
npm i inquirer qr-image
```

3. Enable ES Modules  
Open package.json and add:
```json
{
  "type": "module"
}
```

4. Run the script
```bash
node index.js
```

After running, the script will:
- Generate qr_code.png (the QR code image)
- Save your input URL into user_input.txt

