import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign from "./Sign.jsx"
import Login from "./Login.jsx"

function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Sign" element={<Sign />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
