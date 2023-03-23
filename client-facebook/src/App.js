import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login-Signup/Login";
import SignUp from "./Components/Login-Signup/Signup";
import UserProfile from "./Components/UserProfile/UserProfile";
import FriendsSuggestion from "./Components/Friends/FriendsSuggestions";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/friends/suggestions" element={<FriendsSuggestion />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
