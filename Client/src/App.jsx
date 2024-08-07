// App.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainpage from '../src/Screens/Mainpage.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        {/* Add other routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
