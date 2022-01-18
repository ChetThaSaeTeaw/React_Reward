import './App.css';
import { Routes , Route } from "react-router-dom";
import RewardPage from './Pages/RewardPage';
import BadLucky from './Components/RewardBoxes/BadLucky';
import GoodLucky from './Components/RewardBoxes/GoodLucky';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RewardPage />} />
        <Route path="/badlucky" element={<BadLucky />} />
        <Route path="/goodlucky" element={<GoodLucky />} />
      </Routes>
    </>
  );
}

export default App;
