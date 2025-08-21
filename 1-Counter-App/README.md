# 🔢 React Counter App

A beginner-friendly project to understand how **React state** works.  
This simple **Counter App** teaches the foundation of React by showing how to update the UI dynamically with the help of hooks.

---

## 💡 Why This Project?
When learning React, the **state** is one of the most important concepts. Unlike plain JavaScript where you manipulate the DOM directly, React gives you the **useState hook** to manage data and re-render the UI automatically.  

A counter app is the **perfect starting point** because:
- It’s simple enough for beginners
- It introduces the concept of **state management**
- It shows how UI updates are handled by React

---

## 🔍 How It Works
The app displays a number and has **Increment** and **Decrement** buttons.  
- Clicking **Increment** increases the number by 1  
- Clicking **Decrement** decreases the number by 1  

Core logic:
```jsx
const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>Increment</button>
<button onClick={() => setCount(count - 1)}>Decrement</button>
