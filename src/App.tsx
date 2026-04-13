import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BottomNavBar from './components/BottomNavBar';
import Home from './pages/Home';
import QueroViajar from './pages/B2C/QueroViajar';
import QueroDirigir from './pages/B2B/QueroDirigir';
import ZivApp from './pages/ZivApp';
import ZivStation from './pages/ZivStation';
import ZivCast from './pages/ZivCast';
import Journal from './pages/Journal';

function App() {
  return (
    <BrowserRouter>
      {/* Visual Effects */}
      <div className="noise-overlay"></div>
      
      <Header />
      
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quero-viajar" element={<QueroViajar />} />
          <Route path="/quero-dirigir" element={<QueroDirigir />} />
          <Route path="/ziv-app" element={<ZivApp />} />
          <Route path="/ziv-station" element={<ZivStation />} />
          <Route path="/ziv-cast" element={<ZivCast />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </div>

      <Footer />
      
      {/* Navigation Dock */}
      <BottomNavBar />
    </BrowserRouter>
  );
}

export default App;
