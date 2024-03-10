import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PaymentPage from "./PaymentPage";
import Contact from "./Contact";
import Home from "./Home";
import Profile from "./Profile";
import MissionsPage from "./MissionsPage";
import Help from "./Help";

import "./App.scss";

const App = () => {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>SpeedJob</h1>
        </header>
        <div className="main">
          <div className="sidebar">
            <h2>Menu</h2>

            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/profil">Profil</Link>
              </li>
              <li>
                <Link to="/missions">Missions</Link>
              </li>
              <li>
                <Link to="payment">Paiements</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/help">Aide</Link>
              </li>
            </ul>
          </div>
          <div className="content">
            <h2>Fenetre principale</h2>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/profil"
                element={
                  <Profile
                    username={"toto"}
                    email={"toto@email.com"}
                    bio={"Je suis toto"}
                  />
                }
              />
              <Route path="/missions" element={<MissionsPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/help" element={<Help />} />
            </Routes>
          </div>
        </div>
        <footer className="footer">
          <p>&copy; 2024 SpeedJob</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
