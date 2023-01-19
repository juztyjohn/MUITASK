import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Layout from './components/Pages/Layout';
import Contact from './components/Pages/Contact';
import LoginReg from './components/Pages/Auth/LoginReg';
import Dashboard from './components/Pages/Dashboard';
function App() {

  
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<LoginReg />} />
          </Route>
          <Route path="/dashborad" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
