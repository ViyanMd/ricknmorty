import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import CharacterProfile from './pages/CharacterProfilePage/CharacterProfile';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterProfile />} />
      </Routes>
    </>
  );
};

export default App;