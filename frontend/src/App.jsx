import "./app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Home } from "./pages/home/Home";
import Watch from "./pages/watch/Watch";

const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Register />} />
        <Route path="/register" element={!user ? <Register /> : <Home />} />
        <Route path="/login" element={!user ? <Login /> : <Home />} />

        {user && (
          <>
            <Route path="/movies" element={<Home type="movie" />} />

            <Route path="/series" element={<Home type="series" />} />
            <Route path="/watch" element={<Watch />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
