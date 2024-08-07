import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainpage from './Screens/Mainpage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Mainpage />} />
      </Routes>
    </Router>
  );
}

export default App;
