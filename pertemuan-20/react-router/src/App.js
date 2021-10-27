import React, { useEffect, useState } from "react";

// 1. install react-router-dom
// 2. import react-router-dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Login from "./components/Login/Login";
import About from "./components/About";
import Todo from "./components/Todo/Todo";
import Blog from "./components/Blog";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {}, [isLogin]);

  return (
    // 3. Bungkus
    <Router>
      {/* 5. Buat navigasi */}
      <div className="d-flex">
        <h1 className="me-5">LOGO</h1>
        <Link to="/" className="me-3">
          Home
        </Link>
        <Link to="/about" className="me-3">
          About
        </Link>
        <Link to="/todo" className="me-3">
          Todo
        </Link>
        {!isLogin && (
          <Link to="/login" className="me-3">
            Login
          </Link>
        )}
      </div>

      {/* List Blog */}
      <div>
        <h3>Pilih Blog</h3>
        <ul>
          <li>
            <Link to="/javascript">Javascript</Link>
          </li>
          <li>
            <Link to="/css">CSS</Link>
          </li>
        </ul>
      </div>

      {/* 4. Membuat Rute */}
      <Switch>
        {/* Halaman Home */}
        <Route exact path="/">
          <h1>Selamat datang di halaman Home</h1>
        </Route>

        {/* Halaman About */}
        <Route path="/about">
          <About />
        </Route>

        {/* Halaman Login */}
        <Route path="/login">
          <Login setIsLogin={setIsLogin} />
        </Route>

        {/* Halaman Todo */}
        <Route path="/todo">
          {isLogin ? <Todo /> : <Redirect to="/login" />}
        </Route>

        {/* Dinamic routes Blog*/}
        <Route path="/:namaBlog">
          <Blog />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
