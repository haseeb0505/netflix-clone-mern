import "./app.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Home } from "./pages/home/Home";
import Watch from "./pages/watch/Watch";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/movies" element={<Home type="movies" />} />

        <Route path="/series" element={<Home type="series" />} />
      </Routes>
    </Router>
  );
};

export default App;
