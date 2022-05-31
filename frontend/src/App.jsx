import "./app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Home } from "./pages/home/Home";
import Watch from "./pages/watch/Watch";

const App = () => {
  let user = {
    accesstoken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODI0NDRkYzM0MzE2ZmM4M2E2MWY2YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDAxNTM5MywiZXhwIjoxNjU0NDQ3MzkzfQ.WVe3dP7mhfuG2BWU2cZKfGXPYeKDnZTaudeWF-yBrIU",
    createdAt: "2022-01-16T12:32:13.015Z",
    email: "haseebzahid6@gmail",
    isAdmin: true,
    profilePic:
      "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
    updatedAt: "2022-05-20T12:32:18.170Z",
    username: "haseeb zahid  new",
    __v: 0,
    _id: "6282444dc34316fc83a61f6a",
  };

  localStorage.setItem("user", JSON.stringify(user));

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
