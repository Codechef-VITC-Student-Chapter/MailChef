import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainpage from './Screens/Mainpage.jsx';
import Saved from './Screens/Saved.jsx';
import Templates from './Screens/Templates.jsx';
import Download from './Screens/Download.jsx';
import Settings from './Screens/Settings.jsx';
import Sign from "./Screens/Signup.jsx"
import Login from "./Screens/Login.jsx"

function App() {
  return <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/saved" element={<Mainpage content={<Saved />} />} />
          <Route path="/templates" element={<Mainpage content={<Templates />} />} />
          <Route path="/download" element={<Mainpage content={<Download />} />} />
          <Route path="/settings" element={<Mainpage content={<Settings />} />} />
        </Routes>
    </Router>;
}

export default App
