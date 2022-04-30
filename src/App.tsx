import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import { FifthStep } from './components/FifthStep';
import { FirstStep } from './components/FirstStep';
import { FourthStep } from './components/FourthStep';
import { NotFound } from './components/NotFound';
import { Result } from './components/Result';
import { SecondStep } from './components/SecondStep';
import { ThirdStep } from './components/ThirdStep';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstStep />} />
        <Route path="/step2" element={<SecondStep />} />
        <Route path="/step3" element={<ThirdStep />} />
        <Route path="/step4" element={<FourthStep />} />
        <Route path="/step5" element={<FifthStep />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
