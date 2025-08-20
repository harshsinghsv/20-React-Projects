# 📇 React Profile Card – A Mini Project

This project is a simple yet powerful demonstration of how **React components** and **props** can be used to build reusable UI elements.  

I built a **Profile Card** that displays:
- A profile picture
- A name and role
- Followers and following count
- A call-to-action button (like “Follow”)

At first glance it looks small, but this project actually teaches some **fundamental concepts** of React and TailwindCSS.

---

## 💡 Why I Built This
Every developer starts React by learning **components**. But simply making a counter or todo app doesn’t really show the **reusability** of components.  
So I wanted to make something closer to real-world UI: a profile card, like the ones you see on Twitter, GitHub, or LinkedIn.

This way, You get to practice:
- Breaking UI into **components**
- Passing **props** to make them dynamic
- Styling with **Tailwind utility classes**
- Using **FontAwesome icons** inside React

---

## 🔍 How It Works
The `ProfileCard` component accepts props like `name`, `role`, `img`, `followers`, `following`, and `buttonText`.  

This makes the card **reusable**. Instead of hardcoding details, you can generate cards for any profile just by changing the props.  

Example:
```jsx
<ProfileCard 
  name="Harsh"
  role="Frontend Developer who focuses on simplicity & usability"
  img={PFP}
  buttonText="Follow"
  followers="285"
  following="185"
/>
