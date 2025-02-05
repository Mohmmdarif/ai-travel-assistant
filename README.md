# React + TypeScript + Vite

# 🌍 AI Travel Assistant

🚀 **AI Travel Assistant** is a web application that helps users get country information, travel recommendations, and translations using **NVIDIA NIM API**.

---

## 📖 Project Overview

This project integrates **GraphQL** for country data retrieval and an **AI Chatbot** for user interactions.

### **🔹 Features**

✅ Ask AI about displayed countries  
✅ Get travel recommendations  
✅ Translate country information  
✅ Responsive UI for mobile and desktop

---

## ⚙️ **Setup Instructions**

### **🔧 Requirements**

- **Node.js** (v18+)
- **npm** or **yarn**
- **Git**

### **📥 Clone Repository**

```sh
git clone https://github.com/Mohmmdarif/ai-travel-assistant.git
cd ai-travel-assistant

npm install
```

To run this project you must be adding .env value and rename from .env.example file to .env file. and then complete the value of each variable.

### **🚀 Run the Application**

```sh
npm run dev
```

### **🛠️ Technical Decisions & Architecture**

- **Frontend: React.js + Tailwind CSS + Typescript**
- **State Management: React Hooks (useState, useEffect)**
- **API: GraphQL (Apollo Client)**
- **AI Assistant: NVIDIA NIM API**
- **Routing: React Router**
- **Temporary CORS access using cors-anywhere for AI Chat CORS 'https://cors-anywhere.herokuapp.com/corsdemo' make a request for temporary access to activate CORS and start to chatting with AI**

### **Demo Project**

![Demo](https://github.com/Mohmmdarif/ai-travel-assistant/blob/main/src/assets/gif/video_1.gif?raw=true)

![Demo](https://github.com/Mohmmdarif/ai-travel-assistant/blob/main/src/assets/gif/video_1.gif?raw=true)

---

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
