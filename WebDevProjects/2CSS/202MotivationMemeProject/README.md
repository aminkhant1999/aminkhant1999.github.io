# 🎨 Motivation Poster Website (CSS Box Model Project)

This project is a simple motivational poster created using HTML and CSS.  
It focuses on practicing the **CSS Box Model**, along with basic styling such as **colors**, **fonts**, and **alignment**.

---

## 🚀 Project Overview

The page displays:
- A centered motivational quote
- A featured image
- Styled text and layout using CSS

The goal was to get comfortable with controlling spacing and layout using the box model.

---

## 🧩 Key Concepts Practiced

- **CSS Box Model:** margin, padding, borders
- **CSS Colors:** text color, background color
- **Font Properties:** font-size, font-family, line-height
- **Image styling:** width, height, centering
- **Basic layout structure with HTML + CSS**

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**

No frameworks or JavaScript used.

---

## 🌐 Live Demo

🔗 **Live Demo:** https://aminkhant1999.github.io/WebDevProjects/2CSS/202MotivationMemeProject/

---

## 📁 Project Structure

index.html
styles.css
assets/
└── images/

## 📦 Box Model Essentials

| Property   | Affects            | Location                        | Example                | Description                |
|------------|--------------------|----------------------------------|------------------------|----------------------------|
| **Padding** | Inside the element | Between content and border       | `padding: 10px;`        | Creates inner spacing      |
| **Border**  | Around padding     | Surrounds the element’s box      | `border: 2px solid red;`| Adds a visible outline     |
| **Margin**  | Outside the element| Outside the border               | `margin: 20px;`         | Creates outer spacing      |

---

## 📐 Box-Sizing Comparison

| Property        | Description                                | Example (Width = 200px, Padding = 20px, Border = 5px) |
|-----------------|--------------------------------------------|--------------------------------------------------------|
| `content-box`   | Width applies **only to the content area** | Total width = **250px**                               |
| `border-box`    | Width applies to the **entire box**        | Total width = **200px**                               |

> 💡 Recommended: Set `box-sizing: border-box;` globally for predi
