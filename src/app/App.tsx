
import { Header } from "../components/layout/header";
import { LocationProvider } from "./providers/locationProvider";
import { Navigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Missions } from "../pages/missions";
import { About } from "../pages/about";
import { Contact } from "../pages/contact";
import { Membership } from "../pages/membership";
import { Footer } from "../components/layout/footer";
import styles from "./App.module.scss";
import { ByLaws } from "../pages/bylaws";
import { SiteMap } from "../pages/sitemap";


function App() {
  return (
    <Router>
      <LocationProvider>
        <div className={styles.app}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/by-laws" element={<ByLaws />} />
            <Route path="/site-map" element={<SiteMap />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </div>
      </LocationProvider>
    </Router>
  );
}

export default App;
