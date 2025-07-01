# 🚀 shahjalal-portfolio-v2

A sleek, modern, and fully responsive portfolio website built with React, Tailwind CSS, Framer Motion, and Vite. This project showcases my skills, education, projects, and workflow in a visually rich and animated interface, optimized for all devices.

---

## 🌐 Live Links

| Type               | URL                                                                                |
| ------------------ | ---------------------------------------------------------------------------------- |
| 🔗 **GitHub Repo** | [shahjalal-portfolio-v2](https://github.com/shahjalal-labs/shahjalal-portfolio-v2) |
| 🌍 **Live Site**   | [shahjalal-labs.surge.sh](http://shahjalal-labs.surge.sh/)                         |
| 🧑‍💼 **LinkedIn**    | [md-sj](https://www.linkedin.com/in/md-sj-825bb4341/)                              |
| 📘 **Facebook**    | [Profile](https://www.facebook.com/profile.php?id=61556383702555)                  |
| ▶️ **YouTube**     | [@muhommodshahjalal9811](https://www.youtube.com/@muhommodshahjalal9811)           |

---

## ✨ Features

- 🌈 Beautiful and responsive UI with Tailwind CSS
- ⚛️ Built with React 19 and React Router 7
- 💥 Smooth animations using Framer Motion
- 📧 Contact form integrated with EmailJS
- 📜 Typewriter animation for engaging intro
- 🔐 Linted with ESLint and fully typed with TypeScript support
- 🧠 Clean modular structure for scalability and maintainability

---

## 🧰 Tech Stack

| Category      | Tools / Libraries                        |
| ------------- | ---------------------------------------- |
| 🚀 Frontend   | React, Tailwind CSS, Framer Motion, Vite |
| 🧩 Routing    | React Router v7                          |
| 📬 Forms & UI | react-hook-form, EmailJS, SweetAlert2    |
| 🌟 Animation  | framer-motion, react-simple-typewriter   |
| 🎨 Icons      | react-icons                              |
| ✅ Linting    | ESLint                                   |
| 🔧 Tooling    | Vite, Bun                                |

---

## 📁 File Structure

```bash
.
├── bun.lock
├── eslint.config.js
├── index.html
├── package.json
├── public/
│   ├── CNAME
│   └── favicon.png
├── README.md
├── structure.md
├── vite.config.js
└── src/
    ├── animation/
    │   └── framermotion.constant.js
    ├── assets/
    │   ├── logo.png
    │   ├── logoBlack.png
    │   ├── logoBlackRounded.png
    │   ├── profile.jpeg
    │   ├── react.svg
    │   └── preview/
    │       ├── Desktop.png
    │       ├── Laptop.png
    │       └── Mobile.png
    ├── hooks/
    │   └── useScrollPosition.js
    ├── index.css
    ├── main.jsx
    ├── module/
    │   ├── Landing/Home/
    │   └── Shared/
    │       ├── Footer/
    │       └── Nav/
    ├── Pages/
    │   ├── About/
    │   ├── Contact/
    │   ├── Education/
    │   ├── Projects/
    │   ├── skills/
    │   └── WorkFlow/
    ├── RootLayout/
    ├── Router/
    └── utils/

```

## 🧭 Routing Path Breakdown

This project uses **React Router v7** via the `createBrowserRouter` API to define a clean and modern routing structure. Below is a detailed description of each route and its corresponding component.

---

### 📁 Base Layout

| Path | Component    | Description                                                                                                                           |
| ---- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| `/`  | `RootLayout` | Acts as the main layout wrapper for all pages. Contains the common structure like `Navbar`, `Footer`, and `Outlet` for nested routes. |

---

### 🏠 Home Page

| Path              | Component  | Description                                                                                          |
| ----------------- | ---------- | ---------------------------------------------------------------------------------------------------- |
| `/` (index route) | `HomePage` | Default landing page of the portfolio. Introduces the user with animations, banners, and basic info. |

---

### 👨‍💻 Skills Page

| Path      | Component | Description                                                                                           |
| --------- | --------- | ----------------------------------------------------------------------------------------------------- |
| `/skills` | `Skills`  | Showcases categorized tech stacks, languages, tools, and technologies the developer is proficient in. |

---

### 🎓 Education Page

| Path         | Component   | Description                                                     |
| ------------ | ----------- | --------------------------------------------------------------- |
| `/education` | `Education` | Displays the academic qualifications and institutions attended. |

---

### 💼 Projects Page

| Path        | Component  | Description                                                                        |
| ----------- | ---------- | ---------------------------------------------------------------------------------- |
| `/projects` | `Projects` | Highlights key projects with images, descriptions, and links to GitHub/live demos. |

---

### 👤 About Page

| Path     | Component | Description                                                                                                                     |
| -------- | --------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `/about` | `About`   | Provides an in-depth look at the developer’s background, philosophy, and story. Includes animated paragraph typewriter effects. |

---

### 📬 Contact Page

| Path       | Component | Description                                                                                                                   |
| ---------- | --------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `/contact` | `Contact` | A contact form powered by EmailJS, allowing users to send messages. Includes name, email, and message fields with validation. |

---

### 🔁 Workflow Page

| Path        | Component  | Description                                                                                             |
| ----------- | ---------- | ------------------------------------------------------------------------------------------------------- |
| `/workflow` | `WorkFlow` | Describes the development workflow, tools used, version control practices, and productivity techniques. |

---

### ❌ Error Boundary

| Situation               | Component                    | Description                                                                                                                                   |
| ----------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Route mismatch or error | `<div>Error occured!!</div>` | A fallback error element shown when no route matches or an error occurs during routing. You can replace this with a custom 404 or error page. |

---

### 🧭 Router Initialization

Defined in `src/Router/router.jsx` using `createBrowserRouter`:

```js
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <div>Error occured!!</div>,
    children: [
      { index: true, Component: HomePage },
      { path: "skills", Component: Skills },
      { path: "education", Component: Education },
      { path: "projects", Component: Projects },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "workflow", Component: WorkFlow },
    ],
  },
]);
```

---

## 📌 Route Summary Table

The following table provides a concise overview of all defined routes, their corresponding components, and their purpose within the application:

| 🛣️ Route Path | 🧩 Component   | 📝 Purpose                       |
| ------------- | -------------- | -------------------------------- |
| `/`           | `HomePage`     | Landing page                     |
| `/skills`     | `Skills`       | Developer skills overview        |
| `/education`  | `Education`    | Academic qualifications          |
| `/projects`   | `Projects`     | Portfolio project showcase       |
| `/about`      | `About`        | Developer background & story     |
| `/contact`    | `Contact`      | Email contact form               |
| `/workflow`   | `WorkFlow`     | Developer process and workflow   |
| `*`           | Error fallback | Displays a generic error message |

## 📜 License

This project is licensed under the **[MIT License](https://opensource.org/licenses/MIT)**.  
You are free to use, modify, and distribute this project with attribution.

---

## 🙋‍♂️ Author

**Md Shahjalal**  
📍 Sharifpur, Gazipur, Dhaka, Bangladesh

- 🧑‍💻 **GitHub**: [@shahjalal-labs](https://github.com/shahjalal-labs)
- 💼 **LinkedIn**: [md-sj-825bb4341](https://www.linkedin.com/in/md-sj-825bb4341/)
- ✉️ **Email**: _(contact via LinkedIn or GitHub)_
- 💬 \*_Feel free to reach out for collaboration, feedback, or freelance opportunities._
