import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RegisterForm } from "./components/register-form";
import { LoginPage } from "./pages/LoginPage";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
    
  )
}
