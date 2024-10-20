import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import StartPage from './pages/StartPage'
import Second from './pages/Second';
import VirtualPavilion from './pages/VirtualPavilion';

function App() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='second' element={<Second />} />
          <Route path='VirtualPavillion' element={<VirtualPavilion />} />
        </Routes>
      </Router>
    );
}

export default App
