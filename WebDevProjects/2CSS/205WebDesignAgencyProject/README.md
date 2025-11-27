# 🌐 Web Design Agency Project

A responsive webpage layout built using HTML and CSS, emulating a mock web-design agency’s homepage.  
This project emphasizes CSS `display`, `float`, and media queries for responsive behaviour.

---

## 🚀 Project Overview

The page features:
- Hero section with headline and sub-headline  
- Services section laid out using floats or inline-blocks  
- Testimonial or team section  
- A responsive mobile layout using media queries  

It was built without CSS frameworks, to practice classic layout techniques and responsive design from the ground up.

---

## 🧩 Key Concepts Practised

- **CSS Display & Float**: Using `display: block/inline-block`, `float`, and clearing floats.  
- **CSS Media Queries**: Creating breakpoints to adjust layout for tablets and mobile.  
- **Responsive Design Fundamentals**: Changing layout from multi-column to single column on narrow screens.  
- **Clean HTML/CSS separation**: No frameworks; custom styles focused on layout and responsiveness.

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**

No JavaScript or external layout frameworks.

---

## 🌐 Live Demo

🔗 **Live Demo**:  
https://aminkhant1999.github.io/WebDevProjects/2CSS/205WebDesignAgencyProject/index.html

---

## 📁 Project Structure

index.html
assets/
└── images/

---

## 📐 Layout Basics: Display, Floats & Media Queries

| Concept | Property / Feature | Description | Example |
|--------|----------------------|-------------|---------|
| **Display** | `display` | Controls how an element is rendered | `block`, `inline`, `flex`, `grid` |
| **Float** | `float: left;` | Pushes element to left/right; content wraps around it | Common for image alignment |
| **Clear** | `clear: both;` | Prevents elements from floating beside previous floats | Used in clearfix patterns |
| **Media Queries** | `@media (max-width: 600px)` | Applies styles based on viewport size | Essential for responsive design |

---

### 💡 Quick Tips

- Prefer **Flexbox** or **Grid** for layout instead of float-based designs.
- When using floats, include a **clearfix** to prevent layout collapse.
- Use media queries to adjust spacing, layout, and typography for mobile.
- Stick to consistent breakpoints (e.g., 480px, 768px, 1024px).
