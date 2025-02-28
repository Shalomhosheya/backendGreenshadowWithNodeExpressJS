### TypeScript Basics

#### 1. What are the advantages of using TypeScript over JavaScript?
**Answer:**  
- **Static Typing:** Helps catch errors at compile time rather than runtime.  
- **Better IDE Support:** Improved autocompletion and type inference.  
- **Improved Code Readability:** Acts as documentation, making it easier for developers to understand the code.  
- **Enhanced Refactoring:** Makes refactoring safer by reducing unexpected bugs.  

---

#### 2. Explain the difference between an interface and a type alias in TypeScript.
**Answer:**  

| Feature          | Interface | Type Alias |
|----------------|-----------|------------|
| Extendable | Can be extended with `extends` | Cannot be extended directly |
| Merging | Supports declaration merging | No merging, only one declaration |
| Use Cases | Best for defining object shapes | Best for defining union/intersection types |

Example:
```ts
// Interface
interface User {
  name: string;
  age: number;
}

// Type Alias
type Status = "active" | "inactive";
```

---

#### 3. How do generics work in TypeScript? Can you provide an example?
**Answer:**  
Generics allow functions, classes, and interfaces to be reusable for multiple types.

Example:
```ts
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("Hello"); // Works with any type
```

---

#### 4. What is the difference between optional and required properties in TypeScript interfaces?
**Answer:**  
- **Required properties** must always be present in an object.  
- **Optional properties** (denoted by `?`) may or may not be included.

Example:
```ts
interface User {
  id: number;
  name: string;
  email?: string; // Optional property
}

const user1: User = { id: 1, name: "Alice" }; // Valid
const user2: User = { id: 2, name: "Bob", email: "bob@example.com" }; // Also valid
```

---

### React and TypeScript

#### 5. How do you define props in a functional component using TypeScript?
**Answer:**  
Props are defined using an interface and passed into the component.

Example:
```tsx
interface WelcomeProps {
  name: string;
}

const Welcome: React.FC<WelcomeProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

export default Welcome;
```

---

#### 6. What are the benefits of using TypeScript in a React project?
**Answer:**  
- **Type safety:** Prevents runtime errors.  
- **Autocompletion:** IDE provides suggestions based on types.  
- **Improved component structure:** Ensures correct prop types.  
- **Better maintainability:** Helps in large-scale applications.

---

### State Management

#### 7. How does the `useState` hook work in React with TypeScript?
**Answer:**  
The `useState` hook allows state management inside functional components.

Example:
```tsx
import { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

---

#### 8. Why is immutability important when updating the state in React?
**Answer:**  
- Directly modifying state can cause unexpected behavior.
- React relies on a diffing algorithm, and immutability ensures proper re-renders.
- **Incorrect way:**  
  ```ts
  customers.push(newCustomer); // Modifies original array
  ```
- **Correct way:**  
  ```ts
  setCustomers([...customers, newCustomer]); // Creates a new array
  ```

---

### React Router & Forms

#### 9. How do you define routes in a React application using `react-router-dom`?
**Answer:**  
```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-customer" element={<AddCustomer />} />
    </Routes>
  </BrowserRouter>
);
```

---

#### 10. How do you handle multiple form inputs using the `useState` hook in React?
**Answer:**  
Use an object state and update it dynamically:

```tsx
const [formData, setFormData] = useState({ name: "", email: "" });

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};
```

---

### Redux & Advanced State Management

#### 11. What is Redux, and how does it help in state management?
**Answer:**  
Redux is a centralized state management library. It helps:
- Manage global state in large applications.
- Avoid prop drilling.
- Store application state outside React components.

---

#### 12. What is Redux Thunk, and why is it used in a React application?
**Answer:**  
Redux Thunk is middleware for handling async operations like API calls.

Example:
```ts
const fetchCustomers = () => async (dispatch) => {
  const response = await axios.get("/api/customers");
  dispatch({ type: "SET_CUSTOMERS", payload: response.data });
};
```

---

### Backend and Full-Stack Development

#### 13. What is Prisma ORM, and how does it simplify database interactions?
**Answer:**  
- Prisma ORM maps database tables to JavaScript objects.
- Provides type-safe queries.
- Handles migrations automatically.

Example:
```ts
const customer = await prisma.customer.create({
  data: { name: "Alice", email: "alice@example.com" },
});
```

---

#### 14. How do you secure an API using JWT authentication?
**Answer:**  
Use JSON Web Tokens (JWT) to authenticate users.

Example:
```ts
const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  jwt.verify(token, "SECRET_KEY", (err, decoded) => {
    if (err) return res.status(401).json({ error: "Invalid token" });
    req.userId = decoded.userId;
    next();
  });
};
```

---