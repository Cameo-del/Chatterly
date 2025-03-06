import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ✅ Import Context Providers
import AuthProvider from "./auth/AuthProvider"; // 🔹 Updated to use Auth0
import { ChatProvider } from "./contexts/ChatContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ModelProvider } from "./contexts/ModelContext";

// ✅ Import Global Styles
import "./styles/global.css";
import "./styles/variables.css";
import "./styles/theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>  {/* 🔹 Replaced old AuthProvider with Auth0 */}
    <ThemeProvider>
      <ModelProvider>
        <ChatProvider>
          <App />
        </ChatProvider>
      </ModelProvider>
    </ThemeProvider>
  </AuthProvider>
);
