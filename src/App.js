import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Router,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [progress, setProgress] = useState(0)
  return (
    <div className="App">
      <Router>
        <NavBar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>

          <Route path="/" element={<News setProgress={setProgress} key="newsinfo" categories="general" />} />
          <Route path="/newsinfo" element={<News setProgress={setProgress} key="newsinfo" categories="general" />} />
          <Route path="/general" element={<News setProgress={setProgress} key="general" categories="general" />} />
          <Route path="/science" element={<News setProgress={setProgress} key="science" categories="science" />} />
          <Route path="/sports" element={<News setProgress={setProgress} key="sports" categories="sports" />} />
          <Route path="/business" element={<News setProgress={setProgress} key="business" categories="business" />} />
          <Route path="/health" element={<News setProgress={setProgress} key="health" categories="health" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} key="entertainment" categories="entertainment" />} />
          <Route path="/tech" element={<News setProgress={setProgress} key="tech" categories="tech" />} />
          <Route path="/politics" element={<News setProgress={setProgress} key="politics" categories="politics" />} />
          <Route path="/food" element={<News setProgress={setProgress} key="food" categories="food" />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
