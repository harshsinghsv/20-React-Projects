# ✅ React Todo App

A clean and interactive **Todo App** built using **React** and **TailwindCSS**.  
This project goes beyond a simple task list by including features like **add, delete, edit, and toggle complete status**.  

It’s a beginner-friendly project that teaches **state management, event handling, and dynamic rendering** in React.

---

## 💡 Why This Project?
Todos are one of the most popular beginner React projects — and for good reason:  
- They cover **all the fundamentals** of React (state, props, events, re-rendering).  
- They’re practical — everyone can relate to a task list.  
- They can grow in complexity as you add more features.  

This app is not just "add and delete". It includes:  
- Adding tasks  
- Marking tasks complete (checkbox + strike-through)  
- Editing tasks in place  
- Deleting tasks  

---

## 🔍 How It Works
### 1. **State Management**
We use React’s `useState` hook for:  
- `task` → stores the input value  
- `todos` → stores the list of tasks  
- `editingId` & `editedText` → manage the edit mode  

```jsx
const [task, setTask] = useState('');
const [todos, setTodos] = useState([]);
const [editingId, setEditingId] = useState(null);
const [editedText, setEditedText] = useState('');
