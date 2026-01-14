# 🪐 The Jihyo Archive

<table width=100% border="0">
  <tr>
    <td width="60%" style="vertical-align: top; border: none;">
      <p>A high-end, editorial-style web archive dedicated to <b>Park Jihyo</b>. Built with a focus on aesthetic luxury, seamless transitions, and a "classified file" narrative. This project blends a cinematic user experience with a modern technical stack.</p>
      <br />
      <blockquote>
        "Because I gave it my all and did my best, I don't have any regrets." <br />
        — <b>Park Jihyo</b>
      </blockquote>
    </td>
    <td width="40%" style="border: none;">
      <img src="public/jihyo-og.png" alt="Park Jihyo Archive Cover" width="40%" />
    </td>
  </tr>
</table>

---

## 📸 Preview
The archive features a custom-built asymmetric layout, mirroring the feel of a high-fashion digital magazine. It includes a dynamic discography retrieved from a custom backend and a deep-dive biography with scroll-reveal storytelling.

```
Soon will be updated~
```

## 🛠 Tech Stack
Designed for performance and smooth motion:

* **Framework:** [Astro](https://astro.build/) (Static Site Generation for speed)
* **UI Library:** [React](https://reactjs.org/) (for interactive components)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/) (Custom quint-ease transitions)
* **Database:** [Supabase](https://supabase.com/) (Real-time discography & gallery management)
* **Icons:** [Lucide React](https://lucide.dev/)

## ✨ Key Features
* **Editorial Layout:** Asymmetric grids and extreme whitespace for a "Luxury" feel.
* **Dynamic Discography:** Automatically pulls the latest releases from Supabase with a dedicated archive page.
* **Smooth Navigation:** Custom-built Navbar with absolute centering and smart-anchor scrolling.
* **Biography Journey:** A chapter-based narrative with staggered scroll-reveal animations.
* **The Vault:** A restricted-access area for premium content (Work in Progress).

## 🚀 Getting Started

1. **Clone the repo:**
   ```bash
   git clone [https://github.com/FarrelApriandry/jihyo-archive.git](https://github.com/FarrelApriandry/jihyo-archive.git)
   ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
Create a `.env` file and add your Supabase credentials:
    ```env
    PUBLIC_SUPABASE_URL=your_url
    PUBLIC_SUPABASE_ANON_KEY=your_key
    ```

4. **Run development server:**
    ```bash
    npm run dev

    ```

---

## 🏗 Architecture Notes (Dev Perspective)

As a Data Engineer and Game Developer, I approached this project by treating the UI as a "narrative system."

* **Modular Components:** Everything is mapped via React props for scalability.
* **Motion Logic:** Used custom easing functions to mimic the "heavy/premium" feel of high-end cinematography.
* **Data Flow:** Structured Supabase tables to allow easy updates for future TWICE/Jihyo eras.

---

## 👨‍💻 Author

**Rel** *Game Developer | Data Engineer | Web Explorer* [Medium](https://www.google.com/search?q=https://medium.com/%40FarrelApriandry) | [GitHub](https://github.com/FarrelApriandry)

---

*Disclaimer: This is a fan-made project. All images and intellectual property related to Jihyo/TWICE belong to JYP Entertainment.*

```