# 🟦 Mondrian Project (CSS Grid Layout)

This project recreates a Mondrian-inspired art layout using HTML and CSS Grid.  
It focuses on mastering the **CSS Grid module**, including grid sizing, placement, and template areas.

---

## 🚀 Project Overview

The webpage features:
- A grid structure mimicking the style of Piet Mondrian’s paintings  
- Use of `display: grid`, `grid-template-columns`, `grid-template-rows`  
- Placement of blocks using `grid-column` and `grid-row`, or grid-area aliases  
- Responsive sizing using fractional units (`fr`), auto, and fixed units  
- Simple colour palette and minimal design to highlight layout skills

---

## 🧩 Key Concepts Practised

- **CSS Grid Layout Module:**  
  - `grid-template-columns` and `grid-template-rows`  
  - `grid-gap` (or `gap`) for spacing  
  - Explicit placement with `grid-column` and `grid-row`  
  - Use of `grid-area` for named placement  
  - Fractional unit sizing (`1fr`, `2fr`, etc.)  
- **Layout control and structure without floats or Flexbox**  
- **Semantic HTML** supporting the grid layout

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3 (CSS Grid module)**

No JavaScript, no external libraries.

---

## 🌐 Live Demo

🔗 **Live Demo:**  
https://aminkhant1999.github.io/WebDevProjects/2CSS/207Grid/10.3%20Mondrian%20Project/index.html

---

## 📁 Project Structure

index.html
dimensions.png

---

| Category   | Property / Feature        | Description                               | Example                                   |
|-----------|----------------------------|-------------------------------------------|-------------------------------------------|
| Container | `display`                  | Turns an element into a grid container    | `display: grid;`                          |
| Container | `grid-template-columns`    | Defines the number and size of columns    | `repeat(3, 1fr)`                          |
| Container | `grid-template-rows`       | Defines the number and size of rows       | `100px auto 50px`                         |
| Container | `grid-template-areas`      | Assigns names to layout sections          | `"header main"`                           |
| Container | `gap`                      | Controls spacing between grid cells       | `gap: 20px;`                              |
| Item      | `grid-column`              | Sets an item’s column start/end           | `grid-column: 1 / 3;`                     |
| Item      | `grid-row`                 | Sets an item’s row start/end              | `grid-row: 2 / 4;`                        |
| Item      | `grid-area`                | Shorthand for row/column placement        | `grid-area: 1 / 1 / 2 / 3;`               |
| Responsive| `auto-fit`, `minmax()`     | Creates fluid, responsive grid layouts    | `repeat(auto-fit, minmax(200px, 1fr))`    |

---

### 💡 Tips for Mastering CSS Grid

- Use **Flexbox for 1D layouts** (rows *or* columns) and **Grid for 2D layouts** (rows *and* columns).
- Use **`grid-template-areas`** for a more visual, readable layout structure.
- Combine **Grid + Media Queries** to adapt grids across screen sizes.
- Prefer **`fr` units** over fixed pixel sizes for better flexibility.
