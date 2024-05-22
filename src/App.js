import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './pages/Login';
import SignupPage from "./pages/Signup"
import { isAuthenticated } from './services/auth';

function RequireAuth({ children, redirectTo }) {
  return isAuthenticated() ? children : <Navigate to={redirectTo} />
}

function App() {

  return (
    <div className='min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/app"
              element={
                <RequireAuth redirectTo={"/"}>
                  <h1>App</h1>
                </RequireAuth>}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;