# React Q&A

---

### 1. What is JSX, and why is it used?

**Answer:** JSX হলো JavaScript-এর একটি syntax extension, যা ব্যবহার করে React-এ HTML-এর মতো কোড লেখা যায়।

**JSX ব্যবহার করার কারণ:**

- UI কোড পড়তে ও বুঝতে সহজ হয়
- HTML-এর মতো structure থাকায় component তৈরি সহজ হয়
- UI এবং logic একই ফাইলে সংগঠিতভাবে রাখা যায়

---

### 2. What is the difference between State and Props?

**Answer:**

- **Props** - Parent component থেকে child component-এ data পাঠানোর জন্য ব্যবহৃত হয়
- **State** - Component-এর নিজস্ব data

---

### 3. What is the useState hook, and how does it work?

**Answer:** useState হলো একটি React Hook, যা functional component-এ state ব্যবহারের সুযোগ দেয়।

```jsx
const [count, setCount] = useState(0);
```

- `0` হলো initial value
- `count` হলো বর্তমান state
- `setCount` হলো state update করার function

যখন `setCount()` কল করা হয়, তখন React component-টি পুনরায় render করে এবং নতুন state প্রদর্শন করে।

---

### 4. How can you share state between components in React?

**Answer:**

1. Lifting State Up
2. Context API

---

### 5. How is event handling done in React?

**Answer:** React-এ event handling করা হয় camelCase syntax ব্যবহার করে এবং function reference দিয়ে।
