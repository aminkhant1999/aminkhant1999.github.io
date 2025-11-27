# 💳 Pricing Table (Flexbox Layout)

This project presents a fully responsive pricing table layout built with HTML and CSS.  
It focuses on mastering the CSS Flexbox module, specifically `flex-direction`, `flex-wrap`, and `flex-grow`/`flex-shrink` sizing behavior.

---

## 🚀 Project Overview

The webpage includes:
- Several pricing plan cards aligned horizontally for desktop view  
- Flexbox container with direction and wrapping properties  
- Responsive behavior that stacks cards vertically on smaller screens  
- Responsive sizing and alignment using `flex:`, `justify-content`, and `align-items`

Built without using any CSS frameworks, to reinforce in-depth understanding of Flexbox layout mechanisms.

---

## 🧩 Key Concepts Practised

- **CSS Flexbox:**  
  - `display: flex` on container  
  - `flex-direction: row / column`  
  - `flex-wrap: wrap` for responsiveness  
  - `flex-grow`, `flex-shrink`, `flex-basis` for sizing  
  - `justify-content` and `align-items` for alignment  
- **Responsive Layouts:** Flex container adapts to screen width  
- **Clean HTML structure and semantic markup**

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3 (Flexbox module only)**

No JavaScript or external libraries.

---

## 🌐 Live Demo

🔗 **Live Demo:**  
https://aminkhant1999.github.io/WebDevProjects/2CSS/206Flex/207PricingTable/index.html

---

## 📁 Project Structure

index.html
styles.css
images/

---

## 📘 Common Flexbox Properties

| Category  | Property        | Description                     |
|-----------|-----------------|---------------------------------|
| Container | `display`        | Enables flexbox layout          |
| Container | `flex-direction` | Sets direction (row or column)  |
| Container | `justify-content`| Horizontal alignment            |
| Container | `align-items`    | Vertical alignment              |
| Container | `flex-wrap`      | Allows items to wrap            |
| Container | `align-content`  | Controls spacing on multiple rows |
| Item      | `order`          | Changes the visual order        |
| Item      | `flex-grow`      | Allows item to grow             |
| Item      | `flex-shrink`    | Allows item to shrink           |
| Item      | `flex-basis`     | Sets initial item size          |
| Item      | `align-self`     | Overrides container alignment   |

---

### 💡 Tips

- Flexbox is best for **1D layouts** (a row *or* a column)  
  Use **CSS Grid** for **2D layouts** (rows *and* columns).
- Always start by defining a **flex container**:
  ```css
  .container {
    display: flex;
  }
