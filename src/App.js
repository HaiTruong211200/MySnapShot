import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Body from "./components/Body";

function App() {
  const [searchEntry, setSearchEntry] = useState("");

  function handleChange(e) {
    setSearchEntry(e.target.value);
  }
  return (
    <div className="App">
      <Router>
        <Heading searchEntry={searchEntry} setSearchEntry={handleChange} />
        <Routes>
          <Route path="/" element={<Navigate to="/mountain" />}></Route>
          <Route
            path="/mountain"
            element={<Body searchItem="mountain" />}
          ></Route>
          <Route path="/beach" element={<Body searchItem="beach" />}></Route>
          <Route path="/sky" element={<Body searchItem="sky" />}></Route>
          <Route path="/river" element={<Body searchItem="river" />}></Route>
          <Route
            path="/search/:searchInput"
            element={<Body searchItem={searchEntry} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
