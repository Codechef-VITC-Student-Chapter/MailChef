import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign from "./Screens/Signup.jsx"
import Login from "./Screens/Login.jsx"

function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Sign />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
