import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import SingleMealDetail from './Components/SingleMealDetail/SingleMealDetail';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route path="mealDetail/:mealId" element={<SingleMealDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
