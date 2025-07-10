# 🚀 shahjalal-portfolio-v2

A sleek, modern, and fully responsive portfolio website built with React, Tailwind CSS, Framer Motion, and Vite. This project showcases my skills, education, projects, and workflow in a visually rich and animated interface, optimized for all devices.

---

## 🌐 Live Links

| Type               | URL                                                                                |
| ------------------ | ---------------------------------------------------------------------------------- |
| 🔗 **GitHub Repo** | [shahjalal-portfolio-v2](https://github.com/shahjalal-labs/shahjalal-portfolio-v2) |
| 🌍 **Live Site**   | [shahjalal-mern.surge.sh](http://shahjalal-mern.surge.sh/)                         |
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

---

## 🛠️ Installation & Setup

Set up the project locally in just a few steps:

```bash
# Clone the repository
git clone https://github.com/shahjalal-labs/shahjalal-portfolio-v2.git

# Navigate into the project directory
cd shahjalal-portfolio-v2

# Install dependencies (using Bun)
bun install

# Start the development server
bun run dev
```

> ⚡ Powered by **Vite** for an ultra-fast dev server and optimized build system.

---

## 🤝 Contribution

Contributions, suggestions, and improvements are welcome!  
If you'd like to contribute:

```bash
🍴 Fork the repository

🛠 Create a new branch
git checkout -b feature-name

📦 Make your changes and commit
git commit -m "add new feature"

🚀 Push to the branch
git push origin feature-name

🔁 Create a pull request
```

> ✅ All contributions should follow the existing code style and project structure.

---

## ❓ FAQ

### ❓ Why Bun over npm or Yarn?

> Bun offers faster installs, native TypeScript support, and a lightweight runtime — making it ideal for modern Vite-based projects.

---

### 🚀 How do I deploy this portfolio?

You can deploy it easily using any of the following:

- **Surge**

  ```bash
  bun run build
  surge dist
  ```

- **Vercel** / **Netlify**
  Connect your GitHub repository and follow their UI-based deploy process.

---

### 🧩 Can I customize the content for my own portfolio?

> Yes! Everything is modular. You can edit text/images inside the `About`, `Projects`, `Skills`, and `Contact` pages.

---

### 🖼️ How do I add my own project cards?

Head to `src/Pages/Projects/project.constant.jsx` and update or add new project objects:

```js
{
  title: "Your Project",
  description: "What it does",
  image: "/path-to-image.png",
  github: "https://github.com/your-repo",
  live: "https://your-live-site.com"
}
```

---

### 🧠 How can I add new routes/pages?

1. Create your new page component in `src/Pages/YourPage/YourPage.jsx`
2. Import it in `src/Router/router.jsx`
3. Add a new route object like:

```js
{ path: "your-path", Component: YourPage }
```

---

### 💻 Can I use this as my real personal website?

> Absolutely. Replace the content, links, and images with your own and deploy. It’s designed to look professional and modern.

---

### 🎨 Can I change the color scheme or font?

Yes. Tailwind makes it easy.  
Update the `tailwind.config.js` file or override styles in your `index.css`.

---

### 🌐 How do I update social/media links?

Edit the relevant social links in the `Footer`, `Contact`, or `About` sections under `src/module/Shared` or `src/Pages`.

---

### 📝 Can I add a blog section to this portfolio?

> Yes — but you’ll need to add new routes, components, and potentially state handling. The modular structure makes it easy to extend.

---

### 🛑 Is this SEO-optimized?

> Not by default. But you can add meta tags in `index.html` or use libraries like `react-helmet` for better SEO support.

---

### 📬 How do I receive emails from the contact form?

Set up your EmailJS credentials in `.env`, and use their email template/dashboard.

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

### 🧪 Is testing implemented?

> Not yet. But you can easily extend this project with:

- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/)
- [Cypress](https://www.cypress.io/) for end-to-end testing

---

### 🛠 Can I reuse components in my own project?

> Absolutely. This project is MIT licensed — just provide attribution when using significant portions of the codebase.

---

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

## 📸 Preview

### `Please view the live site for getting latest and dynamic previews of the website.`

Explore the responsive design of this portfolio website across different device views. The screenshots below demonstrate the layout, visual hierarchy, and UI responsiveness optimized for desktop, laptop, and mobile devices.

---

<!-- ### 🖥 Desktop View -->
<!---->
<!-- The desktop layout features a wide, spacious design that highlights the hero banner, navigation, and project showcases side-by-side for an immersive experience. -->
<!---->
<!-- ![Desktop Preview](src/assets/preview/Desktop.png) -->
<!---->
<!-- --- -->
<!---->
<!-- ### 💻 Laptop View -->
<!---->
<!-- The laptop view adjusts elements for medium-sized screens, maintaining clarity and ease of navigation with slightly compact spacing and adaptive content arrangement. -->
<!---->
<!-- ![Laptop Preview](src/assets/preview/Laptop.png) -->

<!-- updated view -->

### 🖥️ Desktop View

**Home Page**  
![](src/assets/images/preview/Desktop/Home/HomePage1.png)

### 💻 Laptop View

**Home Page**  
![](src/assets/images/preview/Laptop/HomePage1.png)

### 📱 Mobile View

The mobile design is fully responsive with vertical stacking, touch-friendly buttons, and optimized font sizes, ensuring an intuitive and accessible user experience on smaller screens.

**Home Page**  
![](src/assets/images/preview/Mobile/HomePage1.png)

---

> **Note:**  
> These preview images are located under the `src/assets/preview/` directory and can be replaced or updated to reflect future UI changes.

## `Please view the live site for getting dynamic previews of the website.`
