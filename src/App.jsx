import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Completed from "./pages/Completed";
import Profile from "./pages/Profile";
import About from "./pages/About";

import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </UserProvider>
  );
}

export default App;