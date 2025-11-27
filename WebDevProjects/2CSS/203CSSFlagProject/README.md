# 🇯🇵 CSS Flag Project

This project recreates a national flag using only **HTML and CSS**.  
It focuses on practicing **CSS specificity**, **selector combinations**, and **absolute/relative positioning** to accurately build shapes and layouts with no images.

---

## 🚀 Project Overview

The flag is constructed using:
- A container with a background
- Positioned inner elements to form the flag design
- CSS selectors used to target specific elements cleanly and efficiently

No images, SVGs, or external libraries — purely CSS-based graphics.

---

## 🧩 Key Concepts Practiced

- **CSS Specificity & Inheritance**
- **Combining CSS Selectors** (class, element, descendant, child, etc.)
- **CSS Positioning:**  
  - `position: relative` for the container  
  - `position: absolute` for inner shapes  
- **Layout without images**
- **Basic styling and shape creation**

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**

No JavaScript or frameworks.

---

## 🌐 Live Demo

🔗 **Live Demo:**  
https://aminkhant1999.github.io/WebDevProjects/2CSS/203CSSFlagProject/index.html

---

## 📁 Project Structure

index.html
style.css

## 🧠 Core CSS Concepts

| Concept                | Key Idea                                 | Example                 |
|------------------------|-------------------------------------------|--------------------------|
| **Specificity**        | Determines which CSS rule takes priority  | `#id` > `.class` > `tag` |
| **Inheritance**        | Certain properties pass to children       | `color`, `font-family`   |
| **Combining Selectors**| Target more precise relationships         | `div > p`, `h1 + p`      |
| **Position: static**   | Default document flow                     | —                        |
| **Position: relative** | Offsets from normal flow                  | `top: 10px`              |
| **Position: absolute** | Positioned relative to nearest ancestor   | `top: 0; left: 0;`       |
| **Position: fixed**    | Stays anchored to the viewport            | `top: 0`                 |
| **Position: sticky**   | Acts relative until “stuck”               | `top: 10px`              |

---

### 💡 Pro Tips

- Use **`!important` only when necessary** — it makes debugging harder.  
- Apply **`position: relative`** to parent elements when positioning children absolutely.  
- Use **grouped selectors** to avoid repeating shared styles.  
- To debug specificity conflicts:  
  Check the **Computed** tab in browser dev tools to see which rule wins.
